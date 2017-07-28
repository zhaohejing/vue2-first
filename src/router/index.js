import Vue from 'vue';
import Router from 'vue-router';
import api from './../fetch/api';

Vue.use(Router);
let menus=[];
api.mineDashboard().then(r=>{
        if(r.success){
            menus=r.result;
        }
});
export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/dashboard',
            component: resolve => require(['../components/common/index.vue'], resolve),
            children: [{
                    path: '',
                    component: resolve => require(['../components/common/dashboard.vue'], resolve)
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/form.vue'], resolve)
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/table.vue'], resolve)
                },
                {
                    path: '/markdown-viewer',
                    component: resolve => require(['../components/page/markdown-viewer.vue'], resolve)
                },
                {
                    path: '/markdown-editor-1',
                    component: resolve => require(['../components/page/markdown-editor-1.vue'], resolve)
                },
                {
                    path: '/markdown-editor-2',
                    component: resolve => require(['../components/page/markdown-editor-2.vue'], resolve)
                },
                {
                    path: '/rtf',
                    component: resolve => require(['../components/page/rtf.vue'], resolve)
                },{
                    path: '/upload',
                    component: resolve => require(['../components/page/upload.vue'], resolve)
                },{
                    path: '/echarts',
                    component: resolve => require(['../components/page/echarts.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/common/login.vue'], resolve)
        },
    ]
})
