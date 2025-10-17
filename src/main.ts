import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Antd from 'ant-design-vue'
import piniaStore from './store'
import '@/assets/style/common.less'
import 'virtual:uno.css';
import globalComponents from '@/components';
import { injectThemeColors } from '@/utils/theme';

// 注入主题色
injectThemeColors();
createApp(App)
  .use(piniaStore)
  .use(router)
  .use(globalComponents) // 全局组件'
  .mount('#app')
