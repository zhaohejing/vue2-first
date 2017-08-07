import axios from "axios";
//import store from '@/store/index';
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Authorization"] =
  "Bearer " +    localStorage.getItem("USER_TOKEN");
axios.defaults.headers.get["Content-Type"] = "application/json";
axios.defaults.headers.get["Authorization"] =
  "Bearer "+localStorage.getItem("USER_TOKEN");
axios.defaults.baseURL = "http://tcservice.hijigu.com:8080/";
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
export default {
  // 获取我的页面的后台数据
  mineDashboard() {
    // alert('进入api.js')
    return fetch("api/sysmenu/getMenuPerson");
  },
  commonPost(url, params) {
    return fetch(url, params);
  },
  commonGet(url, params) {
    return get(url, params);
  }
};
