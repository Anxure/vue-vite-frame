<template>
  <a-card title="项目">
    <template #extra><a href="#">更多</a></template>
    <a-card-grid v-for="item in projectInfo" :key="item.title" style="width: 33.33%">
      <div class="card-title flex">
        <!-- <svg class="icon" aria-hidden="true" style="font-size: 18px">
          <use :xlink:href="`#${item.icon}`"></use>
        </svg> -->
        <IconFont :type="item.icon" font-size="25px"></IconFont>
        <a>{{ item.title }}</a>
      </div>
      <div class="card-content mt-15px">
        <div class="text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">{{ item.content }}</div>
      </div>
      <div class="card-info flex justify-between mt-15px text-gray-500">
        <span>{{item.user}}</span>
        <span>{{item.date}}</span>
      </div>
    </a-card-grid>
  </a-card>
</template>

<script lang="ts" setup>
import { projectInfo } from './data';
</script>

<style scoped lang="less">
.card-title {
  a {
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    margin-left: 8px;
    &:hover {
      color: var(--colorPrimary);
    }
  }
}

</style>