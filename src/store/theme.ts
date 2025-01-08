import { ThemeEnum } from '@/enum/themeEnum'
import { defineStore } from 'pinia'

export default defineStore('theme', {
  state: () => {
    return {
      themeType: ThemeEnum.THEME_LIGHT,
    }
  },
  actions: {
    changeThemeType(newTheme: ThemeEnum) {
      this.themeType = newTheme
    },
  },
})
