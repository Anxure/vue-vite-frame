<template>
  <div class="logo">{{ title }}</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { layoutSetting } from '@/config/globalSetting'
import { useAppStore } from '@/store'
export default defineComponent({
  setup() {
    const store = useAppStore()
    const collapsed = computed(() => {
      return store.collapsed
    })
    const title = layoutSetting.title
    return {
      collapsed,
      title
    }
  }
})
</script>

<style scoped lang="less">
.logo {
  height: 32px;
  margin: 16px;
  font-size: 30px;
  text-align: center;
  line-height: 32px;
  font-weight: bold;
}
.dark .logo {
  color: #fff;
}
</style>
