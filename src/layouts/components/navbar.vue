<script setup lang="ts">
import Notification from '@/components/notification.vue'
import Breadcrumb from '@/components/breadcrumb.vue'
import menu from '@/store/menu'
import user from '@/store/user'
import utils from '@/utils'
import { ref } from 'vue'
import theme from '@/store/theme'
import { ThemeEnum } from '@/enum/themeEnum'

const userStore = user()
const menuStore = menu()
const themeStore = theme()
let isFullScreen = ref(false)

const fullScreen = () => {
  isFullScreen.value ? document.exitFullscreen() : document.documentElement.requestFullscreen()
  isFullScreen.value = !isFullScreen.value
}

const setDark = (type: ThemeEnum) => {
  themeStore.changeThemeType(type)
}
</script>

<template>
  <div class="bg-white dark:bg-[#151518] p-4 flex justify-between items-center">
    <div class="flex items-center" @click="menuStore.toggleState()">
      <i class="fas fa-indent pr-4 cursor-pointer" v-if="menuStore.menusClose"></i>
      <i class="fas fa-outdent pr-4 cursor-pointer" v-else></i>
      <Breadcrumb @click.stop class="hidden md:block" />
    </div>

    <div class="flex justify-center items-center gap-4">
      <div class="flex justify-center items-center gap-4">
        <i
          v-if="themeStore.themeType == ThemeEnum.THEME_LIGHT"
          class="fas fa-moon text-[22px] text-gray-600 dark:text-white cursor-pointer"
          @click="setDark(ThemeEnum.THEME_DARK)"></i>
        <i
          v-else
          class="fas fa-sun text-[22px] text-gray-600 dark:text-white cursor-pointer"
          @click="setDark(ThemeEnum.THEME_LIGHT)"></i>
        <i
          v-if="!isFullScreen"
          class="fas fa-expand text-[22px] text-gray-600 dark:text-white cursor-pointer"
          @click="fullScreen()"></i>
        <i
          v-else
          class="fas fa-compress text-[22px] text-gray-600 dark:text-white cursor-pointer"
          @click="fullScreen()"></i>
        <Notification />
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
