<template>
  <div class="flex items-center bg-white">
    <span class="py-0 px-2 hover:text-primary" @click="handleCollapse">
      <IconFont type="icon-menu-unfold3" class="text-20px"></IconFont>
    </span>
    <a-breadcrumb class="leading-48px" v-if="!useMultiTab">
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
