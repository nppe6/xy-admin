<script setup lang="ts"></script>

<template>
  <div class="bg-[#F0F0F1] h-screen flex justify-center items-center p-4">
    <div class="w-[416px] h-[460px] bg-white border shadow-sm rounded-md p-12">
      <h2 class="text-center text-gray-700 font-semibold text-[20px]">
        通用后台系统脚手架
      </h2>
      <div class="mt-12">
        <input
          type="text"
          placeholder="请输入邮箱账号"
          class="border-none bg-[#F0F0F1] w-full py-3 pl-4 outline-none rounded-lg placeholder:text-sm" />

        <input
          type="text"
          placeholder="请输入账号密码"
          class="border-none bg-[#F0F0F1] w-full py-3 pl-4 outline-none rounded-lg placeholder:text-sm mt-6" />
      </div>

      <button
        class="mt-12 w-full border bg-gray-900 border-gray-900 py-3 text-white rounded-lg flex justify-center items-center">
        登录
      </button>

      <div class="mt-6 flex justify-center items-center">
        <p
          class="text-blue-700 text-sm cursor-pointer hover:text-blue-600 hover:underline underline-offset-1">
          还没有账号？前往注册 ~
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
