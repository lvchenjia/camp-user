import request from '@/utils/request'

//获取设施中的服务列表
export function facilityServiceList(data) {
    return request({
        url: '/facilityService/list',
        method: 'post',
        data
    })
}

//获取设施中的服务列表By FacilityId
export function facilityServiceListByFacilityId(facilityId) {
    return request({
        url: '/facilityService/listByFacilityId',
        method: 'post',
        params: {
            facilityId
        }
    })
}



//添加设施中的服务
export function facilityServiceAdd(data) {
    return request({
        url: '/facilityService/add',
        method: 'post',
        data
    })
}

//修改设施中的服务
export function facilityServiceUpdate(data) {
    return request({
        url: '/facilityService/update',
        method: 'post',
        data
    })
}

//删除设施中的服务
export function facilityServiceDelete(id) {
    return request({
        url: '/facilityService/delete',
        method: 'post',
        params: {
            id
        }
    })
}

//批量删除设施中的服务
export function facilityServiceBatchDelete(data) {
    return request({
        url: '/facilityService/delete/batch',
        method: 'post',
        data
    })
}
