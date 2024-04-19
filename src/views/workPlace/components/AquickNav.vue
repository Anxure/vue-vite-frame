<template>
  <a-card title="快捷导航">
     <a-card-grid v-for="item in quickNav" :key="item.title" style="width: 33.33%">
       <div class="quick-nav-title flex flex-col flex-items-center">
        <IconFont :type="item.icon" font-size="20px"></IconFont>
        <a class="mt-10px text-gray">{{ item.title }}</a>
      </div>
     </a-card-grid>
  </a-card>
</template>

<script lang="ts" setup>
import { quickNav } from './data'
</script>
