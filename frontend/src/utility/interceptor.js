
import axios from 'axios';
import store from '../Redux/store';
const Axios = axios.create({
  baseURL: (process.env.NODE_ENV === 'development')? "http://localhost:3001":""
});

Axios.interceptors.request.use(
  function(config) {
    const state = store.getState();
    const token = state.auth.authUser.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default Axios;
