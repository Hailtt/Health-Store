import axios from 'axios';
import { storeId } from './constants';

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Request-Id': storeId,
  },
  timeout: 30000,
});

request.interceptors.response.use(
  (response) => response?.data,
  (error) => Promise.reject(error),
);

export default request;
