import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from '../models';
import { CartStore } from '../cart.store';
import { filter, switchMap, tap } from 'rxjs/operators';
import { EMPTY, Observable, of } from 'rxjs';

@Component({
  selector: 'app-confirm-checkout',
  templateUrl: './confirm-checkout.component.html',
  styleUrls: ['./confirm-checkout.component.css']
})
export class ConfirmCheckoutComponent implements OnInit {

  // TODO Task 3

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private cartStore = inject(CartStore);

  form!: FormGroup;
  imageFile!: File;
  cart !: Cart | undefined;
  cart$?: Observable<Cart | undefined> | undefined;
  totalPrice!: number | undefined

  constructor() { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      priority: [true, Validators.required],
      comments: ['']
    });
  }

  getCart() {
    const cartFromLocalStorage = this.cartStore.getFromLocalStroage();
    if (cartFromLocalStorage) {
      this.cart$ = of(cartFromLocalStorage);
      this.cart$.subscribe((cart: Cart | undefined) => {
        if (cart) {
          if (cart.lineItems.length == 0) {
            console.info('Cart is empty');
          } else {
            console.info('Cart has items:', cart);
          }
        } else {
          console.info('Cart is undefined');
        }
      });
    } else {
      console.info('Cart is undefined');
    }
  }

  total(cart: Cart): number {
    let totalPrice = 0;
    if (cart && cart.lineItems) {
      for (const lineItem of cart.lineItems) {
        totalPrice += lineItem.price;
      }
    }
    return totalPrice;
  }
  
}