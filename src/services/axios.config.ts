import axios from "axios";
import { ACCESS_TOKEN, TOKEN_CYBER } from "src/constants";
import { getLocal } from "src/utils";

const BASE_URL = "https://shop.cyberlearn.vn/api";

export const axiosWithoutAuth = axios.create({
  baseURL: BASE_URL,

  timeout: 180_000,
});

export const axiosAuth = axios.create({
  baseURL: BASE_URL,

  timeout: 180_000,
});
axiosAuth.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getLocal(ACCESS_TOKEN)}`;
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  },
);
//! ---------MOVIE------------------------------------
const MOVIE_URL = "https://movienew.cybersoft.edu.vn/api";

export const axiosWithoutAuth_Movie = axios.create({
  baseURL: MOVIE_URL,

  timeout: 180_000,
});

axiosWithoutAuth_Movie.interceptors.request.use(
  (config) => {
    config.headers.TokenCybersoft = TOKEN_CYBER;
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  },
);

export const axiosAuth_Movie = axios.create({
  baseURL: MOVIE_URL,

  timeout: 180_000,
});

axiosAuth_Movie.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getLocal(ACCESS_TOKEN)}`;

    // Token Cyber
    config.headers.TokenCybersoft = TOKEN_CYBER;

    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);
