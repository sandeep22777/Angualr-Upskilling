import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';

// Select the entire products state
export const selectProductsState =
  createFeatureSelector<ProductsState>('products');

// Select the list of products
export const selectProducts = createSelector(
  selectProductsState,
  (state) => state.products
);
