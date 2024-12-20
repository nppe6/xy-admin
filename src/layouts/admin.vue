<script setup lang="ts"></script>
<template>
  <div class="flex">
    <div class="admin-menu">
      <div class="admin-menu-warp xy-menu-warp-fixed">1</div>
    </div>
    <div class="admin-main"><router-view></router-view></div>
  </div>
</template>

<style scoped lang="scss">
.admin-menu {
  @apply flex-shrink-0 w-[208px] bg-white min-h-screen;

  .admin-menu-warp {
    @apply text-gray-900;
  }
}

.xy-menu-closed {
  @apply w-12 overflow-hidden;
}

.admin-main {
  @apply flex-grow bg-[#f6f6f8];
}
</style>

<script>
export default {
  route: { meta: { auth: true } }
}
</script>
