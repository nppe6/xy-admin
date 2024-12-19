<script setup lang="ts">
const account = defineModel({ type: String })
</script>
<template>
  <input
    class="login-input"
    v-model="account" />
</template>

<style scoped>
.login-input {
  @apply border-none bg-[#F0F0F1] w-full py-3 pl-4 outline-none rounded-lg placeholder:text-sm;
}
</style>
