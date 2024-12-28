import { defineStore } from 'pinia'
import { IMenu } from '#/menu'
import router from '@/router'
import { RouteLocationNormalizedGeneric } from 'vue-router'
import utils from '@/utils'
import { CacheEnum } from '@/enum/cacheEnum'
import { ElMessage } from 'element-plus'

export default defineStore('menus-store', {
  state: () => {
    return {
      menus: [] as IMenu[],
      historyMenu: [] as IMenu[],
      menusClose: false,
      route: null as null | RouteLocationNormalizedGeneric,
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
      this.route = route

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
      if (this.historyMenu.length <= 1)
        return ElMessage({ message: '已经是最后一个标签了 ~', type: 'warning', plain: true })
      const result = this.menus
        .filter((pmenu) => pmenu.isActive) // 筛选出 `isActive` 为 `true` 的主菜单
        .some((pmenu) => {
          // 深拷贝菜单对象
          let activeMenu: IMenu = { ...pmenu }

          // 筛选子菜单中 `isActive` 为 `true` 的项
          activeMenu.children = activeMenu.children?.filter((child) => child.isActive)
          console.log('activeMenu.children : ', activeMenu.children)

          // 检查是否有子菜单的 route 和 menu.route 匹配
          return activeMenu.children?.some((child) => child.route === menu.route)
        })
      if (result) return ElMessage({ message: '当前选中标签 ~', type: 'warning', plain: true })

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
