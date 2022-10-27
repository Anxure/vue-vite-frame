/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-05-31 10:23:31
 * @LastEditors: Anxure
 * @LastEditTime: 2022-10-26 16:01:02
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
// 批量加载
// const modules = import.meta.globEager('./mock/module/*.ts')
const modules = import.meta.glob('./mock/module/*', { eager: true })
// console.log(modules)
const mockModules: Array<string> = []
Object.keys(modules).forEach((key) => {
  // console.log(key)
  mockModules.push(...(modules[key] as any).default)
})
export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
