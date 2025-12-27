import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  addLoading: boolean;
  addError: null | string;
}

const initialState: ProductState = {
  loading: false,
  error: null,
  products: [],
  addLoading: false,
  addError: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductList: (state) => {
      state.loading = true;
    },
    getProductListSucces: (state, action: PayloadAction<Products[]>) => {
      state.products = action.payload;
      state.loading = false;
    },
    getProductListFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    addProductRequest: (state, _action: PayloadAction<Products>) => {
      state.addLoading = true;
      state.addError = null;
      // action.payload contains the product to add
    },
    addProductSuccess: (state, action: PayloadAction<Products>) => {
      state.products.push(action.payload);
      state.addLoading = false;
    },
    addProductFailure: (state, action: PayloadAction<string>) => {
      state.addError = action.payload;
      state.addLoading = false;
    },
  },
});

export const { getProductList, getProductListSucces, getProductListFailure, addProductRequest, addProductSuccess, addProductFailure } =
  productSlice.actions;
export default productSlice.reducer;
