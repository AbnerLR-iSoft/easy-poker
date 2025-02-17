import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config: any) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };

  return config;
});

export default api;
