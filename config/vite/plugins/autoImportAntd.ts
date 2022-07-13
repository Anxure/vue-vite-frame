/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc: 按需引入ant-design-vue的组件，不涉及自定义组件
 * @Date: 2022-07-12 14:43:43
 * @LastEditors: Anxure
 * @LastEditTime: 2022-07-13 10:20:59
 */
import Components from 'unplugin-vue-components/vite' // 按需加载自定义组件
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
export const autoImportAntd = () => {
  return Components({
    dirs: [],
    directoryAsNamespace: true,
    extensions: ['vue'],
    resolvers: [
      AntDesignVueResolver({
          importStyle: 'less',
          // 参数配置可参考：https://github.com/antfu/unplugin-vue-components/blob/main/src/core/resolvers/antdv.ts
          // 自动引入 ant-design/icons-vue中的图标，需要安装@ant-design/icons-vue
          resolveIcons: true,
      })
    ]
  })
}