import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useStorage, watchImmediate } from '@vueuse/core'
export const useThemeDarkStore = defineStore('themeDark', () =>{
  const isDark = useStorage('themeDark', false)
  watchImmediate(isDark, (value) => {
    document.documentElement.classList.toggle('dark', value)
  })
  return {
    isDark,
  }
})