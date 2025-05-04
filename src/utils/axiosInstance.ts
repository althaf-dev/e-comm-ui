import axios from "axios";
import CONSTANTS from "../constants/constants";


const axiosInstance =  axios.create({
    baseURL:CONSTANTS.baseUrl,
    headers:{
        "Accept":"application/json"
        
    },
    timeout:10000,
    withCredentials:true
});

export default axiosInstance;