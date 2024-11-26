import axios, { AxiosRequestConfig } from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
});

const GET = async <T>(url: string, config?: AxiosRequestConfig) => {
  return API.get<ApiResponse<T>>(url, config).then((res) => res.data);
};

export { GET };
export default API;
