<template>
  <div class="h-8 flex items-center justify-center text-2xl font-bold text-white">{{ title }}</div>
</template>

<script lang="ts" setup>
const title = import.meta.env.VITE_APP_TITLE
</script>

<style scoped lang="less">

</style>
