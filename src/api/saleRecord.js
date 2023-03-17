import request from '@/utils/request'

//获取销售记录列表
export function saleRecordList(data) {
    return request({
        url: '/saleRecord/list',
        method: 'post',
        data
    })
}

//获取销售记录By userId
export function saleRecordListByUserId(userId) {
    return request({
        url: '/saleRecord/listByUserId',
        method: 'post',
        params: {
            userId
        }
    })
}


//添加销售记录
export function saleRecordAdd(data) {
    return request({
        url: '/saleRecord/add',
        method: 'post',
        data
    })
}

//修改销售记录
export function saleRecordUpdate(data) {
    return request({
        url: '/saleRecord/update',
        method: 'post',
        data
    })
}

//删除销售记录
export function saleRecordDelete(id) {
    return request({
        url: '/saleRecord/delete',
        method: 'post',
        params: {
            id
        }
    })
}

//批量删除销售记录
export function saleRecordBatchDelete(data) {
    return request({
        url: '/saleRecord/delete/batch',
        method: 'post',
        data
    })
}