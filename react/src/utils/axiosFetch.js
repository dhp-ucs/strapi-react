import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: 'http://localhost:1337/api',
  withCredentials: true,
});

export const axiosPostArticle = axios.create({
  baseURL: 'http://localhost:1337/api/input-articles',
  withCredentials: true,
});
