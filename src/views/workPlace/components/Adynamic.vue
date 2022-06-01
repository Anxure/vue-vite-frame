<template>
  <a-card title="动态" class="dynamic-list t-4">
    <template #extra><a href="#">更多</a></template>
    <a-list item-layout="horizontal" :data-source="dynamicInfo">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta>
            <template #avatar>
              <svg class="icon" aria-hidden="true" style="font-size: 18px">
                <use :xlink:href="`${item.icon}`"></use>
              </svg>
            </template>
            <template #title>
              <a>{{ item.user }}</a>
              <span v-html="item.title"></span>
            </template>
            <template #description>
              <p>{{ item.date }}</p>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </a-card>
</template>

<script lang="ts" setup>
import { dynamicInfo } from './data';
</script>

<style scoped lang="less">
.dynamic-list {
  :deep(a){
    color: @primary-color;
    margin-right:3px;
  }
}
</style>