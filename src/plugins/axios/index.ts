import Axios from './axios'

const http = new Axios({
  baseURL: '/api',
  timeout: 100000,
  headers: {}
})

export default http
