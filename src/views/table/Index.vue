<template>
  <div class="w-full background-f">
    <a-table
      :dataSource="dataList"
      :columns="columns"
      :loading="loading"
      :pagination="false"
      :row-selection="rowSelection"
      :rowKey="rowKey"
    />
    <div class="center t-4 p-t-3">
      <a-pagination
        ref="paginationElem"
        show-quick-jumper
        show-size-changer
        :current="pageNum"
        :show-total="(total:number | string) => `共 ${total} 条`"
        :pageSize="pageSize"
        :pageSizeOptions="['10', '20', '30', '40', '50']"
        :total="totalLength"
        @change="pageChange"
        @showSizeChange="pageSizeChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useTableSetting from '@/hooks/useTableSetting'
import { getTableList } from '@/api/table'
import { onMounted } from 'vue'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: '电话号码',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: '职业',
    dataIndex: 'profession',
    key: 'profession'
  }
]
const {
  dataList,
  pageNum,
  pageSize,
  totalLength,
  pageChange,
  pageSizeChange,
  setAjaxFunc,
  getNewsList,
  loading,
  rowSelection,
  rowKey
} = useTableSetting()
setAjaxFunc(getTableList)

onMounted(() => {
  getNewsList()
})
</script>

<style scoped lang="less"></style>
