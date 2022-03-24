import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { CreateProductDTO, Product, UpdateProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = '/api/products';

  constructor(private _http: HttpClient) { }

  getAllProducts(limit?: number, offset?: number) {

    let params = new HttpParams();
    if (limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this._http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: string) {
    return this._http.get<Product>(`${this.apiUrl}/${id}`);
  }

  getProductsByPage(limit: number, offset: number) {
    return this._http.get<Product[]>(`${this.apiUrl}`, {
      params: {limit, offset}
    })
    .pipe(
      retry(3)
    );
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
