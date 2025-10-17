import { createPinia } from 'pinia'
import { useAppStore } from './modules/app/app'
import { useUserStore } from './modules/user/user'

const store = createPinia()

export { useAppStore, useUserStore }
export default store