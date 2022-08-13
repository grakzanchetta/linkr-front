import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export function authApi(token) {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { Authorization: `Bearer ${token}` }
  });
}
