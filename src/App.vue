<template>
  <a-config-provider :locale="locale"  :theme="customTheme">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts" setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { themeToken } from '@/config/theme'
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';
import { computed } from 'vue';
const customTheme = computed<ThemeConfig>(() => ({
  token:themeToken,
}));
dayjs.locale('zh-cn');
const locale = zhCN
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
