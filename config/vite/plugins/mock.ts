/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-06-01 10:40:55
 * @LastEditors: Anxure
 * @LastEditTime: 2026-01-28 10:57:05
 */
/**
 * @name ConfigMockPlugin
 * @description 引入mockjs，本地模拟接口
 */
 import { viteMockServe } from 'vite-plugin-mock'
 export const ConfigMockPlugin = (isBuild: boolean, isMock: boolean) => {
     return viteMockServe({
         ignore: /^\_/,
         mockPath: 'mock',
         enable: isMock, //实际开发请关闭，会影响打包体积
     })
 }