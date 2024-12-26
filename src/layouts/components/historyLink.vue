<script setup lang="ts">
import { IMenu } from '#/menu'
import menu from '@/store/menu'
const menuStore = menu()

const handleDele = (menu: IMenu) => {
  menuStore.removeHistoryMenu(menu)
}
</script>

<template>
  <div
    v-show="menuStore.historyMenu.length"
    class="history-link bg-gray-50 px-4 shadow-sm border-t border-b overflow-auto">
    <div class="hidden my-2 md:flex gap-2 justify-start items-center">
      <div
        v-for="(menu, index) of menuStore.historyMenu"
        :key="index"
        class="px-3 py-2 bg-white dark:bg-[#151518] rounded-md text-sm text-nowrap text-gray-800 dark:text-white"
        :class="{ 'text-white !bg-blue-600': $route.name == menu.route }">
        <router-link :to="{ name: menu.route }">{{ menu.title }}</router-link>
        <i class="fas fa-xmark ml-2 cursor-pointer" @click="handleDele(menu)"></i>
      </div>
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
