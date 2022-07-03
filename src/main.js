import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 公共css文件
import './assets/css/common.css'
// 引入淘宝无限适配js
import './assets/js/flexible'
// 引入字体文件
import './assets/css/iconfont.css'

// 引入 ly-tab插件
import LyTab from 'ly-tab';

Vue.use(LyTab);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
