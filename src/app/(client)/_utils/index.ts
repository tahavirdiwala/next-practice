import { InternalAxiosRequestConfig } from "axios";

function requestInterceptor(response: InternalAxiosRequestConfig) {
  if (response.method && ["post", "put"].includes(response.method)) {
    const payload = response.data;

    Object.keys(payload).forEach((key) => {
      if (typeof payload[key] === "string") {
        payload[key] = payload[key].trim();
      }
    });

    return { ...response, data: payload };
  }
  return response;
}

export { requestInterceptor };
