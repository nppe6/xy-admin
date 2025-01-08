// test.ts

import pkg from 'mockjs'
const { Random } = pkg
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功！',
        type: 'success',
        data: {
          name: '萧先生',
          age: 19,
          avatar: '/image/01.jpg',
          permissions: ['editor_markdown', 'article_edit'],
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '请求成功！',
        type: 'success',
        data: {
          token: Random.string(10),
        },
      }
    },
  },
] as MockMethod[]
