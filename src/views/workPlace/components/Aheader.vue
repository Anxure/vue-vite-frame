<template>
  <a-card>
    <div class="flex align-item-center">
      <a-avatar class="user-avatar" :size="72" :src="headerImg"></a-avatar>
      <div class="user-text">
        <h3>早安，Anxure，开始您一天的工作吧！</h3>
        <span class="text-gray">今日天气：多云， 温度：19℃ - 35℃</span>
      </div>
      <div class="user-work flex  flex-end flex-1">
          <div class="work-item flex column">
            <span class="text-gray">待办</span>
            <span>6/10</span>
          </div>
          <div class="work-item flex column r-12 l-12">
            <span  class="text-gray">项目</span>
            <span>18</span>
          </div>
          <div class="work-item flex column r-4">
            <span  class="text-gray">团队</span>
            <span>300</span>
          </div>
      </div>
    </div>
  </a-card>
</template>

<script lang="ts" setup>
import headerImg from '@/assets/image/avatar.png';
</script>

<style scoped lang="less">
.user-text{
  margin-left: 20px;
  h3{
    font-weight: bold;
  }
}
.work-item{
  span{
    font-size:18px;
  }
  span:first-child{
    font-size: 16px;
  }

}
</style>