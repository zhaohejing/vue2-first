import Vue from "vue";
import App from "./App";
import router from "./router";
import VueMarkdown from "vue-markdown";
import iView from "iview";
import "iview/dist/styles/iview.css";
import VueQuillEditor from "vue-quill-editor";
import IEcharts from "vue-echarts-v3";
import store from "./store/index";
Vue.use(iView);
Vue.use(VueMarkdown);
Vue.use(IEcharts);
Vue.config.productionTip = true;
//路由全局钩子
router.beforeEach((to, from, next) => {
  if (to.path != from.path) {
    var token = store.getters.userToken;
    if (!token) {
      return next({ path: "/" });
    }
  }

  // do something
  next();
});
new Vue({
  el: "#app",
  router,
  VueMarkdown,
  store,
  template: "<App/>",
  components: { App }
});
