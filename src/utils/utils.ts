/*
 * @Author: Anxure
 * @Desc:
 * @Date: 2022-10-25 16:21:15
 * @LastEditors: Anxure
 * @LastEditTime: 2022-10-25 16:44:18
 */
import {MenuModel } from '@/api/model/userModel'
export function findFirstUrl(menus: MenuModel[]): string {
  console.log(menus)
  if (menus.length === 0) {
    throw Error('暂无菜单，请联系管理员')
  }
  if (menus[0].path && menus[0].path !== '/') {
    return menus[0].path
  } else {
    return findFirstUrl(menus[0].children as MenuModel[])
  }
}