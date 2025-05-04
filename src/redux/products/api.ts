import apiPath from '../../utils/apiPath';
import {axiosProductInstance} from '../../utils/axiosInstance';

export const ProductApi = () => {
  return axiosProductInstance.get(apiPath.PRODUCTS);
};
