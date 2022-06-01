<template>
  <div class="w-full h-full background-f">
    <div class="form-content w-full p-t-5">
      <a-form
        ref="formRef"
        :model="formState"
        :rules="rules"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 17 }"
      >
        <a-form-item ref="name" label="标题" name="name">
          <a-input v-model:value="formState.name" placeholder="给目标起个名字" />
        </a-form-item>
        <a-form-item ref="date" label="起止时间" name="date">
          <a-range-picker :format="dateFormat" v-model:value="formState.date" />
        </a-form-item>
        <a-form-item ref="desc" label="目标描述" name="desc">
          <a-textarea :rows="4" placeholder="请输入目标描述" v-model:value="formState.desc" />
        </a-form-item>
        <a-form-item ref="standard" label="衡量标准" name="standard">
          <a-textarea :rows="4" placeholder="请输入衡量标准" v-model:value="formState.standard" />
        </a-form-item>
        <a-form-item ref="client" label="客户" name="client">
          <a-input v-model:value="formState.client" placeholder="请描述你的客户" />
        </a-form-item>
        <a-form-item ref="inviter" label="邀请人" name="inviter">
          <a-input v-model:value="formState.inviter" placeholder="请输入邀请人" />
        </a-form-item>
        <a-form-item ref="sex" label="性别" name="sex">
          <a-radio-group v-model:value="formState.sex">
            <a-radio value="1">男</a-radio>
            <a-radio value="2">女</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item ref="type" label="邀请方式" name="type">
          <a-checkbox-group v-model:value="formState.type">
            <a-checkbox value="1" name="type">线上</a-checkbox>
            <a-checkbox value="2" name="type">第三方</a-checkbox>
            <a-checkbox value="3" name="type">线下</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit">提交</a-button>
          <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">

</script>

<script lang="ts" setup>
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { reactive, ref, toRaw } from 'vue';
// import { Moment } from 'moment';
import { message } from 'ant-design-vue'
interface FormState {
  name: string;
  date:[];
  standard: string;
  type: string[];
  desc: string
  inviter: string
  sex: string | undefined
  client: string
}
const formRef = ref();
const dateFormat = ref('YYYY-MM-DD');
const formState = reactive<FormState>({
  name: '',
  date: [],
  standard: '',
  type: [],
  desc: '',
  inviter: '',
  sex: undefined,
  client: ''
});
const rules = {
  name: [
    { required: true, message: '请给目标取个名字', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在3-5个字符', trigger: 'blur' }
  ],
  date: [
    {
      required: true,
      message: '请选择起止时间',
      trigger: 'change',
      type: 'array'
    }
  ],
  standard: [{ required: true, message: '请输入衡量标准', trigger: 'blur' }],
  type: [
    {
      type: 'array',
      required: true,
      message: '请选择邀请方式',
      trigger: 'change'
    }
  ]
};
const onSubmit = () => {
  formRef.value
    .validate()
    .then((values: { date: [any, any]; }) => {
      const [startTime, endTime] = values.date
      const start = startTime.format(dateFormat.value)
      const end = endTime.format(dateFormat.value)
      const submitFormData = Object.assign(toRaw(values), {
        date: [start, end]
      })
      console.log('%cBaseForm.vue line:109 object', 'color: #007acc;', submitFormData);
      message.info('请打开控制台查看输出值')
    })
    .catch((error: ValidateErrorEntity<FormState>) => {
      console.log('error', error);
    });
};
const resetForm = () => {
  formRef.value.resetFields();
};
</script>

<style lang="less" scoped>
</style>