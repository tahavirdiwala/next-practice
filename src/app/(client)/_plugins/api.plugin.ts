import axios, { AxiosRequestConfig } from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
});

API.interceptors.request.use((response) => {
  console.log("response", response);
  return response;
});

const GET = async <T>(url: string, config?: AxiosRequestConfig) => {
  return API.get<ApiResponse<T>>(url, config).then((res) => res.data);
};

const POST = async <T>(url: string, payload: object) => {
  return API.post<ApiResponse<T>>(url, payload).then((res) => res.data);
};

export { POST, GET };
export default API;
