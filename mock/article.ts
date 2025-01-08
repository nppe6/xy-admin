// test.ts

import { MockMethod } from 'vite-plugin-mock'
import pkg from 'mockjs'
const { Random } = pkg
export default [
  {
    url: '/api/article',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功！',
        type: 'success',
        data: new Array(20).fill('').map((article, index) => {
          return {
            id: index,
            title: Random.ctitle(),
            content: Random.cparagraph(),
          }
        }),
      }
    },
  },
] as MockMethod[]
