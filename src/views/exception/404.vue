<template>
  <div class="error-content flex align-item-center flex-center column">
    <div class="error-icon">
      <svg class="icon" aria-hidden="true" style="font-size: 200px">
        <use xlink:href="#icon-404" />
      </svg>
    </div>
    <div class="title">抱歉，页面消失了</div>
    <a-button class="t-3" type="primary" @click="goToHome">返回首页</a-button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useBackToIndex } from '@/hooks/useBackToIndex'

const router = useRouter()
const path = useBackToIndex()
function goToHome() {
  router.push({ path })
}
</script>

<style lang="less" scoped>
.error-content {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .title {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>