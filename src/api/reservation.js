import request from '@/utils/request'

//获取预定信息列表
export function reservationList(data) {
    return request({
        url: '/reservation/list',
        method: 'post',
        data
    })
}

//获取预定信息ByUserId
export function reservationListByUserId(userId) {
    return request({
        url: '/reservation/listByUserId',
        method: 'post',
        params: {
            userId
        }
    })
}

//添加预定信息
export function reservationAdd(data) {
    return request({
        url: '/reservation/add',
        method: 'post',
        data
    })
}

//修改预定信息
export function reservationUpdate(data) {
    return request({
        url: '/reservation/update',
        method: 'post',
        data
    })
}

//删除预定信息
export function reservationDelete(id) {
    return request({
        url: '/reservation/delete',
        method: 'post',
        params: {
            id
        }
    })
}

//批量删除预定信息
export function reservationBatchDelete(data) {
    return request({
        url: '/reservation/delete/batch',
        method: 'post',
        data
    })
}
