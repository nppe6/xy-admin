<script setup lang="ts">
import Editor from '@/components/markdown/editor.vue'
import { ref } from 'vue'
const content = ref('默认文章数据')
</script>

<template>
  <div>
    <Editor v-model="content" placeholder="请输入内容" />
    {{ content }}
  </div>
</template>

<style scoped lang="scss"></style>
