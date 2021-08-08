import request from '@/utils/request'

export const getJobs = (params: any) =>
  request({
    url: '/jobs',
    method: 'get',
    params
  })

export const updateJob = (id: string, data: object) =>
  request({
    url: `/jobs/${id}`,
    method: 'put',
    data
  })

export const deleteJob = (id: string) =>
  request({
    url: `/jobs/${id}`,
    method: 'delete'
  })

export const createJob = (data: object) =>
  request({
    url: '/jobs',
    method: 'post',
    data
  })
