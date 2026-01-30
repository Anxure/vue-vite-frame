/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-05-31 10:23:31
 * @LastEditors: Anxure
 * @LastEditTime: 2026-01-30 10:46:18
 */
import { createProdMockServer } from 'vite-plugin-mock/client'
// 批量加载
// const modules = import.meta.globEager('./mock/module/*.ts')
const modules = import.meta.glob('../mock/module/*.ts', { eager: true })
console.log(modules)
const mockModules: Array<any> = []
Object.keys(modules).forEach((key) => {
  mockModules.push(...(modules[key] as any).default)
})
const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL || ''
export function setupProdMockServer() {
  const modules = mockModules.map(item => {
    // 处理 URL 拼接，避免双斜杠
    let url = item.url
    if (VITE_APP_BASE_URL) {
      const baseUrl = VITE_APP_BASE_URL.endsWith('/')
        ? VITE_APP_BASE_URL.slice(0, -1)
        : VITE_APP_BASE_URL
      const path = item.url.startsWith('/') ? item.url : `/${item.url}`
      url = `${baseUrl}${path}`
    }
    return {
      ...item,
      url
    }
  })
  console.log('生产环境 Mock 服务已启动，拦截的 URL:', modules.map(m => m.url))
  createProdMockServer(modules)
}
