import axios from 'axios';

export const apiUrl = 'http://localhost:5000/';

axios.defaults.baseURL = apiUrl;

class Api {
  static getProducts() {
    return axios.get(`/products`);
  }
}

export default Api;