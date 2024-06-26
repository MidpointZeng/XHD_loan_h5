import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


export const eventBus = new Vue();
import "@/utils/vant"; // 导入vant组件
import api from './api/apiList';
import "@/assets/css/base.css";
// import { isWechat, noResetWeixinSize, AsyncAwaitVconsole } from "@/utils/index";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import NavBar from "@/components/NavBar";
Vue.use(ElementUI);
Vue.component("NavBar", NavBar);
import {
  Area
} from 'vant';
Vue.use(Area);
import {
  Toast
} from 'vant';
Vue.use(Toast);
import {
  Picker
} from 'vant';
Vue.use(Picker);
import "@/components/index"; // 前四位字母为Base的组件自动注册为全局
Vue.prototype.$api = api;
// 判断当前平台环境
// if (isWechat) {
//   document.documentElement.style.setProperty("--nav-bar-height", "0px");
//   noResetWeixinSize();
// }

// 开发环境时使用vconsole调试
// process.env.VUE_APP_ENV !== "production" && AsyncAwaitVconsole();

import VueI18n from 'vue-i18n';
import i18nData from "@/i18n"
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'ZW', // 设置默认语言为英文
  messages: i18nData
});



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");