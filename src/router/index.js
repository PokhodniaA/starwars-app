import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/*",
    name: "NotFound",
    component: Main
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
