import {axiosAuthInstance} from "../../utils/axiosInstance";
import PATH from "../../utils/apiPath";

export const loginApi = (payload:any)=>{
    return axiosAuthInstance.post(PATH.LOGIN,payload)
}

export const logoutApi = ()=>{
    return axiosAuthInstance.get(PATH.LOGOUT)
}

export const refreshApi = ()=>{
    return axiosAuthInstance.get(PATH.REFRESH)
}
export const signupApi = (payload:any)=>{
    return axiosAuthInstance.post(PATH.SIGNUP,payload)
}