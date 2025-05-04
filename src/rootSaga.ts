import authSaga from "./redux/auth/authSaga";
import { all } from "redux-saga/effects";
import ProductSaga from "./redux/products/ProductSaga";

function* rootSaga(){
    yield all([
        authSaga(),
        ProductSaga()
    ])
};

export default rootSaga;