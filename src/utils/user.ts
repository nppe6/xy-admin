import { axiosLogin, ILoginData } from '@/apis/user'
import { CacheEnum } from '@/enum/cacheEnum'
import router from '@/router'
import user from '@/store/user'
import store from '@/utils/store'

export async function login(values: ILoginData) {
  const {
    data: { token },
  } = await axiosLogin(values)

  store.set(CacheEnum.TOKEN_NAME, { token }, 1000)
  router.push({ name: 'home' })
}

export function logout() {
  const userStore = user()
  store.remove(CacheEnum.TOKEN_NAME)
  userStore.info = null
  router.push('/')
}
