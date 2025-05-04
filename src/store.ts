import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth/authSlice";
import createSaga from "redux-saga"
import rootSaga from "./rootSaga";

const sagaMiddleware = createSaga();

const store =  configureStore({

    reducer:{
        auth:authReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([sagaMiddleware])
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export default store;