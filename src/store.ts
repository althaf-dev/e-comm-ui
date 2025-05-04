import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth/authSlice";
import createSaga from "redux-saga"
import rootSaga from "./rootSaga";
import productReducer from "./redux/products/ProductsSlice"

const sagaMiddleware = createSaga();

const store =  configureStore({

    reducer:{
        auth:authReducer,
        product:productReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([sagaMiddleware])
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export default store;