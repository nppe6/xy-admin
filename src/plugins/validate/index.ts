import * as veeValidate from 'vee-validate'
import { all } from '@vee-validate/rules'
import { loadLocaleFromURL, localize } from '@vee-validate/i18n'
import yup from './yup'
loadLocaleFromURL(
  'https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json'
)

veeValidate.configure({
  generateMessage: localize('zh_CN')
})

// 这一步操作就是将所有的验证规则默认都加载上 这一步是使用的官方文档
Object.entries(all).forEach(([name, rule]) => {
  veeValidate.defineRule(name, rule)
})

const modules = { yup, ...veeValidate }

export default modules
