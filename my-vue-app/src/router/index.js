// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [

  {
    path: '/app-react/:page*',
    name: 'app-react',
    component: () => import(/* webpackChunkName: "react16" */ '../views/react/react.vue'),
  },
  {
    path: '/app-svelte/:page*',
    name: 'app-svelte',
    component: () => import(/* webpackChunkName: "vue2" */ '../views/svelte/svelte.vue'),
  },
  {
    path: '/app-vue/:page*',
    name: 'app-vue',
    component: () => import(/* webpackChunkName: "vue2" */ '../views/webview/webpack.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.vITE_BASE_URL),
  routes
})

export default router
