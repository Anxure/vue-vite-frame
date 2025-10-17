import { defineStore } from 'pinia'
import { ref } from 'vue'
import { layoutSetting } from '@/config/globalSetting'
import { MenuTheme } from 'ant-design-vue/es'
import type { AppState } from './type'

export const useAppStore = defineStore('app', () => {
  // state
  const collapsed = ref<boolean>(false)
  const theme = ref<MenuTheme>(layoutSetting.theme as MenuTheme)

  // actions
  const toggleCollapsed = (payload: boolean) => {
    collapsed.value = payload
  }

  return {
    collapsed,
    theme,
    toggleCollapsed
  }
})