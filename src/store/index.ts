/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-05-30 15:42:04
 * @LastEditors: Anxure
 * @LastEditTime: 2022-05-30 18:13:47
 */
import { createPinia } from 'pinia'
import { useAppStore } from './modules/app/app'
import { useUserStore } from './modules/user/user'

const pinia = createPinia()

export { useAppStore, useUserStore }
export default pinia