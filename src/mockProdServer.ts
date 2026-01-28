/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-05-31 10:23:31
 * @LastEditors: Anxure
 * @LastEditTime: 2026-01-28 10:55:48
 */
import { createProdMockServer } from 'vite-plugin-mock/client'
// 批量加载
// const modules = import.meta.globEager('./mock/module/*.ts')
const modules = import.meta.glob('../mock/module/*', { eager: true })
// console.log(modules)
const mockModules: Array<any> = []
Object.keys(modules).forEach((key) => {
  mockModules.push(...(modules[key] as any).default)
})
const VITE_APP_BASE_URL =  import.meta.env.VITE_APP_BASE_URL
export function setupProdMockServer() {
  const modules = mockModules.map(item => {
    return {
      ...item,
      url:`${VITE_APP_BASE_URL}${item.url}`
    }
  })
  createProdMockServer(modules)
}
