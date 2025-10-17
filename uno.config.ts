import { defineConfig, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss';
// 如果使用像素单位，可以使用该插件
import presetRemToPx from '@unocss/preset-rem-to-px';
// 完整配置 https://unocss.dev/
export default defineConfig({
  // 只有在确实需要处理动态类名时才需要配置 safelist
  // safelist: [],
  theme: {
    // 根据自己需求定制
    colors: {
      primary: 'var(--colorPrimary)',
      success: 'var(--colorSuccess)',
      warning: 'var(--colorWarning)',
      error: 'var(--colorError)',
      link: 'var(--colorLink)',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
      }
    },
    fontSize: {
      mini: '12px',
      default: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px'
    },
    spacing: {
      '15px': '15px',
      '20px': '20px'
    }
  },
  presets: [presetUno(), presetRemToPx()],
  transformers: [transformerVariantGroup(), transformerDirectives()]
});
