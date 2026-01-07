import { call, put, takeEvery } from "redux-saga/effects";
import { loginApi ,logoutApi, refreshApi, signupApi} from "./api";
import { loginFailure, loginRequest, loginSuccess, logoutReq, logoutSuccess, refreshRequest, refreshSuccess, signupFailure, signupRequest, signupSuccess } from "./authSlice";
import { AxiosError } from "axios";

function* loginRequestSaga(action: any): any {
  try {
    const res = yield call(loginApi, action.payload);
    yield put(loginSuccess(res.data));
  } catch (e) {
    if(e instanceof AxiosError)
    yield put(loginFailure(e?.response?.data?.error ||"some thing went wrong"));
  }
}

function* logoutSaga():any{
    try{
      const res =  yield call(logoutApi);
      yield put(logoutSuccess(res));
    }catch(e){
      console.log("logout failed")
    }
}

function* refreshRequestSaga(_action: any): any {
  try {
    const res = yield call(refreshApi);
    yield put(refreshSuccess(res.data));
  } catch (e) {
    if(e instanceof AxiosError)
      console.log(e)
      yield put(loginFailure("some thing went wrong"));
    
      
  }
}

function* signupRequesSaga(action:any):any{

  try{
    const res = yield call(signupApi,action.payload);
    yield put(signupSuccess(res.data));
  }catch(e){
    if(e instanceof Error){
      yield put(signupFailure(e.message));
    }
  }
}

function* authSaga() {
  yield takeEvery(loginRequest.type, loginRequestSaga);
  yield takeEvery(logoutReq.type,logoutSaga);
  yield takeEvery(refreshRequest.type,refreshRequestSaga);
  yield takeEvery(signupRequest.type,signupRequesSaga);
}

export default authSaga;
