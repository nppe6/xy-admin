<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getOptions, monthData, weekData } from './echarts'

const chartContainer = ref<HTMLDivElement | null>(null) // 图表容器
const chartInstance = ref<echarts.ECharts | null>(null) // 图表实例

const activeTab = ref<'week' | 'month'>('week') // 当前激活的标签

// 初始化图表
const initChart = () => {
  if (chartContainer.value) {
    chartInstance.value = echarts.init(chartContainer.value)

    // 设置初始图表数据
    updateChart(weekData)
  }
}

// 更新图表数据
const updateChart = (data: { dates: string[]; values: number[] }) => {
  if (chartInstance.value) {
    const option: echarts.EChartsOption = getOptions(data)
    chartInstance.value.setOption(option)
  }
}

// 切换数据
const switchData = (tab: 'week' | 'month') => {
  activeTab.value = tab
  if (tab === 'week') {
    updateChart(weekData)
  } else {
    updateChart(monthData)
  }
}

// 在组件挂载时初始化图表
onMounted(() => {
  initChart()
})
</script>

<template>
  <el-card
    shadow="never"
    :body-style="{ padding: '0px' }">
    <template #header>
      <div class="flex justify-between items-center">
        <h3 class="text-[22px] font-bold">访问量</h3>
        <!-- 按钮 -->
        <div class="buttons">
          <el-button
            :color="activeTab === 'week' ? '#2B5AED' : '#F0F0F1'"
            size="default"
            @click="switchData('week')">
            近一周</el-button
          >
          <el-button
            :color="activeTab === 'month' ? '#2B5AED' : '#F0F0F1'"
            size="default"
            @click="switchData('month')">
            近一月</el-button
          >
        </div>
      </div>
    </template>
    <div class="mt-4">
      <!-- 图表容器 -->
      <div
        ref="chartContainer"
        class="w-full h-[248px]"></div>
    </div>
  </el-card>
</template>

<style scoped lang="scss"></style>
