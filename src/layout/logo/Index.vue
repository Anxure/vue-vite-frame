<template>
  <div class="logo">{{ title }}</div>
</template>

<script lang="ts" setup>
const title = import.meta.env.VITE_APP_TITLE
</script>

<style scoped lang="less">
.logo {
  height: 32px;
  margin: 16px;
  font-size: 30px;
  text-align: center;
  line-height: 32px;
  font-weight: bold;
}
.dark .logo {
  color: #fff;
}
</style>
