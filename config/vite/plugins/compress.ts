/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-06-01 10:44:04
 * @LastEditors: Anxure
 * @LastEditTime: 2022-06-01 10:48:49
 */
/**
 * @name ConfigCompressPlugin
 * @description 开启.gz压缩
 */
 import viteCompression from 'vite-plugin-compression';
 export const ConfigCompressPlugin = (isBuild: boolean) => {
     if (isBuild) {
         return viteCompression({
             ext: '.gz',
             verbose: true,
             deleteOriginFile: false,
         })
     }
     return [];
 }