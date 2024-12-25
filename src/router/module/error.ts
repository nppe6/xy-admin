import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'error',
  path: '/error',
  component: () => import('@/layouts/admin.vue'),
  // 定义菜单源信息
  meta: {
    title: '错误页面',
    icon: 'fas fa-file-excel',
    show: true,
    auth: true
  },
  children: [
    {
      name: 'error-404',
      path: '404',
      component: () => import('@/views/error/404.vue'),
      meta: { title: '404页面', show: true }
    },
    {
      name: 'error-403',
      path: '403',
      component: () => import('@/views/error/403.vue'),
      meta: { title: '403页面', show: true }
    },
    {
      name: 'error-500',
      path: '500',
      component: () => import('@/views/error/500.vue'),
      meta: { title: '500页面', show: false }
    }
  ]
} as RouteRecordRaw
