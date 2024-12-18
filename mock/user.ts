// test.ts

import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功！',
        type: 'success',
        data: {
          name: '萧先生',
          age: 19,
          avatar: '01.jpg'
        }
      }
    }
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
          token: '112233xiao'
        }
      }
    }
  }
] as MockMethod[]
