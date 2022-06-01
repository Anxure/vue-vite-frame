<template>
  <a-form @submit="handleSubmit" layout="vertical" :rules="rules" ref="formRef" :model="formState">
    <a-row justify="space-between">
      <a-col :span="7">
        <a-form-item label="仓库名：" ref="name" name="name">
          <a-input v-model:value="formState.name" placeholder="请输入仓库名" />
        </a-form-item>
      </a-col>
      <a-col :span="7">
        <a-form-item label="仓库域名：" ref="url" name="url">
          <a-input
            addonBefore="http://"
            addonAfter=".com"
            v-model:value="formState.url"
            placeholder="请输入仓库域名"
          />
        </a-form-item>
      </a-col>
      <a-col :span="7">
        <a-form-item label="仓库管理员：" ref="owner" name="owner">
          <a-select v-model:value="formState.owner" placeholder="请选择仓库管理员">
            <a-select-option value="云破天">云破天</a-select-option>
            <a-select-option value="佛子">佛子</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row justify="space-between">
      <a-col :span="7">
        <a-form-item label="审批人：" ref="approver" name="approver">
          <a-select v-model:value="formState.approver" placeholder="请选择审批员">
            <a-select-option value="王晓丽">王晓丽</a-select-option>
            <a-select-option value="李军">李军</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="7">
        <a-form-item label="生效日期：" ref="time" name="time">
          <a-range-picker style="width: 100%" :format="dateFormat" v-model:value="formState.time" />
        </a-form-item>
      </a-col>
      <a-col :span="7">
        <a-form-item label="仓库类型：" ref="type" name="type">
          <a-select v-model:value="formState.type" placeholder="请选择仓库类型">
            <a-select-option value="公开">公开</a-select-option>
            <a-select-option value="公开">私有</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts" setup>
import { ValidateErrorEntity } from 'ant-design-vue/lib/form/interface';
import { reactive, UnwrapRef, ref, toRaw, defineExpose } from 'vue';
// import { Moment } from 'moment';

interface FormState {
  name: string;
  url: string;
  owner: string | undefined;
  approver: string | undefined;
  time: [];
  type: string | undefined;
}
const formRef = ref();
const dateFormat = 'YYYY-MM-DD';
const formState: UnwrapRef<FormState> = reactive({
  name: '',
  url: '',
  owner: undefined,
  approver: undefined,
  time: [],
  type: undefined
});
const rules = {
  name: [
    {
      required: true,
      message: '请填写仓库名',
      trigger: 'blur'
    }
  ],
  url: [
    {
      required: true,
      message: '请填写仓库域名',
      trigger: 'blur'
    }
  ],
  owner: [
    {
      required: true,
      message: '请选择仓库管理员',
      trigger: 'change'
    }
  ],
  approver: [
    {
      required: true,
      message: '请选择审批人',
      trigger: 'change'
    }
  ],
  time: [
    {
      required: true,
      message: '请选择生效日期',
      trigger: 'change',
      type: 'array'
    }
  ],
  type: [
    {
      required: true,
      message: '请选择仓库类型',
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