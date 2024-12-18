<script setup lang="ts">
import { getInfo } from './apis/user'

const info = async () => {
  const res = await getInfo()
  console.log('res: ', res.data.name)
}

info()
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
