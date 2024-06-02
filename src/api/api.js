import axios from "axios";
export const BASE_URL = 'https://dummyjson.com/'
axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use({
  Headers: {}
})

export default axios