<template>
  <a-card title="团队" class="t-4">
    <ul class="flex">
      <li style="width: 25%" v-for="(item,index) in groupData" :key="index"><a >{{item}}</a></li>
    </ul>
  </a-card>
</template>

<script lang="ts" setup>
const groupData = ['Anxure', '摸鱼组', '躺平组', '开发组', '架构组']
</script>

<style scoped>

</style>