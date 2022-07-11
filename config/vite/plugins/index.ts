/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-06-01 10:30:06
 * @LastEditors: Anxure
 * @LastEditTime: 2022-07-06 15:02:02
 */
import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { ConfigMockPlugin } from './mock'
import { ConfigCompressPlugin } from './compress'
import DefineOptions from 'unplugin-vue-define-options/vite'
// import { ConfigRestartPlugin } from './restart'
export function createVitePlugins(isBuild: boolean, isOpenGip: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx(),
    // 定义组件 name 属性，避免两个 script 标签
    DefineOptions(),
    // 开启.gz压缩  rollup-plugin-gzip
    ConfigCompressPlugin(isOpenGip)
    // 监听配置文件改动重启
    // ConfigRestartPlugin(),
  ]

  // vite-plugin-mock
  vitePlugins.push(ConfigMockPlugin(isBuild))

  return vitePlugins
}
