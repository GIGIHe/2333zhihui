// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "normalize.css"; // 导入初始化样式
import Vant from "vant";
import "vant/lib/index.css";
import "./style/common.css";
import store from "./store/index";
// import $axios from "./utils/index";
import back from './utils/back.js'
import $axios from "axios"
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import Header from "../src/components/Header";
import Tabbar from "../src/components/Tabbar";


import { Icon } from 'vant';
import "./mock/mockServer";
Vue.use(Icon);
Vue.use(Vant);
Vue.use(VueAwesomeSwiper);
Vue.component("Header", Header);
Vue.component("Tabbar", Tabbar);
Vue.config.productionTip = false;
Vue.prototype.$axios = $axios;
Vue.prototype.$back = back;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
