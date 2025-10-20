/*
 * @Author: Anxure
 * @Desc:useLoginOut
 * @Date: 2022-07-08 11:03:09
 * @LastEditors: Anxure
 * @LastEditTime: 2025-10-20 09:44:07
 */
import { useUserStore } from '@/store';
import { removeAll } from '@/utils/storage'
import router from '@/router'
export function useLoginOut() {
  const userStore = useUserStore()
  userStore.reset()
  removeAll()
  router.push('/login')
}