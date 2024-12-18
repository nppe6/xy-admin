import http from '@/plugins/axios'

interface InfoInterface {
  name: string
  age: number
  avatar: string
}

export async function getInfo() {
  return http.request<InfoInterface>({
    url: 'info'
  })
}

interface LoginInterface {
  token: string
}

export function axiosLogin(data: any) {
  return http.request<LoginInterface>({
    url: 'login',
    method: 'post',
    data
  })
}
