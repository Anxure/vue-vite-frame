/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-05-30 15:42:04
 * @LastEditors: Anxure
 * @LastEditTime: 2022-05-31 09:35:35
 */
import { computed } from 'vue'
import { useUserStore } from '@/store';
export function useBackToIndex() {
  const userStore = useUserStore()
  console.log(userStore)
  // const userRouter = computed(() => userStore.userRouter)
  // return userStore.userRouter?.children[0].path
}