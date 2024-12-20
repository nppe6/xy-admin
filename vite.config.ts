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
      alias
    }
  }
}
