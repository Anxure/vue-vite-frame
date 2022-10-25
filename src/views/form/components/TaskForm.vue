<template>
  <a-form @submit="handleSubmit" layout="vertical" :rules="rules" ref="formRef" :model="formState">
    <a-row justify="space-between">
      <a-col :span="7">
        <a-form-item label="任务名：" ref="taskName" name="taskName">
          <a-input v-model:value="formState.taskName" placeholder="请输入任务名" />
        </a-form-item>
      </a-col>
      <a-col :span="7">
        <a-form-item label="任务描述：" ref="taskDesc" name="taskDesc">
          <a-input v-model:value="formState.taskDesc" placeholder="请输入任务描述" />
        </a-form-item>
      </a-col>
      <a-col :span="7">
        <a-form-item label="执行人：" ref="taskExecutor" name="taskExecutor">
          <a-select v-model:value="formState.taskExecutor" placeholder="请选择执行人">
            <a-select-option value="云破天">云破天</a-select-option>
            <a-select-option value="佛子">佛子</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row justify="space-between">
      <a-col :span="7">
        <a-form-item label="责任人：" ref="taskPerson" name="taskPerson">
          <a-select v-model:value="formState.taskPerson" placeholder="请选择责任人">
            <a-select-option value="王晓丽">王晓丽</a-select-option>
            <a-select-option value="李军">李军</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="7">
        <a-form-item label="提醒日期：" ref="taskTime" name="taskTime">
          <a-range-picker
            style="width: 100%"
            :format="dateFormat"
            v-model:value="formState.taskTime"
          />
        </a-form-item>
      </a-col>
      <a-col :span="7">
        <a-form-item label="任务类型：" ref="taskType" name="taskType">
          <a-select v-model:value="formState.taskType" placeholder="请选择任务类型">
            <a-select-option value="定时执行">定时执行</a-select-option>
            <a-select-option value="周期执行">周期执行</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts" setup>
import { ValidateErrorEntity } from 'ant-design-vue/lib/form/interface';
import { reactive, UnwrapRef, ref, toRaw } from 'vue';
// import { Moment } from 'moment';

interface FormState {
  taskName: string;
  taskDesc: string;
  taskExecutor: string | undefined;
  taskPerson: string | undefined;
  taskTime: [];
  taskType: string | undefined;
}
const formRef = ref();
const dateFormat = 'YYYY-MM-DD';
const formState: UnwrapRef<FormState> = reactive({
  taskName: '',
  taskDesc: '',
  taskExecutor: undefined,
  taskPerson: undefined,
  taskTime: [],
  taskType: undefined
});
const rules = {
  taskName: [
    {
      required: true,
      message: '请填写任务名',
      trigger: 'blur'
    }
  ],
  taskDesc: [
    {
      required: true,
      message: '请填写任务描述',
      trigger: 'blur'
    }
  ],
  taskExecutor: [
    {
      required: true,
      message: '请选择任务执行人',
      trigger: 'change'
    }
  ],
  taskPerson: [
    {
      required: true,
      message: '请选择责任人',
      trigger: 'change'
    }
  ],
  taskTime: [
    {
      required: true,
      message: '请选择提醒日期',
      trigger: 'change',
      type: 'array'
    }
  ],
  taskType: [
    {
      required: true,
      message: '请选择任务类型',
      trigger: 'change'
    }
  ]
};
const handleSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('values', formState, toRaw(formState));
    })
    .catch((error: ValidateErrorEntity<FormState>) => {
      console.log('error', error);
    });
};
defineExpose({formRef})
</script>

<style scoped>
</style>