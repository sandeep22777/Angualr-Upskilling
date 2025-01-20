import { createReducer, on } from '@ngrx/store';
import { addProduct, deleteProduct } from './products.actions';
import { ProductsState, initialState } from './products.state';

export const productsReducer = createReducer(
  initialState,
  on(addProduct, (state, { product }) => {
    const productExists = state.products.some((item) => item.id === product.id);
    if (productExists) {
      return state;
    }

    return {
      ...state,
      products: [...state.products, product],
    };
  }),

  on(deleteProduct, (state, { id }) => ({
    ...state,
    products: state.products.filter((item) => item.id != id),
  }))
);
