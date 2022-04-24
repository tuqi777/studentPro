import axios from './axios'

const request = async function(opt){
  try {
    const options = Object.assign({
      method: 'get',
      ifHandleError: true
    },opt)
    // options.baseUrl = autoMatch(options.prefix)
    options.baseUrl = '/apis'
    const res = await axios(options)
    if (!res.code ===200 && options.ifHandleError) {
      // todo 全局提示错误信息
    }
    return res

  } catch (error) {
      // if(options.ifHandleError) {
        // todo 全局提示错误信息
      // }
      return error
  }
}

export default request


// 对于项目中请求多个后端的接口时，每个接口在请求封装时附带prefix参数，根据prefix的值autoMatch函数统一处理，自动匹配接口前缀。

// 开发环境可通过webpack proxy配置转发请求。
// 生产环境读取实际配置（根据实际项目的情况）。