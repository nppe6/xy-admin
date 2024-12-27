import { defineStore } from 'pinia'
import { IMenu } from '#/menu'
import router from '@/router'
import { RouteLocationNormalizedGeneric } from 'vue-router'
import utils from '@/utils'
import { CacheEnum } from '@/enum/cacheEnum'

export default defineStore('menus-store', {
  state: () => {
    return {
      menus: [] as IMenu[],
      historyMenu: [] as IMenu[],
      menusClose: false,
    }
  },

  actions: {
    init() {
      this.getMenuByRouter()
      this.historyMenu = utils.store.get(CacheEnum.HISTORY_MENU) ?? []
    },
    // 添加历史菜单
    addHistoryMenu(route: RouteLocationNormalizedGeneric) {
      if (!route.meta.menu) return
      const menu: IMenu = { ...route.meta.menu, route: route.name as string }
      const isHas = this.historyMenu.some((menu) => menu.route == route.name)
      if (!isHas) this.historyMenu.unshift(menu)
      if (this.historyMenu.length > 10) {
        this.historyMenu.pop()
      }

      utils.store.set(CacheEnum.HISTORY_MENU, this.historyMenu)
    },
    // 移除历史菜单
    removeHistoryMenu(menu: IMenu) {
      const index = this.historyMenu.indexOf(menu)
      this.historyMenu.splice(index, 1)
      utils.store.set(CacheEnum.HISTORY_MENU, this.historyMenu)
    },
    // 设置当前选中菜单
    setCurrentMenu(route: RouteLocationNormalizedGeneric) {
      this.menus.forEach((m) => {
        m.isActive = false
        m.children?.forEach((c) => {
          c.isActive = false
          if (c.route == route.name) {
            m.isActive = true
            c.isActive = true
          }
        })
      })
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

    // 收缩菜单
    toggleState() {
      this.menusClose = !this.menusClose
    },
  },
})
