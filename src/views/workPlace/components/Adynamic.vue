<template>
  <a-card title="动态" class="dynamic-list t-4">
    <template #extra><a href="#">更多</a></template>
    <a-list item-layout="horizontal" :data-source="dynamicInfo">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta>
            <template #avatar>
              <IconFont :type="item.icon" font-size="30px"></IconFont>
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
    color: @colorPrimary;
    margin-right:3px;
  }
}
</style>