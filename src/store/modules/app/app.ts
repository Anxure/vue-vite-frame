/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-05-30 15:42:04
 * @LastEditors: Anxure
 * @LastEditTime: 2022-05-30 16:10:05
 */import { layoutSetting } from '@/config/globalSetting'
import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
  state: () => ({
    collapsed: false,
    theme: layoutSetting.theme
  }),
  actions: {
    toggleCollapsed(playload: boolean) {
      this.collapsed = playload
    }
  }
})
