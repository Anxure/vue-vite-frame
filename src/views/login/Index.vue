<template>
  <div class="login-container">
    <div class="login-form-box flex h-full p-p-3">
      <div class="w-5 flex column flex-center relative align-item-center">
        <div class="title-container absolute font-bold color-f">{{ loginData.formTitle }}</div>
        <div class="center">
          <img class="w-5" :src="backImg" :alt="loginData.formTitle" />
        </div>
        <div class="t-4 login-info color-f">基于vue3.0、TypeScript、Vite、pinia、ant-design-vue开发的后台管理系统</div>
        <div class="t-4 login-info color-f">
          @github:
          <a
            class="color-f"
            target="_blank"
            href="https://github.com/Anxure/vue-base-frame"
          >https://github.com/Anxure/vue-vite-frame</a>
        </div>
        <div class="t-4 login-info color-f">@author: Anxure</div>
      </div>
      <div class="w-5 flex flex-center align-item-center">
        <a-form
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 20 }"
          :model="loginData.formData"
          class="login-form"
          @submit="handleLogin"
        >
          <div class="font-bold color-f form-title b-3">登录：</div>
          <a-form-item v-bind="validateInfos.username">
            <a-input size="large" v-model:value="loginData.formData.username" placeholder="默认账号为admin/test" />
          </a-form-item>
          <a-form-item v-bind="validateInfos.password">
            <a-input-password
              size="large"
              v-model:value="loginData.formData.password"
              placeholder="默认密码为123456"
              :visibilityToggle="false"
            />
          </a-form-item>
          <a-form-item>
            <div class="flex space-between">
              <a-checkbox v-model:checked="loginData.rememberMe">
                <span class="color-f">记住我</span>
              </a-checkbox>
              <a class="color-f">忘记密码？</a>
            </div>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 20, offset: 0 }">
            <a-button
              type="primary"
              size="large"
              class="submit-btn"
              html-type="submit"
              :loading="loginLoading"
            >登录</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, toRaw, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Form } from 'ant-design-vue'
import { login } from '@/api/user'
import type { LoginParams } from '@/api/model/userModel'
import { setStore } from '@/utils/storage'
import { useUserStore, useAppStore } from '@/store'
import backImg from '@/assets/image/login/login-box-bg.svg'
import { useBackToIndex } from '@/hooks/useBackToIndex'
interface DataProps {
  formTitle: string
  rememberMe: boolean
  formData: LoginParams
}
const loginData = reactive<DataProps>({
  formTitle: 'vue-base-frame',
  rememberMe: false,
  formData: {
    username: '',
    password: ''
  }
})
const loginLoading = ref(false)
const router = useRouter()
const userStore = useUserStore()
const appStore = useAppStore()
loginData.formTitle = appStore.title as string
const useForm = Form.useForm

const { validate, validateInfos } = useForm(
  loginData.formData,
  reactive({
    username: [
      {
        required: true,
        message: '请输入用户名'
      }
    ],
    password: [
      {
        required: true,
        message: '请输入密码'
      }
    ]
  })
)
const handleLogin = (e: { preventDefault: () => void }) => {
  loginLoading.value = true
  e.preventDefault()
  validate()
    .then(async () => {
      const { result, code } = await login(toRaw(loginData.formData))
      loginLoading.value = false
      if (code === 0) {
        setStore('userInfo', result)
        setStore('admin_token', 'dwafewfwefwgergergergergergerg')
        userStore.userInfo = result
        userStore.$patch({'userInfo': result})
        const { userMenu } = await userStore.getMenu({ id: result.id })
        console.log(userMenu, 'userMenu')
        const path = useBackToIndex()
        router.push({ path })
      }
    })
    .catch(err => {
      loginLoading.value = false
      console.log('error', err)
    })
}
</script>
<style lang="less" scoped>
.login-container {
  overflow: auto;
  height: 100vh;
  background-image: url("../../assets/image/login/login.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .login-form-box {
    max-width: 1600px;
    margin: 0 auto;
    .title-container {
      font-size: 35px;
      top: 30px;
    }
    .login-info {
      font-size: 18px;
    }
    .login-form {
      width: 368px;
      .submit-btn {
        width: 100%;
      }
      .form-title {
        font-size: 24px;
      }
    }
  }
}
</style>
