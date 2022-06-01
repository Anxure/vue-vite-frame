
<template>
  <div class="workplace">
    <div class="workplace-header">
      <a-header></a-header>
    </div>
    <div class="workplace-content overflow-hidden t-b-3">
      <div class="flex">
        <div class="w-7 r-4">
          <a-project :loading="loading"></a-project>
          <a-dynamic :loading="loading"></a-dynamic>
        </div>
        <div class="w-3">
          <a-quick-nav :loading="loading"></a-quick-nav>
          <a-img :loading="loading"></a-img>
          <a-group :loading="loading"></a-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AHeader from './components/Aheader.vue'
import AProject from './components/Aproject.vue'
import ADynamic from './components/Adynamic.vue'
import AQuickNav from './components/AquickNav.vue'
import AGroup from './components/Agroup.vue'
import AImg from './components/Aimg.vue'

const loading = ref<boolean>(true)
setTimeout(() => {
  loading.value = false
}, 1000)
</script>
