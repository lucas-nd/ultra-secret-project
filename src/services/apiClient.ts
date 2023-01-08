import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";

export const apiClient = () => {
  let cookies = parseCookies();
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      Authorization: `Bearer ${cookies["token"]}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      return;
    }
  );

  return api;
};
