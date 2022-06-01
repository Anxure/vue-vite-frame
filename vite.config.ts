/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2021-06-25 10:27:34
 * @LastEditors: Anxure
 * @LastEditTime: 2022-06-01 17:42:11
 */
import { defineConfig, UserConfig, ConfigEnv, loadEnv } from 'vite'
import { createVitePlugins } from './config/vite/plugins'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
function resovePath(paths: string) {
  // 如果 __dirname 找不到 需要 yarn add @types/node
  return resolve(__dirname, paths)
}
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const { VITE_APP_BASE_URL, VITE_APP_TARGET_URL } = env
  const isBuild = command === 'build'
  const isOpenGip = false
  const VITE_DROP_CONSOLE = true

  return {
    plugins: createVitePlugins(isBuild, isOpenGip),
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import "${resolve('src/assets/style/variables.less')}"`
          },
          javascriptEnabled: true
        }
      }
    },
    // server
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      // 服务配置
      port: 8090, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      host: '0.0.0.0', // IP配置，支持从IP启动
      proxy: {
        [VITE_APP_BASE_URL]: {
          target: VITE_APP_TARGET_URL,
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp(`^${VITE_APP_BASE_URL}`), '')
        }
      }
    },
    build: {
      target: 'modules',
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: [],
        // https://rollupjs.org/guide/en/#big-list-of-options
      },
      watch: {
        // https://rollupjs.org/guide/en/#watch-options
      },
      // Turning off brotliSize display can slightly reduce packaging time
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
    },
  }
})
