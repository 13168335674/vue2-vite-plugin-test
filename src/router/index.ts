/*
 * @Author       : ADI
 * @Date         : 2021-04-03 12:49:20
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-03 14:56:58
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import Home from "../views/Home.vue";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  // base: import.meta.env.BASE_URL,
  routes,
});

export default router;
