import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'admin',
  path: '/admin',
  redirect: '/admin/home',
  component: () => import('@/layouts/admin.vue'),
  // meta: { auth: true },
  meta: { auth: true, menu: { title: 'dashboard', icon: 'fas fa-house-chimney' } },
  children: [
    {
      name: 'admin-home',
      path: 'home',
      component: () => import('@/views/admin/home.vue'),
    },
  ],
} as RouteRecordRaw
