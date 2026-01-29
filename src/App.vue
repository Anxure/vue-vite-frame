<template>
  <a-config-provider :locale="antdChinese" :theme="{
    algorithm: antdThemeAlgorithm,
  }">
    <AntTokenAsCssVariables />
    <router-view />
  </a-config-provider>
</template>

<script lang="ts" setup>
import { useThemeDarkStore } from '@/store/modules/app/themeDark'
import antdChinese from 'ant-design-vue/es/locale/zh_CN';
import { theme } from 'ant-design-vue';
import { computed } from 'vue';
import AntTokenAsCssVariables from '@/components/antTokenAsCssVariables/index.vue'
const themeDarkStore = useThemeDarkStore()
const antdThemeAlgorithm = computed(() => [
  themeDarkStore.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
]);
</script>