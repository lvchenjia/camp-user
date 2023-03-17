import request from '@/utils/request'

//获取营地列表
export function campsiteList(data) {
    return request({
        url: '/campsite/list',
        method: 'post',
        data
    })
}

export function campsiteListAll() {
    return request({
        url: '/campsite/list/all',
        method: 'post',
    })
}

//添加营地
export function campsiteAdd(data) {
    return request({
        url: '/campsite/add',
        method: 'post',
        data
    })
}

//修改营地
export function campsiteUpdate(data) {
    return request({
        url: '/campsite/update',
        method: 'post',
        data
    })
}

//删除营地
export function campsiteDelete(id) {
    return request({
        url: '/campsite/delete',
        method: 'post',
        params: {
            id
        }
    })
}

//批量删除营地
export function campsiteBatchDelete(data) {
    return request({
        url: '/campsite/delete/batch',
        method: 'post',
        data
    })
}