import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import autoload from './autoload'
import guard from './guard'
import user from '@/store/user'

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
})

export async function setupRouter(app: App) {
  await user().axiosUserInfo()
  autoload(router)
  guard(router)
  app.use(router)
}

export default router
