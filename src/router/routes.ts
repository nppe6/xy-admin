import { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/views/article.vue'),
  },
  {
    path: '/:any(.*)',
    name: 'notFound',
    component: () => import('@/views/error/404.vue'),
  },
] as RouteRecordRaw[]

export default routes
