/*
 * @Author       : ADI
 * @Date         : 2021-04-03 12:49:20
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-03 16:37:26
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
