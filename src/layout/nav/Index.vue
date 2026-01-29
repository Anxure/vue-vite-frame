<template>
  <ALayoutHeader class="fixed  left-0 flex justify-between items-center right-0 top-0 z-100 border-b-1 border-b-[var(--ant-colorBorderSecondary)] border-b-solid !bg-[var(--ant-colorBgContainer)] !p-0 !leading-none !pr-2">
    <div class="ml-8">
      <slot name="logo"></slot>
    </div>
    <div class="flex flex-row flex-nowrap justify-end items-center">

      <template v-if="showDarkSwitch">
        <span>
          <DarkSwitch v-model:checked="themeDarkStore.isDark" />
        </span>
        <ADivider type="vertical" />
      </template>
      <template v-if="showAntTokenAsCssVariablesQueryButton">
        <span>
          <AntTokenAsCssVariablesQueryButton />
        </span>
        <ADivider type="vertical" />
      </template>
      <a-dropdown>
        <div class="cursor-pointer">
          <a-avatar class="ml-2.5" :src="headerImg">
            <!-- <template #icon><UserOutlined /></template> -->
          </a-avatar>
          <span class="ml-2.5 text-white/85">{{ userInfo.username }}
            <DownOutlined />
          </span>
        </div>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">修改密码</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;" @click="loginOut">退出登录</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </ALayoutHeader>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store'
import { DownOutlined } from '@ant-design/icons-vue'
import headerImg from '@/assets/image/avatar.png'
import { useLoginOut } from '@/hooks/useLoginOut'
import { useThemeDarkStore } from '@/store/modules/app/themeDark'
import DarkSwitch from '../DarkSwitch.vue'
import AntTokenAsCssVariablesQueryButton from '@/components/antTokenAsCssVariables/AntTokenAsCssVariablesQueryButton.vue'
import { computed } from 'vue'
const userStore = useUserStore()
const themeDarkStore = useThemeDarkStore()
const showDarkSwitch = computed(() => {
  return import.meta.env.DEV
})
const showAntTokenAsCssVariablesQueryButton = computed(() => {
  return import.meta.env.DEV
})
function loginOut() {
  useLoginOut()
}
const userInfo = userStore.userInfo
</script>