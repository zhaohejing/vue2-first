import Vue from "vue";
import Router from "vue-router";
//import api from '@/fetch/api';

Vue.use(Router);
let routes = [
  //控制台
  {
    path: "",
    component: r => require(["../components/common/dashboard.vue"], r)
  },
  //轮播图
  {
    path: "/figure",
    component: r => require(["../components/page/store/figure.vue"], r)
  },
  //banner
   {
    path: "/banner",
    component: r => require(["../components/page/store/banner.vue"], r)
  },
  //积分商城记录
  {
    path: "/integralrecord",
    component: r => require(["../components/page/integral/record.vue"], r)
  },
  //积分商城
  {
    path: "/integral",
    component: r => require(["../components/page/integral/index.vue"], r)
  },
 //商品
  {
    path: "/product",
    component: r => require(["../components/page/store/product.vue"], r)
  },
   //订单
  {
    path: "/order",
    component: r => require(["../components/page/store/order.vue"], r)
  },
 //用户
  {
    path: "/users",
    component: r => require(["../components/page/manage/users.vue"], r)
  },
 //角色
  {
    path: "/roles",
    component: r => require(["../components/page/manage/roles.vue"], r)
  },
  //纪念章成就
  {
    path: "/medal",
    component: r => require(["../components/page/achieve/medal.vue"], r)
  },
 //游记成就
  {
    path: "/traceachi",
    component: r => require(["../components/page/achieve/trace.vue"], r)
  },
//系列管理
  {
    path: "/series",
    component: r => require(["../components/page/series/series.vue"], r)
  },
  //邮费管理
  {
    path: "/postage",
    component: r => require(["../components/page/series/postage.vue"], r)
  }
    //游迹管理
  ,{
    path: "/trace",
    component: r => require(["../components/page/trace/trace.vue"], r)
  }
  //统计系列管理
 ,{
    path: "/gaintrace",
    component: r => require(["../components/page/statistical/gaintrace.vue"], r)
  }
   ,{
    path: "/overview",
    component: r => require(["../components/page/statistical/overview.vue"], r)
  }
   ,{
    path: "/purchaserecords",
    component: r => require(["../components/page/statistical/purchaserecords.vue"], r)
  }
   ,{
    path: "/purchasescan",
    component: r => require(["../components/page/statistical/purchasescan.vue"], r)
  }
   ,{
    path: "/purchasetime",
    component: r => require(["../components/page/statistical/purchasetime.vue"], r)
  }
];
// api.mineDashboard().then(r => {
//   if (r.success) {
//     routes = r.result;

//   }
// });
export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      component: r => require(["../components/common/login.vue"], r)
    },
    {
      path: "/dashboard",
      component: r => require(["../components/common/index.vue"], r),
      children: routes
    }
  ]
});
