import request from '../request'

export function login({url,method,params}) {
  console.log('denglu');
  return request({
    url,
    method,
    data:params
  })
}
export function add({url,method,params}) {
  return request({
    url,
    method,
    data:params
  })
}
export function edit({url,method,params}) {
  return request({
    url,
    method,
    data:params
  })
}
export function del({url,method,params}) {
  return request({
    url,
    method,
    data:params
  })
}