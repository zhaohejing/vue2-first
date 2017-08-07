
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <!--回到顶部代码  -->
        <Back-top></Back-top>
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu :active-name="setActive" theme="dark" width="auto" accordion @on-select="routeTo">
                    <div class="layout-logo-left">
                        <h3>后台管理</h3>
                    </div>
                    <Menu-item name="dashboard">
                        <Icon type="ios-navigate" :size="iconSize"></Icon>
                        <span class="layout-text">控制台</span>
                    </Menu-item>
    
                    <Submenu v-for="menu in menus" v-bind:key="menu.id" v-bind:name="menu.path">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            {{menu.title}}
                        </template>
                        <Menu-item v-if="menu.path" :name="menu.path">
                            <Icon type="ios-analytics" :size="iconSize"></Icon>
                            <span class="layout-text">{{menu.title}}</span>
                        </Menu-item>
                        <Row v-if="menu.child">
                            <Menu-item v-for="child in menu.child" v-bind:key="child.id" :name="child.path">
                                <Icon type="ios-analytics" :size="iconSize"></Icon>
                                <span class="layout-text">{{child.title}}</span>
                            </Menu-item>
                        </Row>
                    </Submenu>
                </Menu>
            </i-col>
    
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-col>
                        <!-- <i-button type="text" @click.native="toggleClick">
                            <Icon type="navicon" size="32"></Icon>
                        </i-button> -->
                        <div class="userinfo">
                             <Badge count="1">
                                <a href="/dashboard" class="demo-badge"></a>
                            </Badge>
                            <Dropdown placement="bottom-end">
                                <span class="head-img">
                                    {{userName}}
                                    <img src="./../../assets/img/zynga.png">
                                </span>
                                <Dropdown-menu slot="list">
                                    <Dropdown-item @click.native="modifyPassWord()">修改密码</Dropdown-item>
                                    <Dropdown-item @click.native="logout()" divided>退出</Dropdown-item>
                                </Dropdown-menu>
                            </Dropdown>
                        </div>
                    </i-col>
    
                </div>
                <div class="layout-breadcrumb">
                    <bread></bread>
                    <!-- <Breadcrumb>
                            <Breadcrumb-item>首页</Breadcrumb-item>
                            <Breadcrumb-item>页面</Breadcrumb-item>
                            <Breadcrumb-item>{{this.$route.path.replace('/','')}}</Breadcrumb-item>
                        </Breadcrumb> -->
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                        <transition mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; zzzzzzzzz
                </div>
            </i-col>
        </Row>
    </div>
</template>

<script>
import api from '@/fetch/api'
import bread from './bread'
import store from '@/store/index'
export default {
    data() {
        return {
            spanLeft: 5,
            spanRight: 19,
            menus: []
        }
    },
    //页面渲染完 初始化数据
    mounted () {
        api.commonPost("api/sysmenu/getMenuPerson").then((response) => {
            if (response.success)
             this.menus = response.result;
        });
    },
    //计算属性 为了展示
    computed: {
        iconSize() {
            return this.spanLeft === 5 ? 14 : 24;
        },
        setActive() {
            return this.$route.path.replace('/', '');
        }, userName() {
            return store.getters.userName;
        }
    },
    components: {
        bread
    },
    methods: {
        toggleClick() {
            if (this.spanLeft === 5) {
                this.spanLeft = 2;
                this.spanRight = 22;
            } else {
                this.spanLeft = 5;
                this.spanRight = 19;
            }
        },
        routeTo(e) {
            this.$router.push(e);
        },
        logout() {
            localStorage.setItem("USER_TOKEN", "");
            this.$router.push('/login');
        }
    }
}
</script>
<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-breadcrumb {
    padding: 10px 15px 0;
}

.layout-content {
    min-height: 600px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

.layout-content-main {
    padding: 20px 10px;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}

.layout-menu-left {
    background: #464c5b;
    /*min-width: 100px;*/
}

.layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
    line-height: 30px;
    color: white;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
}

.layout-ceiling-main a {
    color: #9ba7b5;
}

.layout-hide-text .layout-text {
    display: none;
}

.ivu-col {
    transition: width .2s ease-in-out;
}

.userinfo {
    display: inline-block;
    float: right;
}

.userinfo .ivu-dropdown {
    margin-top: 50px;
}

.ivu-dropdown {
    margin-right: 25px;
    margin-top: 22px;
}

.ivu-menu-submenu-title {
    padding: 14px;
}

.head-img {
    width: 100%;
    height: 60px;
    line-height: 60px;
    float: right;
    margin-top: -50px;
}

.head-img img {
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    width: 40px;
    height: 40px;
    float: right;
}

.demo-badge {
    width: 30px;
    height: 30px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
}
</style>
