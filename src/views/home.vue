<script setup lang="ts"></script>

<template>
  <div class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center">
    <img src="/src/assets/image/01.jpg" alt="" class="w-36 h-36 object-cover rounded-full border-8 border-white mb-6" />
    <div>
      <router-link :to="{ name: 'admin-home' }" class="xy-button">后台管理</router-link>
      <router-link :to="{ name: 'login' }" class="xy-button ml-3 xy-danger">用户登录</router-link>
    </div>
    <div class="text-gray-200 text-md font-mono drop-shadow-md mt-6">Never、Say never 日益努力、而后风生水起</div>
  </div>
</template>

<script lang="ts">
export default {
  route: { name: 'home' },
}
</script>

<style scoped></style>
