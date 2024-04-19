import iconfont from 'vite-plugin-iconfont';
export const ImportIconFont = (url: string) => iconfont({
  url: url,
  distUrl: './public/iconfont/iconfont.js',
  // iconJson: './src/components/IconPicker/data.json',
  inject: true, // 如果不开启，需要自己引入iconfont.js
  dts: './types/iconfont.d.ts',
  iconifyFile: './.iconify.json'
})