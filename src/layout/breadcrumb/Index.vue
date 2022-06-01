<template>
  <div class="breadcrumb-content">
    <span class="trigger" @click="handleCollapse">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="collapsed ? '#icon-menu-unfold3' : '#icon-menu-fold'"></use>
      </svg>
    </span>
    <a-breadcrumb class="breadcrumb" v-if="!useMultiTab">
      <a-breadcrumb-item v-for="item in breadContent" :key="item.name">{{ item.meta.title }}</a-breadcrumb-item>
    </a-breadcrumb>
    <multi-tab v-else></multi-tab>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue';
import { useRoute, RouteLocationMatched } from 'vue-router';
import multiTab from '@/components/multiTab/Index.vue'
import { layoutSetting } from '@/config/globalSetting'
export default defineComponent({
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  components: {multiTab},
  setup(props, { emit }) {
    const route = useRoute();
    const state = reactive({
      breadContent: [] as RouteLocationMatched[]
    });
    const matched = [...route.matched];
    const useMultiTab = layoutSetting.showMultiTab
    state.breadContent = matched.splice(1);
    function handleCollapse() {
      emit('update:collapsed', !props.collapsed);
    }
    watch(
      () => route.name,
      () => {
        const matched = [...route.matched];
        state.breadContent = matched.splice(1);
      }
    );
    return {
      handleCollapse,
      useMultiTab,
      ...toRefs(state)
    };
  }
});
</script>

<style lang="less" scoped>
.breadcrumb-content {
  display: flex;
  align-items: center;
  background: #fff;
  .trigger {
    padding: 0 8px;
    cursor: pointer;
    &:hover {
      color: @primary-color;
    }
    i {
      font-size: 20px;
    }
  }
  .breadcrumb {
    line-height: 48px;
  }
}
</style>