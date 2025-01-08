import { ThemeEnum } from '@/enum/themeEnum'
import theme from '@/store/theme'
import { watch } from 'vue'

export default () => {
  watch(
    () => theme().themeType,
    (val) => {
      console.log(val)
      let themeClassName = ''

      switch (val) {
        case ThemeEnum.THEME_LIGHT:
          themeClassName = 'light'
          break
        case ThemeEnum.THEME_DARK:
          themeClassName = 'dark'
          break
      }

      document.querySelector('html')!.className = themeClassName
    },
    {
      immediate: true,
    },
  )
}
