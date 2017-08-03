import api from './../../fetch/api';
import * as types from './../type.js';
// state 是vuex 保存数据的，就相当于vue里的data
const state = {
    contextPathSrc: 'http://tcservice.hijigu.com:8080/',
    userToken: '',
    userName: '',
}
const actions = {
    // 保存ID  storeMovieID为上面的"action名"
    storeToken({ commit }, res) {
        //此处是触发mutation的 STORE_MOVIE_ID为"mutation名"
        commit(types.USER_TOKEN, res);
    },
     // 保存ID  storeMovieID为上面的"action名"
    storeName({ commit }, res) {
        //此处是触发mutation的 STORE_MOVIE_ID为"mutation名"
        commit(types.USER_NAME, res);
    }
}
const getters = {
    // 图片公共 src 的获取 getter函数：state=> state.数据名
    getContextPathSrc: state => state.contextPathSrc,
    // 获取ID
    userToken: state => {
        if(state.userToken == ''){
            return localStorage.getItem(types.USER_TOKEN);
        }else{
            return state.userToken;
        }
    },
     // 获取ID
    userName: state => {
        if(state.userName == ''){
            return localStorage.getItem(types.USER_NAME);
        }else{
            return state.userName;
        }
    },
}
//mutation名常量定义 并且需要在type.js文件下定义常量 mutations 用来向state提交数据的，只能进行同步操作
const mutations = {
    // 修改ID 中括号代表常量 我们可使用ES2015风格的计算属性命名功能来使用一个常量[types.STORE_MOVIE_ID]作为函数名
    [types.USER_TOKEN]( state, res) {
        state.userToken = res;
    },
      // 修改ID 中括号代表常量 我们可使用ES2015风格的计算属性命名功能来使用一个常量[types.STORE_MOVIE_ID]作为函数名
    [types.USER_NAME]( state, res) {
        state.userName = res;
    },
}
export default {
    state,
    actions,
    getters,
    mutations
}