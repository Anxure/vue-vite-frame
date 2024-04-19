<template>
  <div class="error-content flex flex-col flex-justify-center flex-items-center">
    <div class="error-icon">
      <IconFont type="icon-quanxian" font-size="250px" ></IconFont>
    </div>
    <div class="title">抱歉，你当前没有权限访问</div>
    <a-button class="mt-15px" type="primary" @click="goToHome">返回首页</a-button>
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
    color: #d80637;
    font-weight: 600;
  }
}
</style>