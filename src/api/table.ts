/*
 * @Author: Anxure
 * @Desc:
 * @Date: 2022-10-27 10:54:04
 * @LastEditors: Anxure
 * @LastEditTime: 2022-10-27 10:59:36
 */
import request from '@/utils/request'
import { tableParams } from '@/api/model/tableModel'
import { IResponseData } from '@/types/axios'

export function getTableList(params : tableParams){
  return request.get('/tableList', { params })
}
