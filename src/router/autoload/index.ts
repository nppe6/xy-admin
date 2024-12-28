import utils from '@/utils'
import { Router, RouteRecordRaw } from 'vue-router'
import getRoutes from './views'
import autoloadModuleRoutes from './module'
import user from '@/store/user'

let routes: RouteRecordRaw[] = []

if (utils.env.VITE_ROUTER_AUTOLOAD) {
  routes = getRoutes()
} else {
  routes = autoloadModuleRoutes()
}

// 将传入的 router 总路由进行过滤
function autoload(router: Router) {
  const userStore = user()
  routes = routes.map((route) => {
    route.children = route.children?.filter((route) => {
      const permission = route.meta?.permission
      console.log('permissions: ', permission)
      return permission ? userStore.info?.permissions.includes(permission) : true
    })
    return route
  })

  console.log('routes: ', routes)
  routes.forEach((r) => router.addRoute(r))
}

export default autoload
