import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

/* Layout */
import Layout from '@base/layout/index.vue'

Vue.use(VueRouter)

export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    name: 'Home',
    meta: {
      title: 'HomePage',
    }
  },
  {
    path: '/jobs',
    component: Layout,
    name: 'Job',
    meta: {
      title: 'Job Application List',
    }
  }
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
