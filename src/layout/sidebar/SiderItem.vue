<template>
  <a-sub-menu :key="menuInfo.path" v-bind="$attrs">
    <template #title>
      <span class="anticon">
        <IconFont :type="menuInfo.icon"></IconFont>
      </span>
      <span>{{ menuInfo.title }}</span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.name">
      <template v-if="!item.children">
        <a-menu-item :key="item.path">
          <router-link :to="item.path">
            <span>{{ item.title }}</span>
          </router-link>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.name" />
      </template>
    </template>
  </a-sub-menu>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'SubMenu'
})
defineProps({
  menuInfo: {
    type: Object,
    default: () => ({})
  }
})
</script>
