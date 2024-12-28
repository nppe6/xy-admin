<script setup lang="ts">
import menu from '@/store/menu'

const menuStore = menu()
const route = menuStore.route
</script>

<template>
  <el-breadcrumb separator="/" class="dark:text-white">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <template v-if="route">
      <el-breadcrumb-item v-for="(r, index) of route.matched" :key="index">{{ r.meta.menu?.title }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<style scoped lang="scss"></style>
