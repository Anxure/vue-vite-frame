import { RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Index.vue')
  }
]
export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'app',
    redirect: '/login',
    component: () => import('@/layout/Index.vue'),
    children: [
      {
        path: '/workplace',
        name: 'workplace',
        component: () => import('@/views/workPlace/Index.vue'),
        meta: { title: '工作台' }
      },
      {
        path: '/form',
        name: 'form',
        redirect: '/form/base-form',
        component: () => import('@/layout/PageView.vue'),
        meta: { title: '表单页' },
        children: [
          {
            name: 'base-form',
            path: '/form/base-form',
            component: () => import('@/views/form/BaseForm.vue'),
            meta: { title: '基础表单' }
          },
          {
            name: 'advanced-form',
            path: '/form/advanced-form',
            component: () => import('@/views/form/AdvancedFrom.vue'),
            meta: { title: '高级表单' }
          }
        ]
      },
      {
        path: '/exception',
        name: 'exception',
        redirect: '/exception/403',
        component: () => import('@/layout/PageView.vue'),
        meta: { title: '异常页' },
        children: [
          {
            path: '/exception/403',
            name: '403',
            component: () => import('@/views/exception/403.vue'),
            meta: { title: '403' },
          },
          {
            path: '/exception/404',
            name: '404',
            component: () => import('@/views/exception/404.vue'),
            meta: { title: '404' },
          }
        ]
      }
    ]
  }
]
// 未匹配到路由时显示的页面
export const noMatchRoute = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  redirect: '/exception/404'
};