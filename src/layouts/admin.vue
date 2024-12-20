<script setup lang="ts"></script>
<template>
  <router-view></router-view>
</template>

<style scoped></style>

<script>
export default {
  route: { meta: { auth: true } }
}
</script>
