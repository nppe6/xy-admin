<script setup lang="ts">
import adminHeader from './components/adminHeader.vue'
import adminEcharts from './components/echartsVisits.vue'
</script>
<template>
  <div class="grid md:grid-flow-col gap-3 cursor-pointer">
    <admin-header />
  </div>

  <div class="grid md:grid-cols-[612px_auto] gap-6">
    <div class="md:w-[612px] h-[308px] mt-6">
      <admin-echarts> </admin-echarts>
    </div>
    <div class="h-[308px] mt-6">
      <admin-echarts />
    </div>
  </div>
</template>

<style scoped></style>
