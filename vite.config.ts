import { defineConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { alias } from './vite/alias'
import { parseEnv } from './vite/utils'

// https://vite.dev/config/
// export default defineConfig({

// })

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))

  return {
    plugins: [vue()],
    resolve: {
      alias
    }
  }
}
