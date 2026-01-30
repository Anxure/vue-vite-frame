import { defineConfig, UserConfig, ConfigEnv, loadEnv } from 'vite'
import { createVitePlugins } from './config/vite/plugins'
import { resolve } from 'path'
import { layoutSetting } from './src/config/globalSetting'
import { wrapperEnv } from './config/utils';
import { createProxy } from './config/proxy';
// 主题色现在通过CSS变量统一管理，不再需要在这里导入
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  console.log(command)
  const root = process.cwd() // 项目根目录
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env);
  const { VITE_PROXY, VITE_PUBLIC_PATH, VITE_PROD_MOCK, VITE_APP_TITLE, VITE_ICONFONT_URL } = viteEnv
  const isBuild = command === 'build'
  const isOpenGip = false
  const buildTime = `build-time=${new Date().toLocaleString()}`
  return {
    base: VITE_PUBLIC_PATH,
    plugins: createVitePlugins(isBuild, isOpenGip , VITE_APP_TITLE, buildTime, VITE_PROD_MOCK, VITE_ICONFONT_URL, VITE_PUBLIC_PATH),
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            // 主题色现在通过CSS变量统一管理，这里只保留必要的Less变量
            hack: `true;@import "${resolve(__dirname, './src/assets/style/variables.less')}"`
          }
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
      proxy: createProxy(VITE_PROXY)
    },
    esbuild: {
      // pure: command === 'build' ? ['console.log', 'debugger']: []
    },
    build: {
      target: 'modules',
      cssCodeSplit: true,
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false,
          drop_debugger: false,
        },
        output: {
          comments: false,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router', 'pinia'],
            'ant-design-vue': ['ant-design-vue'],
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
    },
  }
})
