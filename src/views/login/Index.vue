<template>
  <div class="login-container">
    <div class="login-form-box flex h-full p-3%">
      <div class="w-50% flex flex-col flex-items-center relative flex-justify-center">
        <div class="title-container absolute font-bold color-#FFF">{{ loginData.formTitle }}</div>
        <div class="center">
          <img class="w-50%" :src="backImg" :alt="loginData.formTitle" />
        </div>
        <div class="mt-20px login-info color-#FFF">基于vue3.0、TypeScript、Vite、pinia、ant-design-vue开发的后台管理系统</div>
        <div class="mt-20px login-info color-#FFF">
          @github:
          <a
            class="color-#FFF"
            target="_blank"
            href="https://github.com/Anxure/vue-base-frame"
          >https://github.com/Anxure/vue-vite-frame</a>
        </div>
        <div class="mt-20px login-info color-#FFF">@author: Anxure</div>
      </div>
      <div class="w-50% flex flex-justify-center flex-items-center">
        <a-form
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 20 }"
          :model="loginData.formData"
          class="login-form"
          @submit="handleLogin"
        >
          <div class="font-bold color-#FFF form-title mb-15px">登录：</div>
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
            <div class="flex flex-justify-between">
              <a-checkbox v-model:checked="loginData.rememberMe">
                <span class="color-#FFF">记住我</span>
              </a-checkbox>
              <a class="color-#fff">忘记密码？</a>
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
import { useUserStore } from '@/store'
import backImg from '@/assets/image/login/login-box-bg.svg'
import { useBackToIndex } from '@/hooks/useBackToIndex'
interface DataProps {
  formTitle: string
  rememberMe: boolean
  formData: LoginParams
}
const loginData = reactive<DataProps>({
  formTitle: import.meta.env.VITE_APP_TITLE,
  rememberMe: false,
  formData: {
    username: '',
    password: ''
  }
})
const loginLoading = ref(false)
const router = useRouter()
const userStore = useUserStore()
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
