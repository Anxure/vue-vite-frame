import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Antd from 'ant-design-vue'
import piniaStore from './store'
import '@/assets/style/iconfont.css'
import '@/assets/iconfont/iconfont'
import '@/assets/style/common.less'
// import { setupProdMockServer } from '../mock/_createProdMockServer'
// 如果你使用的 Vite，你可以使用 unplugin-vue-components 来进行按需加载。但是此插件无法处理非组件模块，如 message，这种组件需要手动加载：
// import 'ant-design-vue/es/message/style/css';
import { message } from 'ant-design-vue'
// if (import.meta.env.PROD) {
//   setupProdMockServer()
// }
createApp(App)
  .use(piniaStore)
  .use(router)
  .provide('$message', message)
  .mount('#app')
