// test.ts

import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          name: '萧先生',
          age: 19,
          avatar: '01.jpg'
        }
      }
    }
  }
] as MockMethod[]
