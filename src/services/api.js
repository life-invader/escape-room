import axios from 'axios';

const BASE_URL = 'http://localhost:3001/';
const TIMEOUT = 5000;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});
