/*
 * @Author: Anxure
 * @Desc:
 * @Date: 2022-10-25 15:29:59
 * @LastEditors: Anxure
 * @LastEditTime: 2024-04-19 14:16:39
 */
/*
 * @Author: Anxure
 * @Desc: vite-plugin-html
 * @Date: 2022-10-13 09:22:29
 * @LastEditors: Anxure
 * @LastEditTime: 2022-10-13 09:44:09
 */
import { createHtmlPlugin } from 'vite-plugin-html';
export const ViteHtmlPlugin = (isBuild: boolean, VITE_APP_TITLE : string, appVersion:  string, publicPath: string)  => {
  return createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: VITE_APP_TITLE,
        appVersion,
        // injectScript: `<script src="${publicPath}iconfont/iconfont.js"></script>`
      }
    }
  })
}