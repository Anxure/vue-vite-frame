/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-05-30 15:42:04
 * @LastEditors: Anxure
 * @LastEditTime: 2022-10-25 16:43:10
 */
import { useUserStore } from '@/store';
import { findFirstUrl } from '@/utils/utils'
export function useBackToIndex() {
  const userStore = useUserStore()
  const useRoute = userStore.menu
  console.log(useRoute)
  return findFirstUrl(useRoute)
}