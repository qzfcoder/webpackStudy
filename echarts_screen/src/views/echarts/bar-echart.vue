<template>
  <div id="myChart"></div>
</template>

<script>
import { onMounted } from 'vue'
import * as echarts from 'echarts'

export default {
  setup() {
    onMounted(() => {
      init()
    })
    function init() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('myChart'))
      // 指定图表的配置项和数据
      var option = {
        title: [
          {
            text: 'Radial Polar Bar Label Position (middle)'
          }
        ],

        polar: {
          radius: [10, '70%']
        },
        radiusAxis: {
          max: 4
        },
        angleAxis: {
          type: 'category',
          data: ['a', 'b', 'c', 'd'],
          startAngle: 75
        },
        tooltip: {},
        series: {
          type: 'bar',
          data: [2, 1.2, 2.4, 3.6],
          coordinateSystem: 'polar',
          label: {
            show: true,
            position: 'middle',
            formatter: '{b}: {c}'
          }
        },
        // backgroundColor: '#fff',
        animation: true
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }

    // option = {
    //   xAxis: {
    //     type: 'category',
    //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    //   },
    //   yAxis: {
    //     type: 'value'
    //   },
    //   series: [
    //     {
    //       data: [120, 200, 150, 80, 70, 110, 130],
    //       type: 'bar',
    //       showBackground: true,
    //       backgroundStyle: {
    //         color: 'rgba(180, 180, 180, 0.2)'
    //       }
    //     }
    //   ]
    // }
    return {}
  }
}
</script>

<style lang="less" scoped>
#myChart {
  width: 100%;
  height: 100%;
}
</style>
