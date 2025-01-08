<script setup lang="ts">
import { getArticleApi } from '@/apis/article'

const { data } = await getArticleApi()
const articles = ref(data)
</script>

<template>
  <div>
    <ul>
      <li v-for="article of articles" :key="article.id">
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss"></style>
