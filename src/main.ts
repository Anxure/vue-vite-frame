import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Antd from 'ant-design-vue'
import piniaStore from './store'
import '@/assets/style/common.less'
import 'virtual:uno.css';
import globalComponents from '@/components';

// 生产环境启用 mock 服务
if (import.meta.env.VITE_PROD_MOCK === 'true' || import.meta.env.VITE_PROD_MOCK === true) {
  import('./mockProdServer').then(({ setupProdMockServer }) => {
    setupProdMockServer()
  })
}

createApp(App)
  .use(piniaStore)
  .use(router)
  .use(globalComponents) // 全局组件'
  .mount('#app')
