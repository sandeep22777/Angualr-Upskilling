import { IProduct } from '../../interface';

export interface ProductsState {
  products: IProduct[];
}

export const initialState: ProductsState = {
  products: [],
};
