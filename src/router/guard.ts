import { CacheEnum } from '@/enum/cacheEnum'
import user from '@/store/user'
import utils from '@/utils'
import { RouteLocationNormalizedGeneric, RouteLocationNormalizedLoadedGeneric, Router } from 'vue-router'

class Guard {
  constructor(private router: Router) {}

  public run() {
    //this.beforeEach.bind(this) 的作用是创建一个新的函数，
    // 确保 this.beforeEach 方法在任何地方调用时，其 this 始终指向当前上下文对象。
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  private async beforeEach(to: RouteLocationNormalizedGeneric, from: RouteLocationNormalizedLoadedGeneric) {
    if (this.isLogin(to) === false) return { name: 'login' }
    if (this.isGuest(to) === false) return from

    // await this.getUserInfo()
  }

  // private getUserInfo() {
  //   if (this.token()) return user().axiosUserInfo()
  // }

  private token(): string | null {
    return utils.store.get(CacheEnum.TOKEN_NAME)?.token
  }

  private isGuest(route: RouteLocationNormalizedGeneric) {
    return Boolean(!route.meta.guest || (route.meta.guest && !this.token()))
  }

  private isLogin(route: RouteLocationNormalizedGeneric) {
    const state = Boolean(!route.meta.auth || (route.meta.auth && this.token()))
    if (state === false) {
      utils.store.set(CacheEnum.REDIRECT_ROUTER_NAME, route.name)
    }
    return state
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
