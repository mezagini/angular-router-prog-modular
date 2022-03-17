import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProductDTO, Product, UpdateProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(private _http: HttpClient) { }

  getAllProducts() {
    return this._http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: string) {
    return this._http.get<Product>(`${this.apiUrl}/${id}`);
  }

  create(product: CreateProductDTO) {
    return this._http.post<Product>(this.apiUrl, product);
  }

  update(id: string, product: UpdateProductDTO) {
    return this._http.put<Product>(this.apiUrl, product);
  }

  delete(id: string) {
    return this._http.delete<Product>(`${this.apiUrl}/${id}`);
  }

}
