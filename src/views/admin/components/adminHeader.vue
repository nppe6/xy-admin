<script setup lang="ts"></script>

<template>
  <el-card
    shadow="hover"
    :body-style="{ padding: '20px' }"
    v-for="n of 4">
    <template #header>
      <div class="flex justify-between items-center">
        <span>用户数</span>
        <el-tag
          type="danger"
          size="small"
          effect="dark"
          @close=""
          >月</el-tag
        >
      </div>
    </template>
    <section class="flex justify-between items-center">
      <span class="text-3xl">$ 8099</span>
      <i class="fab fa-bitcoin text-5xl text-blue-600"></i>
    </section>
    <section class="flex justify-between items-center text-sm font-medium mt-4">
      <span>总人数</span>
      <span>299843人</span>
    </section>
  </el-card>
</template>

<style scoped lang="scss"></style>
