// 数据定义
const weekData = {
  dates: ['01-12', '01-13', '01-14', '01-15', '01-16', '01-17', '01-18'],
  values: [60, 55, 70, 65, 60, 75, 68],
}

const monthData = {
  dates: ['01-01', '01-05', '01-10', '01-15', '01-20', '01-25', '01-30'],
  values: [50, 60, 55, 65, 70, 80, 75],
}

function getOptions(data: { dates: string[]; values: number[] }): any {
  return {
    xAxis: {
      type: 'category',
      data: data.dates,
      boundaryGap: false, // 去掉 X 轴两侧的间距
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
    },
    series: [
      {
        data: data.values,
        type: 'line',
        smooth: true, // 平滑曲线
        lineStyle: {
          color: '#007bff',
        },
        itemStyle: {
          color: '#007bff',
        },
      },
    ],
    grid: {
      top: '5%',
      left: '5%',
      right: '8%',
      bottom: '10%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis', // 使用类型断言明确指定类型
    },
  }
}

// 图表配置
const getOptionsInfo = (data: { dates: string[]; values: number[] }) => ({
  title: {
    text: '环形图标题',
    left: 'center',
    top: 'center',
    textStyle: {
      fontSize: 14,
      color: '#333',
    },
  },
  tooltip: {
    trigger: 'item' as 'item', // 使用类型断言明确指定类型
  },
  series: [
    {
      name: '访问量',
      type: 'pie',
      radius: ['70%', '90%'], // 内外圆半径
      avoidLabelOverlap: false,
      label: {
        show: false, // 隐藏标签
      },
      data: data.values.map((value, index) => ({
        value,
        name: data.dates[index],
      })),
    },
  ],
})

export { weekData, monthData, getOptions, getOptionsInfo }
