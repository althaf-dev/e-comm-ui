import axios from "axios";
import CONSTANTS from "../constants/constants";


export const axiosAuthInstance =  axios.create({
    baseURL:CONSTANTS.authBaseUrl,
    headers:{
        "Accept":"application/json" 
    },
    timeout:10000,
    withCredentials:true
});


export const axiosProductInstance =  axios.create({
    baseURL:CONSTANTS.productBaseUrl,
    headers:{
        "Accept":"application/json"
        
    },
    timeout:10000,
    withCredentials:true
});