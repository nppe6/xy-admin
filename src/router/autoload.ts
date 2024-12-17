import { RouteRecordRaw } from 'vue-router'

const layouts = import.meta.glob('@/layouts/*.vue', {
  eager: true,
  import: 'default'
})

const views = import.meta.glob('@/views/**/*.vue', {
  eager: true,
  import: 'default'
})

function getRouter() {
  const layoutsRoutes = [] as RouteRecordRaw[]
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRoutesModule(file, module)
    route.children = getChildrenRouter(route)
    layoutsRoutes.push(route)
  })

  return layoutsRoutes
}

function getChildrenRouter(route: RouteRecordRaw) {
  const childrenRoutes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`/src/views/${route.name as string}`)) {
      const routes = getRoutesModule(file, module)
      childrenRoutes.push(routes)
    }
  })

  return childrenRoutes
}

function getRoutesModule(file: string, module: any) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
  const route = {
    path: `/${name}`,
    name: name.replace('/', '-'),
    component: module
  } as RouteRecordRaw

  return Object.assign(route, module?.route)
}

export default getRouter()
