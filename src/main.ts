import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Antd from 'ant-design-vue'
import { antd } from '@/plugin/antd'
import piniaStore from './store'
import 'ant-design-vue/dist/antd.less';
import '@/assets/style/iconfont.css'
import '@/assets/iconfont/iconfont'
import '@/assets/style/common.less'
// import '@/assets/style/variables.less'
createApp(App)
  .use(piniaStore)
  .use(antd)
  .use(router)
  .mount('#app')
