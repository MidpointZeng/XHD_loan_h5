import Vue from "vue";
import VueRouter from "vue-router";

import {
  beforeEach,
  afterEach,
  beforeResolve
} from "./hook";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  redirect: "/login"
},
{
  path: "/index",
  name: "index",
  component: () => import( /* webpackChunkName: "login" */ "../views/Index"),
  meta: {
    title: "官网",
    keepAlive: false,
  },
},
{
  path: "/login",
  name: "login",
  component: () => import( /* webpackChunkName: "login" */ "../views/Login"),
  meta: {
    title: "登录",
    keepAlive: false,
    head: true,

  },
},
{
  path: "/register",
  name: "register",
  component: () => import( /* webpackChunkName: "login" */ "../views/Login/register.vue"),
  meta: {
    title: "注册",
    keepAlive: false,
    head: true,

  },
},
{
  path: "/home",
  name: "home",
  component: () => import( /* webpackChunkName: "home" */ "../views/Home"),
  meta: {
    title: "首页",
    keepAlive: false,
    head: true,
    requiresApiCall:true

  },
},
{
  path: "/user",
  name: "user",
  component: () => import( /* webpackChunkName: "home" */ "../views/User"),
  meta: {
    title: "我的",
    keepAlive: true,
    head: true,

  },
},
{
  path: "/signature",
  name: "signature",
  component: () => import( /* webpackChunkName: "home" */ "../views/signature"),
  meta: {
    title: "签名",
    keepAlive: true,
    head: true,
  }
},
{
  path: "/submit",
  name: "submit",
  component: () => import( /* webpackChunkName: "home" */ "../views/submit"),
  meta: {
    title: "提交",
    keepAlive: false,
    head: false,

  },
},
{
  path: "/info1",
  name: "info1",
  component: () => import( /* webpackChunkName: "home" */ "../views/submit/index1.vue"),
  meta: {
    title: "信息",
    keepAlive: false,
    head: false,

  },
},
{
  path: "/info2",
  name: "info2",
  component: () => import( /* webpackChunkName: "home" */ "../views/submit/index2.vue"),
  meta: {
    title: "信息",
    keepAlive: false,
    head: false,

  },
},
{
  path: "/info3",
  name: "info3",
  component: () => import( /* webpackChunkName: "home" */ "../views/submit/index3.vue"),
  meta: {
    title: "信息",
    keepAlive: false,
    head: false,

  },
},
{
  path: "/info4",
  name: "info4",
  component: () => import( /* webpackChunkName: "home" */ "../views/submit/index4.vue"),
  meta: {
    title: "信息",
    keepAlive: false,
    head: false,

  },
},
{
  path: "/particulars",
  name: "particulars",
  component: () => import( /* webpackChunkName: "home" */ "../views/signature/particulars"),
  meta: {
    title: "ローンの進行状況",
    keepAlive: false,
    head: true,

  },
},
{
  path: "/lend",
  name: "lend",
  component: () => import( /* webpackChunkName: "home" */ "../views/lend"),
  meta: {
    title: "lend",
    keepAlive: false,
    head: false,

  },
},
{
  path: "/aggrement",
  name: "aggrement",
  component: () => import( /* webpackChunkName: "home" */ "../views/aggrement"),
  meta: {
    title: "lend",
    keepAlive: false,
    head: false,

  },
},
{
  path: "/aggrementInfo",
  name: "aggrementInfo",
  component: () => import( /* webpackChunkName: "home" */ "../views/aggrement/index2.vue"),
  meta: {
    title: "",
    keepAlive: false,
    head: false,

  },
},
{
  path: "/reviewSuccess",
  name: "reviewSuccess",
  component: () => import( /* webpackChunkName: "home" */ "../views/reviewSuccess"),
  meta: {
    title: "lend",
    keepAlive: false,
    head: false,

  },
},
{
  path: "/img",
  name: "img",
  component: () => import( /* webpackChunkName: "home" */ "../views/signature/index2.vue"),
  meta: {
    title: "lend",
    keepAlive: false,
    head: false,

  },
},
];

const router = new VueRouter({
  // mode: 'history',
  // base: "https://api.yourdomain.com", // 这里可以根据环境变量来设置
  routes,
});


router.beforeEach(beforeEach);
router.beforeResolve(beforeResolve);
router.afterEach(afterEach);

export default router;