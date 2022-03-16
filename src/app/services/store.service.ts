import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();


  constructor() { }

  addProduct(product: Product) {
    this.myShoppingCart = [...this.myShoppingCart, product];
    this.myCart.next(this.myShoppingCart);
  }

  get getShoppingCart() {
    return this.myShoppingCart;
  }

  get getProductsQuantityInStore() {
    return this.myShoppingCart.length;
  }

  getTotal() {
   return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
