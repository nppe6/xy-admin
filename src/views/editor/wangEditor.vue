<script setup lang="ts">
import WangEditor from '@/components/wangEditor/wangEditor.vue'
import { ref } from 'vue'
const content = ref('<p>日益努力，而后风生水起</p>')
</script>

<template>
  <div>
    <WangEditor v-model:editContent="content" />
    <div class="bg-slate-200 mt-3 border p-3">{{ content }}</div>
  </div>
</template>

<style scoped lang="scss"></style>
