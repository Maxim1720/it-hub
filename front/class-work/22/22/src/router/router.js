import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/HomePage.vue";
import About from "../pages/AboutPage.vue";
import MainLayout from "../layouts/MainLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import LoginPage from "../pages/LoginPage.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home,
        name: "home",
      },
      {
        path: "/login",
        component: LoginPage,
        name: "login",
      },
      {
        path: "/about",
        component: About,
        name: "about",
      },
    ],
  },

  {
    path: "/auth",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        component: LoginPage,
        name: "login",
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
