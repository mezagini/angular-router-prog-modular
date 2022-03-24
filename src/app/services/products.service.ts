import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateProductDTO, Product, UpdateProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = `${environment.apiUrl}/api/products`;

  constructor(private _http: HttpClient) { }

  getAllProducts(limit?: number, offset?: number): Observable<Product[]> {

    let params = new HttpParams();
    if (limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this._http.get<Product[]>(this.apiUrl)
      .pipe(
        map(products => {
          return products.map(product => {
            return {
              ...product,
              taxes: product.price * .16
            }
          })
        })
      );
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
