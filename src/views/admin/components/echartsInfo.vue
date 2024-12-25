<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getOptionsInfo, monthData, weekData } from './echarts'

const chart1 = ref<HTMLDivElement | null>(null) // 第一个图表容器
const chart2 = ref<HTMLDivElement | null>(null) // 第二个图表容器
const chartInstance1 = ref<echarts.ECharts | null>(null) // 第一个图表实例
const chartInstance2 = ref<echarts.ECharts | null>(null) // 第二个图表实例

const activeTab = ref<'week' | 'month'>('week') // 当前激活的标签

// 初始化图表
const initCharts = () => {
  if (chart1.value) {
    chartInstance1.value = echarts.init(chart1.value)
    updateChart(chartInstance1.value, weekData)
  }

  if (chart2.value) {
    chartInstance2.value = echarts.init(chart2.value)
    updateChart(chartInstance2.value, weekData)
  }
}

// 更新单个图表数据
const updateChart = (
  instance: echarts.ECharts | null,
  data: { dates: string[]; values: number[] }
) => {
  if (instance) {
    const option = getOptionsInfo(data)
    instance.setOption(option)
  }
}

// 切换数据
const switchData = (tab: 'week' | 'month') => {
  activeTab.value = tab

  const data = tab === 'week' ? weekData : monthData
  updateChart(chartInstance1.value, data)
  updateChart(chartInstance2.value, data)
}

// 在组件挂载时初始化图表
onMounted(() => {
  initCharts()
})
</script>

<template>
  <el-card
    shadow="never"
    :body-style="{ padding: '0px' }">
    <template #header>
      <div class="flex justify-between items-center">
        <h3 class="text-[22px] font-bold">数据分析</h3>
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
    <div class="grid grid-cols-2 mt-4">
      <!-- 图表容器 -->
      <div
        ref="chart1"
        class="h-[248px]"></div>
      <div
        ref="chart2"
        class="h-[248px]"></div>
    </div>
  </el-card>
</template>

<style scoped lang="scss"></style>
