// 组装模块并导出 store 的文件
import Vue from "vue";
import Vuex from "vuex";
import api from "@/fetch/api";
import * as types from "./type.js";
//import mine from "./modules/mine";
Vue.use(Vuex);
// 导出需要的模块
export default new Vuex.Store({
  state: {
    serverUrl: "http://tcservice.hijigu.com:8080/",
    userinfo: {}
  },
  actions: {
        // 保存ID  storeMovieID为上面的"action名"
    storeUser({ commit }, res) {
        //此处是触发mutation的 STORE_MOVIE_ID为"mutation名"
        commit(types.USER_INFO, res);
    },
  },
  mutations: {
    // 修改ID 中括号代表常量 我们可使用ES2015风格的计算属性命名功能来使用一个常量[types.STORE_MOVIE_ID]作为函数名
    [types.USER_INFO](state, res) {
      state.userinfo = res;
    }
  },

  getters: {
    // 图片公共 src 的获取 getter函数：state=> state.数据名
    serverUrl: state => state.serverUrl,
    // 获取ID
    userToken: state =>{
        if(!state.userinfo.token){
            return localStorage.getItem("USER_TOKEN");
        }
        return state.userinfo.token;
    }  ,
    userName: state =>{
          if(!state.userinfo.nick_name){
            return localStorage.getItem("USER_NAME");
        }
        return state.userinfo.nick_name;
    } 
  }
});
