/*
 * @Author: Anxure
 * @Desc:
 * @Date: 2026-01-29 11:29:47
 * @LastEditors: Anxure
 * @LastEditTime: 2026-01-29 11:29:54
 */
import Clipboard from 'vue-clipboard3';

export const asyncCopy = async (text: string) => {
  const { toClipboard } = Clipboard();

  return toClipboard(text);
};
