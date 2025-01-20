import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ITodo, Items } from './body-interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addProduct, deleteProduct } from '../store/products/products.actions';
import { CartComponent } from '../cart/cart.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-body',
  imports: [FormsModule, CommonModule, CartComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  items: Items[] = [];
  constructor(
    private http: HttpClient,
    private store: Store,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}
  getProducts() {
    this.http
      .get<Items[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        console.log(data, 'data');
        this.items = data;
      });
  }
  success() {
    this.toast.success('Product added to cart!');
    console.log('sandeep');
  }

  addToCart(product: Items) {
    const productToAdd = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.images[0],
    };
    this.store.dispatch(addProduct({ product: productToAdd }));
    this.success();
  }
  deleteFromCart(id: number) {
    this.store.dispatch(deleteProduct({ id: id }));
  }
}
