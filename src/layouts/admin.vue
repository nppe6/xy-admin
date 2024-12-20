<script setup lang="ts">
import MenuComponents from '@/layouts/components/menu.vue'
</script>
<template>
  <div class="admin flex">
    <MenuComponents />
    <div class="admin-main"><router-view></router-view></div>
  </div>
</template>

<style scoped lang="scss">
.admin {
  .admin-main {
    @apply flex-grow bg-[#f6f6f8];
  }
}
</style>

<script lang="ts">
export default {
  route: { meta: { auth: true } }
}
</script>
