import router from "@/router";
import store from "@/store";
import { getToken, removeToken } from "@/utils/auth";
import axios from "axios";
import { Toast } from "vant";
import VueI18n from 'vue-i18n';
import i18nData from "@/i18n";
const dgaj=localStorage.getItem('lang')  || 'ZW';

// console.log(dagsa);
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // baseURL:'http://47.238.168.229:4055/api/',
  timeout: 5000,
});

let toast;

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 请求前显示加载效果
    toast = Toast.loading({
      message:'Read in...',
      forbidClick: true,
      duration: 0,
    });

    // 携带 token
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${getToken()}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    toast.clear();
    return response.data;
  },
  (error) => {
    // 如果有错误响应，则提示错误提示
    if (error.response) {
      if (error.response.status === 401) {
        removeToken();
        router.push("/login");
      } else {
        Toast(error.response.data.message);
      }
    }
    return Promise.reject(error);
  }
);

export default service;
