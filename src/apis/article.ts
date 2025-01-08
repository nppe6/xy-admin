import http from '@/plugins/axios'

export interface ArticleInterface {
  id: number
  title: string
  content: string
}

export async function getArticleApi() {
  return http.request<ArticleInterface[]>({
    url: 'article',
  })
}
