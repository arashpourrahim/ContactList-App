import axiosInstance from "./axiosInstans";

axiosInstance.interceptors.request.use(
  () => {},
  () => {}
);

axiosInstance.interceptors.response.use(
  () => {},
  () => {}
);

export const http = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.get,
};
