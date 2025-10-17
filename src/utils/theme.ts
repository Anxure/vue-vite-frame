/*
 * @Desc: 主题色工具函数
 */
import { themeColors } from '@/config/theme';

/**
 * 生成 CSS 变量字符串
 */
export function generateCSSVariables(): string {
  return `
    :root {
      --colorPrimary: ${themeColors.primary};
      --colorSuccess: ${themeColors.success};
      --colorWarning: ${themeColors.warning};
      --colorError: ${themeColors.error};
      --colorLink: ${themeColors.link};
      --header-gray-bg-color-0: #f6f6f6;
    }
  `;
}

/**
 * 动态注入主题色到页面
 */
export function injectThemeColors(): void {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = generateCSSVariables();
    document.head.appendChild(style);
  }
}

/**
 * 获取主题色对象
 */
export function getThemeColors() {
  return themeColors;
}
