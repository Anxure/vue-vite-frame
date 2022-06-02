/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-05-30 15:42:04
 * @LastEditors: Anxure
 * @LastEditTime: 2022-06-02 14:25:27
 */import { layoutSetting } from '@/config/globalSetting'
import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
  state: () => ({
    collapsed: false,
    theme: layoutSetting.theme,
    title: layoutSetting.title
  }),
  actions: {
    toggleCollapsed(playload: boolean) {
      this.collapsed = playload
    }
  }
})
