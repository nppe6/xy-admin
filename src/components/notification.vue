<script setup lang="ts">
import { nextTick, ref } from 'vue'

const activeName = ref('message')
const show = ref(false)

nextTick(() => {
  document.documentElement.addEventListener('click', () => {
    show.value = false
  })
})
</script>

<template>
  <div class="notification">
    <i class="fas fa-bell text-[22px] text-gray-600 dark:text-white cursor-pointer" @click.stop="show = !show"></i>
    <el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
      <el-tab-pane label="系统通知" name="message">
        <a href="#">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis omnis ratione repudiandae quo natus,
          aperiam, maxime aut delectus id explicabo ad rem perspiciatis minima recusandae! Quasi, voluptatibus fuga?
          Doloremque, tempore.
        </a>
        <a href="#">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis omnis ratione repudiandae quo natus,
          aperiam, maxime aut delectus id explicabo ad rem perspiciatis minima recusandae! Quasi, voluptatibus fuga?
          Doloremque, tempore.
        </a>
        <a href="#">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis omnis ratione repudiandae quo natus,
          aperiam, maxime aut delectus id explicabo ad rem perspiciatis minima recusandae! Quasi, voluptatibus fuga?
          Doloremque, tempore.
        </a>
      </el-tab-pane>
      <el-tab-pane label="站内消息" name="site"> Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="scss">
.notification {
  @apply relative;
  .lists {
    @apply px-3 py-2 absolute top-12  right-[-100px] bg-white border shadow-md rounded-md z-20 w-[300px] text-sm;
    a {
      @apply truncate overflow-hidden block my-2 pb-2 border-b hover:underline hover:text-blue-400;
    }
  }
}
</style>
