import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes, noMatchRoute } from './router'
// import { useGetAllowRoute, useLoopTranformRouter } from '@/hooks/usePermissionState'
// import { asyncRoutes } from '@/router/router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getStore } from '@/utils/storage'
import { useUserStore} from '@/store'
import { computed } from 'vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes]
})
let routerLoaded = false // 判断是是否加过路由，避免重复执行
let removeRouters: Array<() => void> = [];
// console.log(isAddRouter, 'isAddRouter')
const whiteRouterList = ['/login']
NProgress.configure({ showSpinner: false }) // NProgress Configuration
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  NProgress.start() // start progress bar
  const hasToken = getStore('admin_token')
  // const useRouter = computed(() => store.state.user.userRouter)
  const userInfo = JSON.parse(getStore('userInfo')!)
  // 未登录时,并且不是白名单路由，直接跳转登录页并且带上回调地址， 其余的直接放行
  if (!hasToken) {
    return whiteRouterList.includes(to.path) ? next() : to.path === '/'? next('/login') :next(`/login?redirect=${encodeURIComponent(to.fullPath)}`)
  }
  if (routerLoaded) {
    if (to.path === '/login') {
      const userAsyncRouter = userStore.userRouter
      const { path } = userAsyncRouter[0].children![0]
      next({ path })
    } else {
      next()
    }
  } else {
    const { userMenu:userRouter } = await userStore.getMenu({ id: userInfo.id })
    userRouter.push(noMatchRoute)
    removeRouters = userRouter.map((item) => router.addRoute(item));
    routerLoaded = true
    next({ ...to, replace: true })
  }
})
router.afterEach(() => {
  NProgress.done() // finish progress bar
})
// 重置路由
export function resetRouter() {
  removeRouters.map((item) => item());
  routerLoaded = false;
}
export default router
