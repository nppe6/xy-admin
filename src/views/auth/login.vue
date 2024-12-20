<script setup lang="ts">
import { axiosLogin } from '@/apis/user'
import validate from '@/plugins/validate'
import { store } from '@/utils'
import { useRouter } from 'vue-router'
const { Form, Field, ErrorMessage } = validate

const router = useRouter()

const Schema = validate.yup.object({
  username: validate.yup.string().required().email().label('账号'),
  password: validate.yup
    .string()
    .required()
    .min(6, '密码长度最小不少于6个字符')
    .label('密码')
})

const onSubmit = async (values: Record<string, any>) => {
  const {
    data: { token }
  } = await axiosLogin(values)

  store.set('token', {
    expire: 1000,
    token
  })

  router.push({ name: 'home' })
}
</script>

<script lang="ts">
export default {
  route: { name: 'login', meta: { guest: true } }
}
</script>

<template>
  <div class="login-content">
    <Form
      class="login-form"
      @submit="onSubmit"
      :validation-schema="Schema">
      <h2 class="login-title">通用后台系统脚手架</h2>
      <div class="mt-12">
        <div class="relative">
          <Field
            name="username"
            value="admin@123.com"
            type="text"
            placeholder="请输入邮箱账号"
            class="login-input" />

          <ErrorMessage
            class="text-sm text-red-800 absolute -bottom-5 left-2"
            name="username"
            as="div" />
        </div>

        <div class="relative">
          <Field
            name="password"
            value="admin888"
            type="password"
            placeholder="请输入账号密码"
            class="login-input mt-6" />

          <ErrorMessage
            class="text-sm text-red-800 absolute -bottom-5 left-2"
            name="password"
            as="div" />
        </div>
      </div>

      <button class="login-btn">登录</button>

      <div class="mt-6 flex justify-center items-center">
        <p class="login-info">还没有账号？前往注册 ~</p>
      </div>
    </Form>
  </div>
</template>

<style scoped lang="scss">
.login-content {
  @apply bg-[#F0F0F1] h-screen flex justify-center items-center p-4;

  .login-form {
    @apply w-[416px] h-[460px] bg-white border shadow-sm rounded-md p-12;

    .login-title {
      @apply text-center text-gray-700 font-semibold text-[20px];
    }

    .login-input {
      @apply border-none bg-[#F0F0F1] w-full py-3 pl-4 outline-none rounded-lg placeholder:text-sm;
    }

    .login-btn {
      @apply mt-12 w-full border bg-gray-900 border-gray-900 py-3 text-white rounded-lg flex justify-center items-center;
    }

    .login-info {
      @apply text-blue-700 text-sm cursor-pointer hover:text-blue-600 hover:underline underline-offset-1;
    }
  }
}
</style>
