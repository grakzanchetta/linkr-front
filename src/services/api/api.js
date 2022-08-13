import axios from "axios";

export function authApi(token) {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,

    headers: { Authorization: `Bearer 26dc30b9-5802-48d1-a84d-2f882ede8185` }
    // headers: { Authorization: `Bearer ${token}` }
  });
}
