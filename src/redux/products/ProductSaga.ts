import { call, put, takeEvery } from 'redux-saga/effects';
import { ProductApi, AdminAddProductApi } from './api';
import {
  getProductList,
  getProductListFailure,
  getProductListSucces,
  addProductRequest,
  addProductSuccess,
  addProductFailure,
} from './ProductsSlice';

function* fetchProductsList(): any {
  try {
    const res = yield call(ProductApi);
    yield put(getProductListSucces(res.data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(getProductListFailure(e.message));
    }
  }
}

function* addProduct(action: any): any {
  try {
    const res = yield call(AdminAddProductApi, action.payload);
    yield put(addProductSuccess(res.data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(addProductFailure(e.message));
    }
  }
}

function* ProductSaga(): any {
  yield takeEvery(getProductList.type, fetchProductsList);
  yield takeEvery(addProductRequest.type, addProduct);
}

export default ProductSaga;
