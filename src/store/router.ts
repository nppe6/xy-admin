import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const router = defineStore('router-store', {
  state: () => {
    return {
      routes: getRouter()
    }
  }
})

function getRouter() {
  const router = useRouter()
  const routes = router
    .getRoutes()
    .filter((route) => route.children.length && route.meta.show)
    .map((route) => {
      route.children = route.children.filter((route) => route.meta?.show)
      return route
    })
    .filter((route) => route.children.length)

  return routes
}
