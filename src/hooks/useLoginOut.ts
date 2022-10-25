/*
 * @Author: Anxure
 * @Desc:useLoginOut
 * @Date: 2022-07-08 11:03:09
 * @LastEditors: Anxure
 * @LastEditTime: 2022-10-25 14:51:20
 */
import { useUserStore } from '@/store';
import { removeAll } from '@/utils/storage'
import router from '@/router'
export function useLoginOut() {
  const userStore = useUserStore()
  userStore.$reset()
  removeAll()
  router.push('/login')
}