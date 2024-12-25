import 'vue-router'

// 为了确保这个文件被当作一个模块，添加至少一个 `export` 声明
export {}

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean
    guest?: boolean
    // 路由是否在菜单显示
    show?: boolean
    title?: string
    icon?: string
    isActive?: boolean // 定义改菜单选项是否激活选中
  }
}
