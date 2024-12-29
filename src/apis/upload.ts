import http from '@/plugins/axios'

export interface IImage {
  url: string
}

export function uploadImage(data: FormData) {
  return http.request<IImage>({
    url: 'upload/image',
    method: 'post',
    data,
  })
}
