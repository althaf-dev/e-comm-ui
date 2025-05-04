import { call, put, takeEvery } from 'redux-saga/effects';
import { ProductApi } from './api';
import {
  getProductList,
  getProductListFailure,
  getProductListSucces,
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

function* ProductSaga(): any {
  yield takeEvery(getProductList.type, fetchProductsList);
}

export default ProductSaga;
