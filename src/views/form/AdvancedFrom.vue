<template>
  <div class="w-full background-f">
    <a-card title="仓库管理" :bordered="false">
      <WoreHouse ref="worehouse"></WoreHouse>
    </a-card>
    <a-card title="任务管理" :bordered="false">
      <TaskForm ref="taskForm"></TaskForm>
    </a-card>
    <a-card title="成员管理" :bordered="false">
      <a-table :columns="columns" :data-source="dataSource" :pagination="false">
        <template v-for="col in ['name', 'age', 'address']" #[col]="{ text, record }" :key="col">
          <div>
            <a-input
              v-if="editableData[record.key]"
              v-model:value="editableData[record.key][col]"
              style="margin: -5px 0"
            />
            <template v-else>{{ text }}</template>
          </div>
        </template>
        <template #operation="{ record }">
          <div class="editable-row-operations">
            <span v-if="editableData[record.key]">
              <span v-if="!record.isNew">
                <a class="r-1" @click="save(record.key)">保存</a>
                <a @click="cancel(record.key)">取消</a>
              </span>
              <span v-else>
                <a class="r-1" @click="save(record.key)">添加</a>
                <a @click="remove(record.key)">删除</a>
              </span>
            </span>
            <span v-else>
              <a class="r-1" @click="edit(record.key)">编辑</a>
              <a-popconfirm title="是否要删除此行？" @confirm="delFn(record.key)">
                <a>删除</a>
              </a-popconfirm>
            </span>
          </div>
        </template>
      </a-table>
      <a-button
        style="width: 100%; margin-top: 16px; margin-bottom: 8px"
        type="dashed"
        @click="newMember"
      >
        <template #icon>
          <PlusOutlined />
        </template>
        新增成员
      </a-button>
    </a-card>
    <div class="footer-bar flex flex-end">
      <a-button type="primary" style="margin-right: 10px;" @click="handSubmit" :loading="loading">提交</a-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, UnwrapRef, reactive, computed, toRaw } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue'
import { cloneDeep } from 'lodash-es';
import WoreHouse from './components/Worehouse.vue';
import TaskForm from './components/TaskForm.vue';
import { message } from 'ant-design-vue'
interface DataItem {
  key: string;
  name: string;
  age: number | undefined;
  address: string;
  isNew?: boolean
}
const columns = [
  {
    title: '成员姓名',
    dataIndex: 'name',
    width: '25%',
    slots: { customRender: 'name' },
  },
  {
    title: '年龄',
    dataIndex: 'age',
    width: '15%',
    slots: { customRender: 'age' },
  },
  {
    title: '所属部门',
    dataIndex: 'address',
    width: '40%',
    slots: { customRender: 'address' },
  },
  {
    title: '操作',
    dataIndex: 'operation',
    slots: { customRender: 'operation' },
  },
];

const data: DataItem[] = [
  {
    key: '1',
    name: '小红',
    age: 18,
    address: '开发部'
  },
  {
    key: '2',
    name: '张晓丽',
    age: 29,
    address: 'ui设计'
  },
  {
    key: '3',
    name: 'Anxure',
    age: 22,
    address: '前端开发组'
  },
];
const dataSource = ref(data);
const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});
const count = computed(() => dataSource.value.length + 1)
const loading = ref(false)
const worehouse = ref()
const taskForm = ref()
const edit = (key: string) => {
  editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
};
const save = (key: string) => {
  const { name, age, address } = editableData[key]
  if (!name || !age || !address) {
    message.error('请填写完整成员信息。')
    return
  }
  Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key], { isNew: false });
  delete editableData[key];
};
const cancel = (key: string) => {
  delete editableData[key];
};
const delFn = (key: string) => {
  dataSource.value = dataSource.value.filter(item => item.key !== key)
}
const remove = (key: string) => {
  dataSource.value = dataSource.value.filter(item => item.key !== key)
}
const newMember = () => {
  dataSource.value.push(
    {
      key: `${count.value}`,
      name: '',
      age: undefined,
      address: '',
      isNew: true
    }
  )
  editableData[dataSource.value[dataSource.value.length - 1].key] = cloneDeep(dataSource.value.filter(item => dataSource.value[dataSource.value.length - 1].key === item.key)[0]);
}
const handSubmit = () => {
  loading.value = true
  // console.log(worehouse.value.formRef.validate())
  // console.log('提交')
  const worehouseForm = new Promise((resolve, reject) => {
    console.log(toRaw(worehouse.value))
    worehouse.value.formRef.validate()
      .then(values => {
        resolve(values)
      })
      .catch(error => {
        reject(error)
      })
  })
  const taskFormSubmit = new Promise((resolve, reject) => {
    taskForm.value.formRef.validate()
      .then(values => {
        resolve(values)
      })
      .catch(error => {
        reject(error)
      })
  })
  loading.value = true
  Promise.all([worehouseForm, taskFormSubmit])
    .then(values => {
      loading.value = false
      const formData = Object.assign(values, { user: toRaw(dataSource.value) })
      message.info('请打开控制台查看输出值')
      console.log(formData)
    })
    .catch(err => {
      loading.value = false
      console.log(err)
    })
}
</script>

<style scoped>
</style>