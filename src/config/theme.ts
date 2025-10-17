/*
 * @Author: Anxure
 * @Desc: 主题色统一配置 - 唯一数据源
 * @Date: 2023-10-09 10:42:36
 * @LastEditors: Anxure
 * @LastEditTime: 2024-04-18 16:56:42
 */
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';

// 主题色配置 - 唯一数据源
export const themeColors = {
  primary: '#1890ff',
  success: '#52c41a',
  warning: '#faad14',
  error: '#ff4d4f',
  link: '#1890ff',
} as const;

// Ant Design Vue 主题配置
export const themeToken: ThemeConfig['token'] = {
  colorPrimary: themeColors.primary,
  colorSuccess: themeColors.success,
  colorWarning: themeColors.warning,
  colorError: themeColors.error,
  colorLink: themeColors.link,
};
