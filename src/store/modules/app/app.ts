import { defineStore } from 'pinia'
import { ref } from 'vue'
import { layoutSetting } from '@/config/globalSetting'
import { MenuTheme } from 'ant-design-vue/es'

export const useAppStore = defineStore('app', () => {
  // state
  const collapsed = ref<boolean>(false)
  // actions
  const toggleCollapsed = (payload: boolean) => {
    collapsed.value = payload
  }

  return {
    collapsed,
    toggleCollapsed
  }
})