import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000/api'
})

http.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export default http;