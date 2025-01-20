import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../interface';

// Define action to add a product to the store
export const addProduct = createAction(
  '[Products] Add Product',
  props<{
    product: IProduct;
  }>()
);

export const deleteProduct = createAction(
  '[Products] Delete Product',
  props<{
    id: number;
  }>()
);
