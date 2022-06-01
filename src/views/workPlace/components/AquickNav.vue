<template>
  <a-card title="快捷导航">
     <a-card-grid v-for="item in quickNav" :key="item.title" style="width: 33.33%">
       <div class="quick-nav-title flex column center">
        <svg class="icon auto" aria-hidden="true" style="font-size: 18px">
          <use :xlink:href="`${item.icon}`"></use>
        </svg>
        <a class="t-1 text-gray">{{ item.title }}</a>
      </div>
     </a-card-grid>
  </a-card>
</template>

<script lang="ts" setup>
import { quickNav } from './data'
</script>
