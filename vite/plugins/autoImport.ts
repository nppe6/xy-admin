// 自动按需导入组件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

export function setupAutoImport() {
  return [
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router'],
      // 按需加载我们使用 vue的 api 和 router api
      dts: 'types/auto-imports.d.ts',
    }),
    // 这里的 自动按需导入 不是 值作用于 elementui 而是适用 所有的组件
    Components({
      resolvers: [ElementPlusResolver()],
      //自动加载的组件目录，默认值为 ['src/components']
      dirs: ['src/components'],
      //组件名称包含目录，防止同名组件冲突
      directoryAsNamespace: true,
      //指定类型声明文件，为true时在项目根目录创建
      dts: 'types/components.d.ts',
    }),
    // 明确使用 `ElementPlus` 作为插件
    ...[ElementPlus({ useSource: true })],
  ]
}
