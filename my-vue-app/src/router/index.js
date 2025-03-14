// router.js
import Home from "@/views/Home.vue";
import News from '@/views/News.vue';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: "/app-react/:page*",
    name: "app-react",
    component: () =>
      import(/* webpackChunkName: "react16" */ "../views/react/react.vue"),
  },
  {
    path: "/app-svelte/:page*",
    name: "app-svelte",
    component: () =>
      import(/* webpackChunkName: "vue2" */ "../views/svelte/svelte.vue"),
  },
  {
    path: "/app-vue/:page*",
    name: "app-vue",
    component: () =>
      import(/* webpackChunkName: "vue2" */ "../views/webview/webpack.vue"),
  },
  {
    path: "/app-admin/:page*",
    name: "app-admin",
    component: () =>
      import(/* webpackChunkName: "admin2" */ "../views/admin/admin.vue"),
  },
  {
    path: '/news',
    name: 'News',
    component: News,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.vITE_BASE_URL),
  routes,
});

export default router;
