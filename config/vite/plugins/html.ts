/*
 * @Author: Anxure
 * @Desc:
 * @Date: 2022-10-25 15:29:59
 * @LastEditors: Anxure
 * @LastEditTime: 2022-11-03 13:50:59
 */
/*
 * @Author: Anxure
 * @Desc: vite-plugin-html
 * @Date: 2022-10-13 09:22:29
 * @LastEditors: Anxure
 * @LastEditTime: 2022-10-13 09:44:09
 */
import { createHtmlPlugin } from 'vite-plugin-html';
export const ViteHtmlPlugin = (isBuild: boolean, VITE_APP_TITLE : string, appVersion:  string)  => {
  return createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: VITE_APP_TITLE,
        appVersion
      }
    }
  })
}