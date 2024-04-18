import { defineConfig, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss';
// 如果使用像素单位，可以使用该插件
import presetRemToPx from '@unocss/preset-rem-to-px';
// 完整配置 https://unocss.dev/
export default defineConfig({
  safelist: [],
  theme: {
    // 根据自己需求定制
    colors: {
      primary: 'var(--colorPrimary)',
      success: 'var(--colorSuccess)',
      warning: 'var(--colorWarning)',
      error: 'var(--colorError)',
      link: 'var(--colorLink)'
    },
    fontSize: {
      mini: '12px',
      default: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px'
    }
  },
  presets: [presetUno(), presetRemToPx()],
  transformers: [transformerVariantGroup(), transformerDirectives()]
});
