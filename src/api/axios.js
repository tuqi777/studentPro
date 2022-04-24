import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'

Vue.use(axios)

// const axios = axios.create({
//   baseUrl: 'http://localhost:3000',
//   timeout: 1000,
//   // headers: {
//   //   'X-Custom-Header': 'foobar'
//   // },
//   transformRequest: [function(data){
//     return data
//   }],
//   transformResponse: [function(data){
//     return JSON.parse(data)
//   }]
// })

axios.interceptors.request.use(function(config) {
  config.headers = Object.assign(config.method === 'get' ? {
    'Accept': 'application/json',
    'content-type': 'application/json;charset=UTF-8'
  } : {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }, config.headers)

  if (config.method === 'post') {
    const contentType = config.headers['content-type']
    if (contentType) {
      if (contentType.includes('multipart')) {
        // config.data = data
      } else if (contentType.includes('json')) {
        // 服务器收到得raw body（原始数据） 
        config.data = JSON.stringify(config.data)
      } else {
        config.data = qs.stringify(config.data)
      }
    }
  }
  return Promise.resolve(config)
}, function(err) {
  return Promise.reject(err)
})


axios.interceptors.response.use(function (response) {
  // 对响应的数据结构处理，
  const res = response.data || {}
  return Promise.resolve( checkStatus(res) )
}, function(err){
  // 对响应错误处理
  if(err.response) {
    return Promise.reject(err.response)
  } else if(
    err.code === 'ECONNABORTED'
    &&
    err.message.indexOf('timeout') !== -1
  ) {
    return Promise.reject({msg: '请求超时'})
  }else{
    return Promise.reject({})
  }
})


function checkStatus(res){
  const status = res.status || -1000
  if( status >=200 && status < 300 ){
    return res.data
  } else {
    let errInfo = ''
    switch(status){
      case -1:
        errInfo = '远程服务响应失败，请稍后重试'
        break
      case 400:
        errInfo = '400：错误请求'
        break
      case 401:
        errInfo = '401：访问令牌无效或已过期'
        break
      case 403:
        errInfo = '403：拒绝访问'
        break
      case 404:
        errInfo = '404：访问资源不存在'
        break
      case 405:
        errInfo = '405：请求方法未允许'
        break
      case 408:
        errInfo = '408：请求超时'
        break
      case 500:
        errInfo = '500：访问服务失败'
        break
      case 501:
        errInfo = '501：未实现'
        break
      case 502:
        errInfo = '502：无效网关'
        break
      case 503:
        errInfo = '503：服务不可用'
        break
      default:
        errInfo = '连接错误'
    }
    return {
      status,
      msg: errInfo
    }
  }
}
export default axios