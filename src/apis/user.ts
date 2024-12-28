import http from '@/plugins/axios'

export interface InfoInterface {
  name: string
  age: number
  avatar: string
  permissions: string[]
}

export async function getInfo() {
  return http.request<InfoInterface>({
    url: 'user/info',
  })
}

export interface LoginInterface {
  token: string
}

export interface ILoginData {
  username: string
  password: string
}

export function axiosLogin(data: ILoginData) {
  return http.request<LoginInterface>({
    url: 'login',
    method: 'post',
    data,
  })
}
