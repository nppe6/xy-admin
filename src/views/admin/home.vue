<script setup lang="ts">
import adminHeader from './components/adminHeader.vue'
import echartsVisits from './components/echartsVisits.vue'
import echartsInfo from './components/echartsInfo.vue'
</script>
<template>
  <div>
    <div class="grid md:grid-flow-col gap-3 cursor-pointer">
      <admin-header />
    </div>

    <div class="grid md:grid-cols-[612px_auto] gap-6">
      <div class="md:w-[612px] h-[308px] mt-6">
        <echarts-visits />
      </div>
      <div class="h-[308px] mt-6">
        <echarts-info />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
