"use strict";

import Vue from 'vue';
import axios from "axios";
import qs from 'qs';
import baseURL from '../utils/setBaseUrl'
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let config = {
  baseURL,
  timeout: 10 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    "Cache-Control": "no-cache",
    'Access-Control-Allow-Headers': 'Content-Type'
  },
};

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    if (config.method === "post") {
      config.data = qs.stringify(config.data)
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "错误请求"
          break
        case 401:
          error.message = "未授权，请重新登录"
          break
        case 403:
          error.message = "拒绝访问"
          break
        case 404:
          error.message = "请求错误，未找到该资源"
          break
        case 405:
          error.message = "请求方法未允许"
          break
        case 408:
          error.message = "请求超时"
          break
        case 500:
          error.message = "服务器出错"
          break
        case 501:
          error.message = "网络未实现"
          break
        case 502:
          error.message = "网络错误"
          break
        case 503:
          error.message = "服务不可用"
          break
        case 504:
          error.message = "网络超时"
          break
        case 505:
          error.message = "http版本不支持该请求"
          break
        default:
          error.message = `连接错误${error.response.status}`
      }
    } else {
      error.message = "网络出现问题，请稍后尝试"
    }

    Message.error(error.message)
    return Promise.reject(error);
  }
);

Plugin.install = function (Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;