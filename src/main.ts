import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)

  // 等待页面路由挂载完成以后再渲染页面
  await router.isReady()
  app.mount('#app')
}

bootstrap()
