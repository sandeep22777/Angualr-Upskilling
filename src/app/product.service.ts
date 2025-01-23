import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  IProductDetail,
  IProductRequestBody,
  IProductResponse,
} from './interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl =
    'https://freeapi.miniprojectideas.com/api/amazon/DeleteProductById';
  constructor(private http: HttpClient) {}

  fetchData(url: string): Observable<IProductDetail[]> {
    return this.http
      .get<IProductResponse>(url)
      .pipe(map((response) => response.data));
  }

  addProduct(product: IProductRequestBody): Observable<any> {
    const postUrl =
      'https://freeapi.miniprojectideas.com/api/amazon/CreateProduct';
    return this.http.post(postUrl, product);
  }

  editProduct(product: IProductRequestBody): Observable<any> {
    const postUrl =
      'https://freeapi.miniprojectideas.com/api/amazon/UpdateProduct';
    return this.http.post(postUrl, product);
  }

  deleteProduct(productId: number): Observable<any> {
    const url = `${this.apiUrl}?id=${productId}`;
    return this.http.get<any>(url);
  }
}
