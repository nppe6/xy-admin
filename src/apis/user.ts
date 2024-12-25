import http from '@/plugins/axios'

export interface InfoInterface {
  name: string
  age: number
  avatar: string
}

export async function getInfo() {
  return http.request<InfoInterface>({
    url: 'user/info'
  })
}

export interface LoginInterface {
  token: string
}

export function axiosLogin(data: any) {
  return http.request<LoginInterface>({
    url: 'login',
    method: 'post',
    data
  })
}
