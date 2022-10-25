<template>
  <a-layout-header :class="['layout-header', theme]">
    <div class="header-left">
      <slot name="logo"></slot>
    </div>
    <div class="header-right">
      <a-tooltip @click="goToApi" title="API文档">
        <file-outlined class="api-text"></file-outlined>
      </a-tooltip>
      <a-popover placement="topLeft" trigger="click">
        <a-badge :dot="show">
          <BellOutlined class="notice"></BellOutlined>
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
        <div class="user-info">
          <a-avatar class="user-avatar" :src="headerImg">
            <!-- <template #icon><UserOutlined /></template> -->
          </a-avatar>
          <span class="user-name">{{ userInfo.username }}<DownOutlined /></span>
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
const theme = appStore.theme
const userInfo = userStore.userInfo
const show = ref(false)
const activeKey = ref('1')
</script>

<style lang="less" scoped>
.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  .api-text,
  .notice {
    font-size: 16px;
    margin: 0 5px;
    cursor: pointer;
  }
  .user-info {
    cursor: pointer;
    .user-avatar {
      margin-left: 10px;
    }
    .user-name {
      margin-left: 10px;
    }
  }
  .header-right {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
  }
}
.light.layout-header {
  background: @light-theme-header;
  border: 1px solid #eee;
  color: hsla(0, 0%, 100%, 0.85);
  .api-text,
  .notice,
  .user-name {
    color: hsla(0, 0%, 100%, 0.85);
  }
}
.dark.layout-header {
  background: @dark-theme-header;
  .api-text,
  .notice,
  .user-name {
    color: hsla(0, 0%, 100%, 0.85);
  }
}
</style>
