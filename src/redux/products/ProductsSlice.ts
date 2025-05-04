import { createSlice } from '@reduxjs/toolkit';

export interface Products {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
}

interface ProductState {
  loading: boolean;
  error: null | string;
  products: Products[];
}

const initialState: ProductState = {
  loading: false,
  error: null,
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductList: (state) => {
      state.loading = true;
    },
    getProductListSucces: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    getProductListFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { getProductList, getProductListSucces, getProductListFailure } =
  productSlice.actions;
export default productSlice.reducer;
