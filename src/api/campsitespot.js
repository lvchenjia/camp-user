import request from '@/utils/request'

//获取露营点列表
export function campsitespotList(data) {
    return request({
        url: '/campsitespot/list',
        method: 'post',
        data
    })
}

//获取露营点列表ByCampsiteId
export function campsitespotListByCampsiteId(campsiteId) {
    return request({
        url: '/campsitespot/listByCampsiteId',
        method: 'post',
        params: {
            campsiteId
        }
    })
}

//添加露营点
export function campsitespotAdd(data) {
    return request({
        url: '/campsitespot/add',
        method: 'post',
        data
    })
}

//修改露营点
export function campsitespotUpdate(data) {
    return request({
        url: '/campsitespot/update',
        method: 'post',
        data
    })
}

//删除露营点
export function campsitespotDelete(id) {
    return request({
        url: '/campsitespot/delete',
        method: 'post',
        params: {
            id
        }
    })
}

//批量删除露营点
export function campsitespotBatchDelete(data) {
    return request({
        url: '/campsitespot/delete/batch',
        method: 'post',
        data
    })
}