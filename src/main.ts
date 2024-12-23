import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from './plugins'
import '@/styles/global.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)

  setupPlugins(app)

  // 等待页面路由挂载完成以后再渲染页面
  await router.isReady()
  app.mount('#app')
}

bootstrap()
