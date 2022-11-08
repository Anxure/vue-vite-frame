/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-06-01 10:40:55
 * @LastEditors: Anxure
 * @LastEditTime: 2022-11-08 10:06:21
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
         localEnabled: !isBuild,
         prodEnabled: isBuild && isMock, //实际开发请关闭，会影响打包体积
         // https://github.com/anncwb/vite-plugin-mock/issues/9
         injectCode: `
        import { setupProdMockServer } from '../mock/_createProdMockServer';
        setupProdMockServer();
        `,
     })
 }