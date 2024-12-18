import { viteMockServe } from 'vite-plugin-mock'
export function setupMockPlugins(isBuild: boolean) {
  return viteMockServe({
    mockPath: 'mock',
    enable: !isBuild
  })
}
