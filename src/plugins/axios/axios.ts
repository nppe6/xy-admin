import { CacheEnum } from '@/enum/cacheEnum'
import router from '@/router'
import store from '@/utils/store'
import axios, { AxiosRequestConfig } from 'axios'

export default class Axios {
  private instance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    this.interceptors()
  }

  public request<T, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
    // this.instance.request()
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config)
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }

  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  private interceptorsRequest() {
    // 添加请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 在发送请求之前做些什么
        config.headers.Authorization = 'Bearer ' + store.get(CacheEnum.TOKEN_NAME)?.token
        return config
      },
      (error) => {
        // 对请求错误做些什么
        return Promise.reject(error)
      },
    )
  }
  private interceptorsResponse() {
    // 添加响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        switch (error.response.status) {
          case 401:
            store.remove(CacheEnum.TOKEN_NAME)
            router.push({ name: 'login' })
            break
          case 422:
            // 后台表单验证错误
            break
        }
        return Promise.reject(error)
      },
    )
  }
}
