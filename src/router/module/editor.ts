import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true, menu: { title: '编辑器', icon: 'fas fa-pen-to-square' } },
  children: [
    {
      name: 'editor-wangEditor',
      path: 'wangEditor',
      component: () => import('@/views/editor/wangEditor.vue'),
      meta: { menu: { title: '富文本编辑器' } },
    },
    {
      name: 'editor-markdown',
      path: 'markdown',
      component: () => import('@/views/editor/markdown.vue'),
      meta: { menu: { title: 'markdown编辑器' }, permission: 'editor_markdown' },
    },
  ],
} as RouteRecordRaw
