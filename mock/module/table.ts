/*
 * @Author: Anxure
 * @Desc:
 * @Date: 2022-10-27 10:26:52
 * @LastEditors: Anxure
 * @LastEditTime: 2023-10-09 09:41:10
 */
import { tableParams } from '@/api/model/tableModel'
import { MockMethod } from 'vite-plugin-mock'
import { resultPageSuccess } from '../util'
import { Random } from 'mockjs'
const professionList = ['教师', '医生', '消防员', '程序员', '工人', '学生']
const phonePrex = ['132', '135', '189', '183']
const tableList = Array.from({length: 200}).map((item,index) => {
  return {
      id: `${index}`,
      name: '@cname()',
      address: '@county(true)',
      age: '@natural(0, 50)',
      phone: `${phonePrex[Math.floor(Math.random() * 4)]}${Math.round(Math.random()*100000000)}`,
      date: `@date('yyyy-MM-dd')`,
      time: `@time('HH:mm')`,
      profession: professionList[Math.floor(Math.random() * 6)]
  }
})
export default [
  {
    url: '/tableList',
    timeout: 1000,
    method: 'get',
    response: ({ query }: { query: tableParams }) => {
      const { pageNum = 1, pageSize = 10 } = query
      return resultPageSuccess(pageNum, pageSize, tableList)
    }
  }
]
