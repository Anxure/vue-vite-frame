/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-05-31 10:23:31
 * @LastEditors: Anxure
 * @LastEditTime: 2022-06-01 17:43:33
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
// 批量加载
const modules = import.meta.globEager('./mock/module/*.ts')
console.log(modules)
const mockModules: Array<string> = []
Object.keys(modules).forEach((key) => {
  mockModules.push(...modules[key].default)
})
export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
