import request from '@/utils/request'

//获取营地设施列表
export function facilityList(data) {
    return request({
        url: '/facility/list',
        method: 'post',
        data
    })
}

//获取全部营地设施
export function facilityListAll() {
    return request({
        url: '/facility/list/all',
        method: 'post',
    })
}

//获取营地设施列表By CampsiteId
export function facilityListByCampsiteId(campsiteId) {
    return request({
        url: '/facility/listByCampsiteId',
        method: 'post',
        params: {
            campsiteId
        }
    })
}

//添加营地设施
export function facilityAdd(data) {
    return request({
        url: '/facility/add',
        method: 'post',
        data
    })
}

//修改营地设施
export function facilityUpdate(data) {
    return request({
        url: '/facility/update',
        method: 'post',
        data
    })
}

//删除营地设施
export function facilityDelete(id) {
    return request({
        url: '/facility/delete',
        method: 'post',
        params: {
            id
        }
    })
}

//批量删除营地设施
export function facilityBatchDelete(data) {
    return request({
        url: '/facility/delete/batch',
        method: 'post',
        data
    })
}
