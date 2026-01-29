<template>
  <div class="flex flex-col flex-justify-center flex-items-center w-full h-full bg-[var(--ant-colorBgContainer)]">
    <div class="error-icon">
      <IconFont type="icon-404" font-size="250px" ></IconFont>
    </div>
    <div class="text-[var(--ant-colorError)] font-bold text-16px">抱歉，页面消失了</div>
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