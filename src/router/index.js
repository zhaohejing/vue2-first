import Vue from "vue";
import Router from "vue-router";
//import api from '@/fetch/api';

Vue.use(Router);
let routes = [
  //控制台
  {
    path: "",
    component: r => require(["../components/common/dashboard.vue"], r)
    ,meta:["控制台"]
  },
  //轮播图
  {
    path: "/figure",
    component: r => require(["../components/page/store/figure.vue"], r)
     ,meta:["商城管理", "轮播图"]
  },
  //banner
   {
    path: "/banner",
    component: r => require(["../components/page/store/banner.vue"], r)
    ,meta:["商城管理", "banner"]
  },
  //积分商城记录
  {
    path: "/integralrecord",
    component: r => require(["../components/page/integral/record.vue"], r)
    ,meta:["积分商城", "积分购买记录"]
  },
  //积分商城
  {
    path: "/integral",
    component: r => require(["../components/page/integral/index.vue"], r)
    ,meta:["积分商城", "积分商城"]
  },
 //商品
  {
    path: "/product",
    component: r => require(["../components/page/store/product.vue"], r)
    ,meta:["商城管理", "商品"]
  },
   //订单
  {
    path: "/order",
    component: r => require(["../components/page/store/order.vue"], r)
    ,meta:["商城管理", "订单"]
  },
 //用户
  {
    path: "/users",
    component: r => require(["../components/page/manage/users.vue"], r)
    ,meta:["系统管理", "用户"]
  },
 //角色
  {
    path: "/roles",
    component: r => require(["../components/page/manage/roles.vue"], r)
    ,meta:["系统管理", "角色"]
  },
  //纪念章成就
  {
    path: "/medal",
    component: r => require(["../components/page/achieve/medal.vue"], r)
    ,meta:["成就", "纪念章"]
  },
 //游记成就
  {
    path: "/traceachi",
    component: r => require(["../components/page/achieve/trace.vue"], r)
    ,meta:["成就", "游记"]
  },

  {
    path: "/series",
    component: r => require(["../components/page/series/series.vue"], r)
    ,meta:["系列管理","分类"]
  },
  //邮费管理
  {
    path: "/postage",
    component: r => require(["../components/page/series/postage.vue"], r)
    ,meta:["系列管理","邮费"]
  }
    //游迹管理
  ,{
    path: "/trace",
    component: r => require(["../components/page/trace/trace.vue"], r)
    ,meta:["游迹管理","游迹"]
  }
  //统计系列管理
 ,{
    path: "/gaintrace",
    component: r => require(["../components/page/statistical/gaintrace.vue"], r)
    ,meta:["统计分析","统计1"]
  }
   ,{
    path: "/overview",
    component: r => require(["../components/page/statistical/overview.vue"], r)
    ,meta:["统计分析","统计2"]
  }
   ,{
    path: "/purchaserecords",
    component: r => require(["../components/page/statistical/purchaserecords.vue"], r)
    ,meta:["统计分析","统计3"]
  }
   ,{
    path: "/purchasescan",
    component: r => require(["../components/page/statistical/purchasescan.vue"], r)
    ,meta:["统计分析","统计4"]
  }
   ,{
    path: "/purchasetime",
    component: r => require(["../components/page/statistical/purchasetime.vue"], r)
    ,meta:["统计分析","统计5"]
  }
];

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
