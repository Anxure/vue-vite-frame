/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-06-01 10:51:26
 * @LastEditors: Anxure
 * @LastEditTime: 2022-06-01 10:51:27
 */
/**
 * @name ConfigRestartPlugin
 * @description 监听配置文件修改自动重启Vite
 */
 import ViteRestart from 'vite-plugin-restart'
 export const ConfigRestartPlugin = () => {
     return ViteRestart({
         restart: [
             '*.config.[jt]s',
             '**/config/*.[jt]s'
         ]
     })
 }