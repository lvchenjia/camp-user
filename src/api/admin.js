import request from '@/utils/request'

export function adminLogin(data) {
  return request({
    url: '/adminlogin',
    method: 'post',
    data
  })
}

