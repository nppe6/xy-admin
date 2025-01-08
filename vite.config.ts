import { ConfigEnv, loadEnv } from 'vite'
import { alias } from './vite/alias'
import { parseEnv } from './vite/utils'
import { setupVitePlugins } from './vite/plugins'

// https://vite.dev/config/
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))

  return {
    plugins: setupVitePlugins(isBuild, env),
    resolve: {
      alias,
    },
    build: {
      rollupOptions: {
        emptyOutDir: true,
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          },
        },
      },
    },
    server: {
      proxy: {
        '/api': {
          //将/api访问转换为target
          target: env.VITE_API_URL,
          //跨域请求携带cookie
          changeOrigin: true,
          //url 重写删除`/api`
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
}
