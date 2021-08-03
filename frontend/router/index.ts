import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('@base/views/home/index.vue'),
    name: 'Home',
    meta: {
      title: 'HomePage',
    }
  },
  {
    path: '/job',
    component: () => import('@base/views/job/index.vue'),
    name: 'Job',
    meta: {
      title: 'Job Application List',
    }
  },
]

const router = new VueRouter({
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: constantRoutes
})

export default router
