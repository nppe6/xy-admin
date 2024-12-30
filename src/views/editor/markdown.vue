<script setup lang="ts">
import MarkEditor from '@/components/markdown/markdownEditor.vue'
import { ref } from 'vue'
const content = ref('默认文章数据')
</script>

<template>
  <div>
    <MarkEditor v-model="content" placeholder="请输入内容" />
  </div>
</template>

<style scoped lang="scss"></style>
