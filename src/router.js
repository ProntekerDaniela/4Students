import VueRouter from "vue-router";

import Home from "./views/Home.vue";
import Login from "./views/Login.vue"
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue"
import Additives from './views/Additives.vue';

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/profile", component: Profile },
  { path: "/additives", component: Additives },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
