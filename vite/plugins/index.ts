import { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { setupMockPlugins } from './mock'
import { setupElementPlus } from './elementui'

export function setupVitePlugins(isBuild: boolean, env: ViteEnv) {
  console.log(env)

  const plugins: Plugin[] = [vue()]

  plugins.push(setupMockPlugins(isBuild))
  plugins.push(...setupElementPlus())

  return plugins
}
