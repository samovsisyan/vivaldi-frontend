import axios from 'axios';

export const apiUrl = 'http://localhost:3000/';

axios.defaults.baseURL = apiUrl;

class Api {
  static signIn(data) {
    return axios.post(`http://localhost:8000/auth/login`,data);
  }

}

export default Api;