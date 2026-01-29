<script setup lang="ts">
  const modelChecked = defineModel<boolean>('checked', { default: false })
</script>

<template>
  <ATooltip :title="`${modelChecked ? '关闭' : '开启'}深色模式`">
    <ASwitch
      v-model:checked="modelChecked"
      :class="{ 'with-sun': !modelChecked, 'with-moon': modelChecked }"
    />
  </ATooltip>
</template>

<style lang="less" scoped>
  .ant-switch :deep(.ant-switch-handle::before) {
    background-repeat: no-repeat;
  }
  .ant-switch.with-sun :deep(.ant-switch-handle::before) {
    background-size: 14px;
    background-position: left 2px center;
    background-image: url(./assets/images/sun.svg);
  }
  .ant-switch.with-moon :deep(.ant-switch-handle::before) {
    background-size: 14px;
    background-position: right 1px center;
    background-image: url(./assets/images/moon.svg);
  }
</style>
