/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-05-30 16:07:20
 * @LastEditors: Anxure
 * @LastEditTime: 2022-07-13 10:36:41
 */
import { MenuTheme } from "ant-design-vue/es"
export interface AppState {
  collapsed: boolean,
  theme: MenuTheme,
  [key: string]: unknown
}