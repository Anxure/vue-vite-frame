/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-06-01 10:30:06
 * @LastEditors: Anxure
 * @LastEditTime: 2025-08-01 17:56:42
 */
// import type { Plugin } from 'vite'
import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { ConfigMockPlugin } from './mock'
import { ConfigCompressPlugin } from './compress'
import { autoImportAntd } from './autoImportAntd'
import unoCSS from 'unocss/vite';
import { ImportIconFont } from './iconfont'
// import DefineOptions from 'unplugin-vue-define-options/vite'
import { ViteHtmlPlugin } from './html'
export function createVitePlugins(isBuild: boolean, isOpenGip: boolean,  title: string, version: string, isMock: boolean, fontUrl:string, publicPath: string ) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx(),
    unoCSS(),
    // iconfont打包自动引入，不需要手动下载
    ImportIconFont(fontUrl),
    // 定义组件 name 属性，避免两个 script 标签
    // DefineOptions(),
    // 开启.gz压缩  rollup-plugin-gzip
    ConfigCompressPlugin(isOpenGip),
    // 按需一入antd组件库
    autoImportAntd(),
    ViteHtmlPlugin(isBuild, title, version, publicPath)
  ]

  // vite-plugin-mock
  vitePlugins.push(ConfigMockPlugin(isBuild, isMock))

  return vitePlugins
}
