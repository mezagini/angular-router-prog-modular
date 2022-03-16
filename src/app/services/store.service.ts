import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];

  constructor() { }

  addProduct(product: Product) {
    debugger
    this.myShoppingCart = [...this.myShoppingCart, product];
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
