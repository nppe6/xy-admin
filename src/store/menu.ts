import { defineStore } from 'pinia'
import { IMenu } from '#/menu'
import router from '@/router'

export default defineStore('menus-store', {
  state: () => {
    return {
      menus: [] as IMenu[],
    }
  },

  actions: {
    init() {
      this.getMenuByRouter()
    },
    // 根据路由获取菜单
    getMenuByRouter() {
      this.menus = router
        .getRoutes()
        .filter((route) => route.children.length && route.meta.menu)
        .map((route) => {
          let menu: IMenu = { ...route.meta?.menu }
          menu.children = route.children
            .filter((route) => route.meta?.menu)
            .map((route) => {
              return { ...route.meta?.menu, route: route.name }
            }) as IMenu[]
          return menu
        })
        .filter((route) => route.children?.length) as IMenu[]
    },
  },
})
