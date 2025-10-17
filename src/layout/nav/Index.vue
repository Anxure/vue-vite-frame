<template>
  <a-layout-header class="flex justify-between items-center px-4 !bg-primary">
    <div>
      <slot name="logo"></slot>
    </div>
    <div class="flex flex-row flex-nowrap justify-end items-center">
      <a-tooltip @click="goToApi" title="API文档">
        <file-outlined class="text-4 mx-1 cursor-pointer text-white/85"></file-outlined>
      </a-tooltip>
      <a-popover placement="topLeft" trigger="click">
        <a-badge :dot="show">
          <BellOutlined class="text-4 mx-1 cursor-pointer text-white/85"></BellOutlined>
        </a-badge>
        <template #content>
          <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="通知">通知</a-tab-pane>
            <a-tab-pane key="2" tab="消息">消息</a-tab-pane>
            <a-tab-pane key="3" tab="待办">消息</a-tab-pane>
          </a-tabs>
        </template>
      </a-popover>
      <a-dropdown>
        <div class="cursor-pointer">
          <a-avatar class="ml-2.5" :src="headerImg">
            <!-- <template #icon><UserOutlined /></template> -->
          </a-avatar>
          <span class="ml-2.5 text-white/85">{{ userInfo.username }}<DownOutlined /></span>
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
  </a-layout-header>
</template>

<script lang="ts" setup>
import {ref } from 'vue'
import { useAppStore, useUserStore } from '@/store'
import { useRouter } from 'vue-router'
import { FileOutlined, BellOutlined, DownOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import headerImg from '@/assets/image/avatar.png'
import { useLoginOut } from '@/hooks/useLoginOut'
const appStore = useAppStore()
const userStore = useUserStore()
const router = useRouter()
function goToApi() {
  message.info('功能暂未开发')
}
function loginOut() {
 useLoginOut()
}
const userInfo = userStore.userInfo
const show = ref(false)
const activeKey = ref('1')
</script>
