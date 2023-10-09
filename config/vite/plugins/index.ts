/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-06-01 10:30:06
 * @LastEditors: Anxure
 * @LastEditTime: 2023-10-09 15:01:59
 */
// import type { Plugin } from 'vite'
import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { ConfigMockPlugin } from './mock'
import { ConfigCompressPlugin } from './compress'
import { autoImportAntd } from './autoImportAntd'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { ViteHtmlPlugin } from './html'
export function createVitePlugins(isBuild: boolean, isOpenGip: boolean,  title: string, version: string, isMock: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx(),
    // 定义组件 name 属性，避免两个 script 标签
    DefineOptions(),
    // 开启.gz压缩  rollup-plugin-gzip
    ConfigCompressPlugin(isOpenGip),
    // 按需一入antd组件库
    autoImportAntd(),
    ViteHtmlPlugin(isBuild, title, version)
  ]

  // vite-plugin-mock
  vitePlugins.push(ConfigMockPlugin(isBuild, isMock))

  return vitePlugins
}
