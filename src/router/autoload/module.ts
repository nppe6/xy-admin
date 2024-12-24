import { RouteRecordRaw } from 'vue-router'

interface ModuleMap {
  [key: string]: any
}

export default function autoloadModuleRoutes() {
  const routes = [] as RouteRecordRaw[]
  const modules: ModuleMap = import.meta.glob('@/router/module/**/*.ts', {
    eager: true,
    import: 'default'
  })
  Object.keys(modules).forEach((key) => {
    routes.push(modules[key])
  })

  return routes
}
