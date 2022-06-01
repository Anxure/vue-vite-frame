<template>
  <div class="multi-tab-box">
    <a-tabs
      v-model:activeKey="tabOptions.activeKey"
      type="editable-card"
      @edit="onEdit"
      hideAdd
      @tabClick="tabClick"
      :tabBarStyle="{ background: '#FFF', margin: 0, paddingLeft: '16px', paddingTop: '1px' }"
    >
      <a-tab-pane
        v-for="tab in tabOptions.pages"
        :key="tab.fullPath"
        :tab="tab.meta.title"
        :closable="tabOptions.pages.length > 1"
      ></a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { onBeforeRouteUpdate, RouteLocationNormalized, useRoute, useRouter, RouteMeta } from 'vue-router'

interface Page {
  meta: RouteMeta
  fullPath: string
}

interface TabOptions {
  pages: Array<Page>
  fullListPath: Array<string>
  activeKey: string
}
const tabOptions = reactive<TabOptions>({
  pages: [],
  fullListPath: [],
  activeKey: ''
})
const route = useRoute()
const router = useRouter()
createOption(route)
onBeforeRouteUpdate(to => {
  tabOptions.activeKey = to.fullPath
  createOption(to)
})
function createOption(to: RouteLocationNormalized) {
  if (tabOptions.fullListPath.indexOf(to.fullPath) < 0) {
    tabOptions.pages.push({ meta: to.meta, fullPath: to.fullPath })
    tabOptions.fullListPath.push(to.fullPath)
  }
}
function selectedLastPath() {
  tabOptions.activeKey = tabOptions.fullListPath[tabOptions.fullListPath.length - 1]
  router.push({ path: tabOptions.activeKey })

  console.log(tabOptions)
}
onMounted(() => {
  selectedLastPath()
})
function onEdit(targetKey: string) {
  remove(targetKey)
}
function tabClick(targetKey: string) {
  router.push({ path: targetKey })
}
function remove(targetKey: string) {
  tabOptions.pages = tabOptions.pages.filter(page => page.fullPath !== targetKey)
  tabOptions.fullListPath = tabOptions.fullListPath.filter(list => list !== targetKey)
  // 判断当前标签是否关闭，若关闭则跳转到最后一个还存在的标签页
  if (!tabOptions.fullListPath.includes(tabOptions.activeKey)) {
    selectedLastPath()
  }
}
</script>

<style lang="less" scoped>
.multi-tab-box {
  height: 40px;
}
</style>
