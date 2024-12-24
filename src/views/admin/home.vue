<script setup lang="ts">
import adminHeader from './components/adminHeader.vue'
import adminEcharts from './components/adminEcharts.vue'
</script>
<template>
  <div class="grid grid-flow-col gap-3 cursor-pointer">
    <admin-header />
  </div>

  <div>
    <div class="w-[612px] h-[308px] mt-6">
      <admin-echarts />
    </div>
  </div>
</template>

<style scoped></style>
