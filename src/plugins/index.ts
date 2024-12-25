import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import _ from 'lodash'
import setupPinia from './pinia'

export function setupPlugins(app: App) {
  autoRegisterComponents(app)
  setupTailwindcss()
  setupPinia(app)
}

export function autoRegisterComponents(app: App) {
  const components = import.meta.glob('@/components/form/*.vue', {
    eager: true,
    import: 'default'
  })

  Object.keys(components).forEach((key) => {
    const name = key.split('/').pop()?.split('.').shift() as string
    // 将名字转换成 驼峰形式
    app.component(_.camelCase(name), components[key] || {})
  })
}
