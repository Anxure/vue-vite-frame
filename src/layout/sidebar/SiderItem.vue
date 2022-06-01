<template>
  <a-sub-menu :key="menuInfo.name" v-bind="$attrs">
    <template #title>
      <span class="anticon">
        <svg class="icon" aria-hidden="true">
           <use :xlink:href="`#icon-${menuInfo.icon}`"></use>
        </svg>
      </span>
      <span>{{ menuInfo.title }}</span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.name">
      <template v-if="!item.children">
        <a-menu-item :key="item.name">
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
<script lang="ts">
export default {
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>