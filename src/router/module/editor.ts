import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@/layouts/admin.vue'),
  meta: {
    title: '编辑器',
    icon: 'fas fa-pen-to-square',
    show: true,
    auth: true
  },
  children: [
    {
      name: 'editor-base',
      path: 'base',
      component: () => import('@/views/editor/base.vue'),
      meta: { title: '富文本编辑器', show: true }
    },
    {
      name: 'editor-markdown',
      path: 'markdown',
      component: () => import('@/views/editor/markdown.vue'),
      meta: { title: 'markdown编辑器', show: true }
    }
  ]
} as RouteRecordRaw
