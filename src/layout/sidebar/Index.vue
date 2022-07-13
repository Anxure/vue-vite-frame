<template>
  <a-menu class="menu-content" :theme="theme" mode="inline" :selectedKeys="selectedKeys" :openKeys="openKeys">
    <template v-for="item in menu" :key="item.path">
      <template v-if="item.children && item.children.length > 0">
        <sider-item :menu-info="item" :key="item.name"></sider-item>
      </template>
      <a-menu-item v-else :key="item.path">
        <router-link :to="(item.path as string)">
          <span class="anticon">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="`#icon-${item.icon}`"></use>
            </svg>
            <i :class="['iconfont', `icon-${item.icon}`]"></i>
          </span>
          <span>{{ item.title }}</span>
        </router-link>
      </a-menu-item>
    </template>
  </a-menu>
</template>
<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue';
import {useRoute } from 'vue-router'
import { useAppStore, useUserStore } from '@/store';
import SiderItem from './SiderItem.vue';
  const props = defineProps({
      collapsed: {
      type: Boolean,
      default: false
    }
  });
    const appStore = useAppStore();
    const userStore = useUserStore();
    const route = useRoute()
    let openKeys = ref<Array<string | number>>([]);
    const menu = userStore.menu
    const selectedKeys = computed(() => route.name ? [route.path] : [])
    const matchedKeys = computed(() => route.matched.map((item) => item.path))
    const theme = appStore.theme
    watchEffect(() => {
      openKeys.value = props.collapsed ? [] : matchedKeys.value
    })
</script>

<style lang="less" scoped>
.menu-item-title.active {
  width: 0;
  display: inline-block;
}
.menu-content {
  max-height: calc(100vh - 64px);
}
</style>
