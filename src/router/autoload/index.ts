import utils from '@/utils'
import { RouteRecordRaw } from 'vue-router'
import getRoutes from './views'
import autoloadModuleRoutes from './module'

let routes: RouteRecordRaw[] = []

if (utils.env.VITE_ROUTER_AUTOLOAD) {
  routes = getRoutes()
} else {
  routes = autoloadModuleRoutes()
}

export default routes
