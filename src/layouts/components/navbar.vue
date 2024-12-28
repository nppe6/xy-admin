<script setup lang="ts">
import menu from '@/store/menu'
import user from '@/store/user'
import utils from '@/utils'
import { ref } from 'vue'

const userStore = user()
const menuStore = menu()
let isFullScreen = ref(false)

const fullScreen = () => {
  isFullScreen.value ? document.exitFullscreen() : document.documentElement.requestFullscreen()
  isFullScreen.value = !isFullScreen.value
}
</script>

<template>
  <div class="bg-white dark:bg-[#151518] p-4 flex justify-between items-center">
    <div class="flex items-center" @click="menuStore.toggleState()">
      <i class="fas fa-indent pr-4 cursor-pointer" v-if="menuStore.menusClose"></i>
      <i class="fas fa-outdent pr-4 cursor-pointer" v-else></i>
      <el-breadcrumb separator="/" class="dark:text-white">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>编辑器</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="flex justify-center items-center gap-4">
      <div class="flex justify-center items-center gap-4">
        <i class="fas fa-sun text-[22px] text-gray-600 dark:text-white cursor-pointer"></i>
        <i
          v-if="!isFullScreen"
          class="fas fa-expand text-[22px] text-gray-600 dark:text-white cursor-pointer"
          @click="fullScreen()"></i>
        <i
          v-else
          class="fas fa-compress text-[22px] text-gray-600 dark:text-white cursor-pointer"
          @click="fullScreen()"></i>
      </div>
      <div>
        <el-dropdown trigger="click">
          <img :src="userStore.info?.avatar" alt="" class="w-10 h-10 rounded-full object-cover" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>首页</el-dropdown-item>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item @click="utils.user.logout()">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div>
        <span class="text-[16px] text-gray-600 dark:text-white truncate max-w-[8ch]">{{ userStore.info?.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
