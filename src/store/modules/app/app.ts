/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-05-30 15:42:04
 * @LastEditors: Anxure
 * @LastEditTime: 2022-07-13 10:37:29
 */import { layoutSetting } from '@/config/globalSetting'
import { defineStore } from 'pinia'
import { AppState } from './type'
import { MenuTheme } from 'ant-design-vue/es'
export const useAppStore = defineStore('app', {
  state: () : AppState => ({
    collapsed: false,
    theme: layoutSetting.theme as MenuTheme,
    title: layoutSetting.title
  }),
  actions: {
    toggleCollapsed(playload: boolean) {
      this.collapsed = playload
    }
  }
})
