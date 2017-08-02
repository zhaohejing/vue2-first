import Vue from "vue";
import Router from "vue-router";
//import api from "./../fetch/api";

Vue.use(Router);
// let menus = [];
// api.mineDashboard().then(r => {
//   if (r.success) {
//     menus = r.result;
//   }
// });
export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },

    {
      path: "/dashboard",
      component: r =>
        require(["../components/common/index.vue"], r),
      children: [
        {
          path: "",
          component: r =>
            require(["../components/common/dashboard.vue"], r)
        },
        {
          path: "/figure",
          component: r =>
            require(["../components/page/store/index.vue"], r)
        },
        {
          path: "/integral",
          component: r =>
            require(["../components/page/integral/index.vue"], r)
        },
        {
          path: "/form",
          component: r =>
            require(["../components/page/form.vue"], r)
        },
        {
          path: "/table",
          component: r =>
            require(["../components/page/table.vue"], r)
        },
        {
          path: "/markdown-viewer",
          component: r =>
            require(["../components/page/markdown-viewer.vue"], r)
        },
        {
          path: "/markdown-editor-1",
          component: r =>
            require(["../components/page/markdown-editor-1.vue"], r)
        },
        {
          path: "/markdown-editor-2",
          component: r =>
            require(["../components/page/markdown-editor-2.vue"], r)
        },
        {
          path: "/rtf",
          component: r => require(["../components/page/rtf.vue"], r)
        },
        {
          path: "/upload",
          component: r =>
            require(["../components/page/upload.vue"], r)
        },
        {
          path: "/echarts",
          component: r =>
            require(["../components/page/echarts.vue"], r)
        }
      ]
    },
    {
      path: "/login",
      component: r => require(["../components/common/login.vue"], r)
    }
  ]
});
