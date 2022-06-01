<template>
  <a-layout class="layout-content overflow-hidden">
    <nav-component>
      <template #logo>
        <layout-logo></layout-logo>
      </template>
    </nav-component>
    <a-layout>
      <a-layout-sider :theme="theme" v-model:collapsed="collapsed" :trigger="null" collapsible>
        <side-component :collapsed="collapsed"></side-component>
      </a-layout-sider>
      <a-layout-content>
        <layout-breadcrumb v-model:collapsed="collapsed"></layout-breadcrumb>
        <div class="app-main">
          <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import NavComponent from '@/layout/nav/Index.vue'
import SideComponent from '@/layout/sidebar/Index.vue'
import LayoutLogo from '@/layout/logo/Index.vue'
import LayoutBreadcrumb from '@/layout/breadcrumb/Index.vue'
import { ref } from 'vue'
import { useAppStore } from '@/store'
const appStore = useAppStore()
const collapsed = ref<boolean>(false)
const theme = appStore.theme
</script>
<style lang="less" scoped>
@import '../assets/style/layout.less';
</style>
