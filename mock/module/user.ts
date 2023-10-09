/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-05-31 10:23:31
 * @LastEditors: Anxure
 * @LastEditTime: 2023-10-09 11:03:59
 */
import { resultSuccess, resultError, getJson, getQueryParameters, requestParams } from '../util'
import { MockMethod } from 'vite-plugin-mock'
const defaultUserInfo = [
  {
    id: '1',
    username: 'admin',
    desc: '充满活力的胖子',
    realNanme: 'Anxure',
    password: '123456',
    token: 'token1',
  },
  {
    id: '2',
    username: 'test',
    desc: '充满活力的胖子',
    realNanme: 'Test',
    password: '123456',
    token: 'token2',
  }
]
export const menuTree = [
  {
    title: '工作台',
    name: 'workplace',
    path: '/workplace',
    icon: 'gongzuotai'
  },
  {
    title: '表格示例',
    name: 'table',
    path: '/table',
    icon:'biaoge1'
  },
  {
    title: '表单页',
    name: 'form',
    path: '/form',
    icon: 'biaodan',
    children: [
      {
        title: '基础表单',
        name: 'base-form',
        path: '/form/base-form'
      },
      {
        title: '高级表单',
        name: 'advanced-form',
        path: '/form/advanced-form'
      }
    ]
  },
  {
    title: '异常页',
    name: 'exception',
    path: '/exception',
    icon: 'yichangguanli',
    children: [
      {
        title: '403',
        name: '403',
        path: '/exception/403'
      },
      {
        title: '404',
        name: '404',
        path: '/exception/404'
      }
    ]
  }
]
export const testMenuTree = [
  // {
  //   title: '工作台',
  //   name: 'workplace',
  //   path: '/workplace',
  //   icon: 'gongzuotai'
  // },
  {
    title: '表单页',
    name: 'form',
    path: '/form',
    icon: 'biaodan',
    children: [
      {
        title: '基础表单',
        name: 'base-form',
        path: '/form/base-form'
      }
      // {
      //   title: '高级表单',
      //   name: 'advanced-form',
      //   path: '/form/advanced-form'
      // }
    ]
  },
  {
    title: '异常页',
    name: 'exception',
    path: '/exception',
    icon: 'yichangguanli',
    children: [
      {
        title: '403',
        name: '403',
        path: '/exception/403'
      },
      {
        title: '404',
        name: '404',
        path: '/exception/404'
      }
    ]
  }
]
export default [
  {
    url: '/login',
    timeout: 1000,
    method: 'post',
    response: (request: requestParams) => {
      const { username, password } = request?.body
      const checkUser = defaultUserInfo.find(item => (item.username === username && item.password === password))
      if (!checkUser) {
        return resultError('用户名或者密码错误')
      }
      return resultSuccess({
        ...checkUser,
        password: ''
      })
    }
  },
  {
    url: '/getMenuTree',
    timeout: 1000,
    method: 'get',
    response: (request: requestParams) => {
      const { id } = request?.query
      let menu = []
      if (id === '1') {
        menu = menuTree
      } else {
        menu = testMenuTree
      }
      return resultSuccess([
        ...menu
      ])
    }
  }
]