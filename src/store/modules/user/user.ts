/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-05-30 15:42:04
 * @LastEditors: Anxure
 * @LastEditTime: 2022-10-25 16:40:50
 */
import { LoginModel, MenuParams, MenuModel } from '@/api/model/userModel'
import { getStore } from '@/utils/storage'
import { getMenu }from '@/api/user'
import { useGetAllowRoute, useLoopTranformRouter } from '@/hooks/usePermissionState'
import { asyncRoutes } from '@/router/router'
import { RouteRecordRaw } from 'vue-router'
import { defineStore } from 'pinia'
export interface UserState {
  userInfo: LoginModel,
  menu: MenuModel[],
  userRouter: RouteRecordRaw[]
}
export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userInfo: getStore('userInfo')? JSON.parse(getStore('userInfo') as string) : {},
    menu: [],
    userRouter: []
  }),
  actions: {
    setUserInfo(playload: LoginModel) {
      this.userInfo = playload
    },
    async getMenu(params: MenuParams){
      const { result, code } = await getMenu(params)
      const menus = useLoopTranformRouter(result)
      // 获取用户权限下的菜单
      const userMenu = useGetAllowRoute(asyncRoutes, menus)
      this.menu = result
      this.userRouter = userMenu
      return { result, userMenu }
  }
  }
})