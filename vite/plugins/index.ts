import { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { setupMockPlugins } from './mock'

export function setupVitePlugins(isBuild: boolean, env: Record<string, any>) {
  const plugins: Plugin[] = [vue()]

  plugins.push(setupMockPlugins(isBuild))

  return plugins
}
