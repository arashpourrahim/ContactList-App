import axios from "axios";

const axiosConfig = {
  baseURL: "",
  headers: {},
};

const axiosInstance = axios.create({ axiosConfig });

export default axiosInstance;
