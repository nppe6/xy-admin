<script setup lang="ts">
import { reactive } from 'vue'

const links = reactive<{ title: string }[]>([
  {
    title: '首页'
  },
  {
    title: '编辑器'
  },
  {
    title: '404页面'
  },
  {
    title: 'markdown编辑器'
  }
])
</script>

<template>
  <div class="my-3 grid grid-flow-col gap-2 justify-start">
    <a
      href="#"
      v-for="(ele, index) of links"
      :key="index"
      class="px-3 py-2 bg-white dark:bg-[#151518] rounded-md text-sm text-gray-800 dark:text-white">
      <span>{{ ele.title }}</span>
      <i class="fas fa-xmark ml-2"></i>
    </a>
  </div>
</template>

<style scoped lang="scss"></style>
