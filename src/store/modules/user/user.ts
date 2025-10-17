import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LoginModel, MenuParams, MenuModel } from '@/api/model/userModel'
import { getStore } from '@/utils/storage'
import { getMenu } from '@/api/user'
import { useGetAllowRoute, useLoopTranformRouter } from '@/hooks/usePermissionState'
import { asyncRoutes } from '@/router/router'
import { RouteRecordRaw } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  // state
  const userInfo = ref<LoginModel>(getStore('userInfo') ? JSON.parse(getStore('userInfo') as string) : {})
  const menu = ref<MenuModel[]>([])
  const userRouter = ref<RouteRecordRaw[]>([])

  // actions
  const setUserInfo = (payload: LoginModel) => {
    userInfo.value = payload
  }

  const getMenuData = async (params: MenuParams) => {
    const { result, code } = await getMenu(params)
    const menus = useLoopTranformRouter(result)
    // 获取用户权限下的菜单
    const userMenu = useGetAllowRoute(asyncRoutes, menus)
    menu.value = result
    userRouter.value = userMenu
    return { result, userMenu }
  }

  return {
    userInfo,
    menu,
    userRouter,
    setUserInfo,
    getMenu: getMenuData
  }
})