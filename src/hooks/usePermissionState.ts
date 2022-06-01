import { RouteRecordRaw } from 'vue-router'
import { MenuModel } from '@/api/model/userModel'
/**
 * @description: 将后台返回菜单递归为一维数组
 * @param {*}  路由表信息
 * @return {*} 一维数组的路由
 */
export function useLoopTranformRouter(menus: Array<MenuModel>): Array<MenuModel> {
  let newMenus: Array<MenuModel> = []
  menus.forEach(item => {
    const tmp = { ...item };
    if (tmp.children && tmp.children.length > 0) {
      const noChildTmp = { ...tmp };
      delete noChildTmp.children;
      newMenus.push(noChildTmp);
      newMenus = newMenus.concat(useLoopTranformRouter(tmp.children));
    } else {
      newMenus.push(tmp)
    }
  })
  return newMenus
}
/**
* @description: 获取当前用户已有的路由表
* @param {Array} asyncRoute 当前的路由表
* @param {*} menus 一维的菜单
* @return {*} userAsyncRouter 已有权限的菜单
*/
export function useGetAllowRoute(asyncRoute: Array<RouteRecordRaw>, menus: Array<MenuModel>) {
 const userAsyncRouter: Array<RouteRecordRaw> = []
 asyncRoute.forEach(route => {
   const temp = {...route}
   const targetRoute = menus.find(r => r.path === route.path);
   // 如果首层路由存在，直接加入
   if (!!targetRoute) {
     if (temp.children) {
       temp.children = useGetAllowRoute(temp.children, menus);
     }
     const tempMeta = { ...temp.meta, ...targetRoute }
     delete tempMeta.path;
     temp.meta = tempMeta;
     userAsyncRouter.push(temp);
   } else {
     // 公共路由放行，这里预留出不需要鉴权的路由，在meta里面添加 {guest: true}
     if (route.path === '/' || route.meta?.guest) {
       if (temp.children) {
         temp.children = useGetAllowRoute(temp.children, menus);
       }
        userAsyncRouter.push(temp)
     }
   }
 })
 return userAsyncRouter
}