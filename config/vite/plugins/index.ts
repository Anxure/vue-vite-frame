/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-06-01 10:30:06
 * @LastEditors: Anxure
 * @LastEditTime: 2022-11-03 13:50:52
 */
// import type { Plugin } from 'vite'
import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { ConfigMockPlugin } from './mock'
import { ConfigCompressPlugin } from './compress'
import { autoImportAntd } from './autoImportAntd'
import DefineOptions from 'unplugin-vue-define-options/vite'
// import OptimizationPersist from 'vite-plugin-optimize-persist'
// import PkgConfig from 'vite-plugin-package-config'
import { ViteHtmlPlugin } from './html'
// import { ConfigRestartPlugin } from './restart'
export function createVitePlugins(isBuild: boolean, isOpenGip: boolean,  title: string, version: string) {
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
    // 依赖预加载保存(自vite2.9.1以后废弃)
    // PkgConfig(),
    // OptimizationPersist(),
  ]

  // vite-plugin-mock
  vitePlugins.push(ConfigMockPlugin(isBuild))
  vitePlugins.push()

  return vitePlugins
}
