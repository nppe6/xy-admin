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
  },
  {
    title: '首页'
  },
  {
    title: '编辑器'
  }
])
</script>

<template>
  <div
    class="history-link bg-gray-50 px-4 shadow-sm border-t border-b overflow-auto">
    <div class="hidden my-2 md:flex gap-2 justify-start items-center">
      <a
        href="#"
        v-for="(ele, index) of links"
        :key="index"
        class="px-3 py-2 bg-white dark:bg-[#151518] rounded-md text-sm text-nowrap text-gray-800 dark:text-white">
        <span>{{ ele.title }}</span>
        <i class="fas fa-xmark ml-2"></i>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.history-link {
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  // 滚动条轨道
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 2px;
  }
  // 小滑块
  &::-webkit-scrollbar-thumb {
    // background: #c7c9cc;
    border-radius: 10px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: #c7c9cc;
  }
}
</style>
