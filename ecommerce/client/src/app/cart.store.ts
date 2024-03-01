import { Injectable } from "@angular/core";
import { Cart } from "./models";

// TODO Task 2
// Use the following class to implement your store
@Injectable()
export class CartStore {

  saveToLocalStorage(cart: Cart) {
    localStorage.setItem('data', JSON.stringify(cart))
  }

  getFromLocalStroage(): Cart | undefined {
    const c = localStorage.getItem('data')
    if (!!c)
      return JSON.parse(c) as Cart
    return undefined
  }
}


