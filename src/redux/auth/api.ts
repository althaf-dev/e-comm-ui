import axiosInstance from "../../utils/axiosInstance";
import PATH from "../../utils/apiPath";

export const loginApi = (payload:any)=>{
    return axiosInstance.post(PATH.LOGIN,payload)
}

export const logoutApi = ()=>{
    return axiosInstance.get(PATH.LOGOUT)
}

export const refreshApi = ()=>{
    return axiosInstance.get(PATH.REFRESH)
}
export const signupApi = (payload:any)=>{
    return axiosInstance.post(PATH.SIGNUP,payload)
}