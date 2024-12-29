// test.ts

import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/upload/image',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '上传成功！',
        type: 'success',
        data: {
          url: '/image/01.jpg',
        },
      }
    },
  },
] as MockMethod[]
