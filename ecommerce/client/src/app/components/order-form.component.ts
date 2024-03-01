import { Component, Input, OnInit, Output, inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Cart, LineItem} from '../models';
import { Router } from '@angular/router';
import { CartStore } from '../cart.store';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent implements OnInit {

  // NOTE: you are free to modify this component

  private fb = inject(FormBuilder)
  private router = inject(Router)
  private cartStore = inject(CartStore)

  @Input({ required: true })
  
  productId!: string
  form!: FormGroup
  cart !: Cart;

  ngOnInit(): void {
    this.form = this.createForm()
  }

  addToCart() {
    const lineItem: LineItem = {
      prodId: this.productId,
      quantity: this.form.value['quantity'],
      name: '',
      price: 0
    };
    console.info('>>> lineItem: ', lineItem);
    
    this.cart.lineItems.push(lineItem);
    console.info('>>> cart', this.cart);
    
    this.cartStore.saveToLocalStorage(this.cart);
    this.form = this.createForm();
  }


  private createForm(): FormGroup {
    return this.fb.group({
      quantity: this.fb.control<number>(1, [ Validators.required, Validators.min(1) ])
    })
  }

}

