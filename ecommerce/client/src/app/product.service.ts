import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Order, Product } from "./models";

@Injectable()
export class ProductService {

  private http = inject(HttpClient)


  // IMPORTANT: DO NOT MODIFY THIS METHOD.
  // If this method is changed, any assessment task relying on this method will
  // not be marked
  getProductCategories(): Observable<string[]> {
    return this.http.get<string[]>('/api/categories')
  }

  // IMPORTANT: DO NOT MODIFY THIS METHOD.
  // If this method is changed, any assessment task relying on this method will
  // not be marked
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`/api/category/${category}`)
  }

  // IMPORTANT: DO NOT MODIFY THIS METHOD.
  // If this method is changed, any assessment task relying on this method will
  // not be marked
  checkout(order: Order) {
    // TODO Task 3
    const formData = new FormData();
    formData.set('name', order.name);
    formData.set('address', order.address);
    formData.set('priority', String(order.priority));
    formData.set('comments', order.comments);
    formData.set('cart', JSON.stringify(order.cart));
    
    return this.http.post<Order>(`${this.apiUrl}/checkout`, formData);
  }
  
  readonly apiUrl = "/api";
}