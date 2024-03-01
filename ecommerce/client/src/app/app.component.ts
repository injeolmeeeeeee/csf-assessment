import { Component, OnInit, inject } from '@angular/core';
import {Router} from '@angular/router';
import { Cart } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  // NOTE: you are free to modify this component

  private router = inject(Router)

  itemCount: number = 0;
  cart!: Cart
  

  ngOnInit(): void {
    if (this.cart && this.cart.lineItems) {
      const distinctProduct = new Set(this.cart.lineItems
                      .map(item => item.prodId));
      this.itemCount = distinctProduct.size;
    }
  }

  checkout(): void {
    this.router.navigate([ '/checkout' ])
  }

}