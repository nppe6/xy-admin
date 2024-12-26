import { getInfo, InfoInterface } from '@/apis/user'
import { defineStore } from 'pinia'

export default defineStore('user-store', {
  state: () => {
    return {
      info: {} as null | InfoInterface,
    }
  },
  actions: {
    async axiosUserInfo() {
      const res = await getInfo()
      this.info = res.data
    },

    clearInfo() {
      this.info = null
    },
  },
})
