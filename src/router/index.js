import Vue from "vue";
import Router from "vue-router";
//import api from '@/fetch/api';
/*应急一张图*/
//const oneMap =  r => require.ensure([], () => r(require('@/apps/app/emergencySystem/oneMap/index')), 'oneMap');
Vue.use(Router);
let routes = [
  //控制台
  {
    path: "",
    component: r =>require.ensure([],()=>r(require("../components/common/dashboard.vue")),"dashboard")//  require("../components/common/dashboard.vue")), r)
    ,meta:["控制台"]
  },
  //轮播图
  {
    path: "/figure",
    component: r =>require.ensure([],()=>r( require("../components/page/store/figure.vue")), "store")
     ,meta:["商城管理", "轮播图"]
  },
  //banner
   {
    path: "/banner",
    component: r =>require.ensure([],()=>r( require("../components/page/store/banner.vue")), "store")
    ,meta:["商城管理", "banner"]
  },
  //积分商城记录
  {
    path: "/integralrecord",
    component: r =>require.ensure([],()=>r( require("../components/page/integral/record.vue")), "integral")
    ,meta:["积分商城", "积分购买记录"]
  },
  //积分商城
  {
    path: "/integral",
    component: r =>require.ensure([],()=>r( require("../components/page/integral/index.vue")), "integral")
    ,meta:["积分商城", "积分商城"]
  },
 //商品
  {
    path: "/product",
    component: r =>require.ensure([],()=>r( require("../components/page/store/product.vue")), "store")
    ,meta:["商城管理", "商品"]
  },
   //订单
  {
    path: "/order",
    component: r =>require.ensure([],()=>r( require("../components/page/store/order.vue")), "store")
    ,meta:["商城管理", "订单"]
  },
 //用户
  {
    path: "/users",
    component: r =>require.ensure([],()=>r( require("../components/page/manage/users.vue")),"manage")
    ,meta:["系统管理", "用户"]
  },
 //角色
  {
    path: "/roles",
    component: r =>require.ensure([],()=>r( require("../components/page/manage/roles.vue")), "manage")
    ,meta:["系统管理", "角色"]
  },
  //纪念章成就
  {
    path: "/medal",
    component: r =>require.ensure([],()=>r( require("../components/page/achieve/medal.vue")), "achieve")
    ,meta:["成就", "纪念章"]
  },
 //游记成就
  {
    path: "/traceachi",
    component: r =>require.ensure([],()=>r( require("../components/page/achieve/trace.vue")), "achieve")
    ,meta:["成就", "游记"]
  },

  {
    path: "/series",
    component: r =>require.ensure([],()=>r( require("../components/page/series/series.vue")), "series")
    ,meta:["系列管理","分类"]
  },
  //邮费管理
  {
    path: "/postage",
    component: r =>require.ensure([],()=>r( require("../components/page/series/postage.vue")), "series")
    ,meta:["系列管理","邮费"]
  }
    //游迹管理
  ,{
    path: "/trace",
    component: r =>require.ensure([],()=>r( require("../components/page/trace/trace.vue")), "trace")
    ,meta:["游迹管理","游迹"]
  }
  //统计系列管理
 ,{
    path: "/gaintrace",
    component: r =>require.ensure([],()=>r( require("../components/page/statistical/gaintrace.vue")), "statistical")
    ,meta:["统计分析","统计1"]
  }
   ,{
    path: "/overview",
    component: r =>require.ensure([],()=>r( require("../components/page/statistical/overview.vue")), "statistical")
    ,meta:["统计分析","统计2"]
  }
   ,{
    path: "/purchaserecords",
    component: r =>require.ensure([],()=>r( require("../components/page/statistical/purchaserecords.vue")), "statistical")
    ,meta:["统计分析","统计3"]
  }
   ,{
    path: "/purchasescan",
    component: r =>require.ensure([],()=>r( require("../components/page/statistical/purchasescan.vue")), "statistical")
    ,meta:["统计分析","统计4"]
  }
   ,{
    path: "/purchasetime",
    component: r =>require.ensure([],()=>r( require("@/components/page/statistical/purchasetime.vue")), "statistical")
    ,meta:["统计分析","统计5"]
  }
];

export default new Router({
  routes: [
    {
      path: "/",
     // redirect: "/login",
     component:r =>require.ensure([],()=>r( require("../components/common/login.vue")), "login"),
      children:[ {
      path: "/login",
      component: r =>require.ensure([],()=>r( require("../components/common/login.vue")), "login")
    },]
    },
    {
      path: "/dashboard",
      component:
      r =>require.ensure([],()=>r( require("../components/common/index.vue")), "index"),
      children: routes
    }
  ],
  	strict: process.env.NODE_ENV !== 'production'
});
