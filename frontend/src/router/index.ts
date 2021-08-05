import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'Home',
    meta: {
      title: 'HomePage'
    }
  },
  {
    path: '/job',
    component: () => import('@/views/job/index.vue'),
    name: 'Job',
    meta: {
      title: 'Job Application List'
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: { hidden: true }
  },
  {
    path: '*',
    redirect: '/404',
    meta: { hidden: true }
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
  routes: constantRoutes
})

export default router
