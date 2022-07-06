<template>
  <div id="chainMap" class="map-container"></div>
</template>

<script>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import 'echarts/lib/component/grid'
import chinaJson from './china.json'
export default {
  setup() {
    onMounted(() => {
      init()
      drawChina()
    })
    //中国地理坐标图
    var chinaGeoCoordMap = {
      浙江: [120.153576, 30.287459],
      西安: [108.906866, 34.162109],
      // 柯桥区: [120.476075, 30.078038],
      拉萨: [91.140856, 29.645554],
      沈阳: [123.431474, 41.805698],
      新疆: [87.627704, 43.793026],
      台湾: [121.508903, 25.044319]
    }
    var chinaDatas = [
      // [
      //   {
      //     name: '柯桥区',
      //     value: 0
      //   }
      // ],
      [
        {
          name: '拉萨',
          value: 2
        }
      ],
      [
        {
          name: '沈阳',
          value: 1
        }
      ],
      [
        {
          name: '新疆',
          value: 1
        }
      ],
      [
        {
          name: '台湾',
          value: 1
        }
      ]
    ]
    //投射点 (中心点)
    const scatterPos = [120.153576, 30.287459]
    // 数据转换
    var convertData = function (data) {
      console.log(data)
      var res = []
      for (let i = 0; i < data.length; i++) {
        let dataItem = data[i]
        let fromCoord = chinaGeoCoordMap[dataItem[0].name]
        let toCoord = scatterPos
        if (fromCoord && toCoord) {
          res.push([
            {
              coord: fromCoord,
              value: dataItem[0].value
            },
            {
              coord: toCoord
            }
          ])
        }
      }
      return res
    }
    var series = []
    function init() {
      ;[['浙江', chinaDatas]].forEach((item, i) => {
        series.push(
          {
            //绘制一个新地图
            type: 'map',
            map: 'china',
            zoom: 1.5,
            center: [105.194115019531, 35.582111640625],
            z: -1,
            aspectScale: 1, //
            itemStyle: {
              normal: {
                areaColor: '#f00',
                borderColor: '#090438',
                borderWidth: '2',
                shadowColor: '#090438',
                shadowOffsetX: 0,
                shadowOffsetY: 15
              }
            }
          },
          //设置指向箭头信息
          {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4, //箭头指向速度，值越小速度越快
              trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: 'arrow', //箭头图标
              symbolSize: 8 //图标大小
            },
            lineStyle: {
              normal: {
                color: '#adffd0',
                width: 1, //尾迹线条宽度
                opacity: 1, //尾迹线条透明度
                curveness: 0.3 //尾迹线条曲直度
              }
            },
            data: convertData(item[1])
          },
          // 发射点位置涟漪等效果
          {
            type: 'effectScatter',
            // type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              //涟漪特效
              period: 4, //动画时间，值越小速度越快
              brushType: 'stroke', //波纹绘制方式 stroke, fill
              scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
              normal: {
                show: true,
                position: 'right', //显示位置
                offset: [5, 0], //偏移设置
                formatter: function (params) {
                  //圆环显示文字
                  return params.data.name
                },
                fontSize: 13
              },
              emphasis: {
                show: true
              }
            },
            symbol: 'circle',
            symbolSize: function (val) {
              return 5 + val[2] * 5 //圆环大小
            },
            // 感叹号
            // symbol: 'pin',
            // symbolSize: 50,
            itemStyle: {
              normal: {
                show: false,
                color: '#f8f9f5'
              }
            },
            data: item[1].map(function (dataItem) {
              console.log(
                'dataItem',
                chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
              )
              return {
                name: dataItem[0].name,
                value: chinaGeoCoordMap[dataItem[0].name].concat([
                  dataItem[0].value
                ])
              }
            })
          },
          //被攻击点
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              //涟漪相关
              period: 2,
              brushType: 'stroke',
              scale: 5
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                // offset:[5, 0],
                color: '#0f0',
                formatter: '{b}',
                textStyle: {
                  color: '#fff',
                  fontSize: 12
                }
              },
              emphasis: {
                show: true,
                color: '#f60'
              }
            },
            itemStyle: {
              normal: {
                color: '#f00'
              }
            },
            symbol: 'circle',
            symbolSize: 10, //圆圈大小
            data: [
              {
                name: item[0],
                value: chinaGeoCoordMap[item[0]].concat([10])
              }
            ]
          }
        )
      })
    }
    function drawChina() {
      // var myChart = echarts.init(chinaMap.value)
      var myChart = echarts.init(document.getElementById('chainMap'))
      echarts.registerMap('china', chinaJson)
      var option = {
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(166, 200, 76, 0.82)',
          borderColor: '#FFFFCC',
          showDelay: 0,
          hideDelay: 0,
          enterable: true,
          transitionDuration: 0,
          extraCssText: 'z-index:100',
          formatter: function (params, ticket, callback) {
            console.log(1231, params)
            //根据业务自己拓展要显示的内容
            var res = ''
            var name = params.name
            var value = params.value[params.seriesIndex]
            res = "<span style='color:#fff;'>" + name + '</span>数据：' + value
            if (value) {
              return res
            }
          }
        },
        geo: {
          show: true,
          // 设置中心点
          center: [105.19415019531, 35.582111640625],
          map: 'china',
          zoom: 1.5,
          aspectScale: 1,
          scaleLimit: {
            min: 0.1,
            max: 12
          },
          // 设个省份模块样式设置
          itemStyle: {
            normal: {
              areaColor: '#3352c7',
              color: 'red',
              borderColor: '#5e84fd',
              borderWidth: 2
            }
          },
          emphasis: {
            itemStyle: {
              areaColor: '#ffc601'
            },
            label: {
              show: true,
              clor: '#fff'
            }
          },
          // 给单独区域块颜色
          regions: [
            {
              name: '浙江省',
              itemStyle: {
                normal: {
                  areaColor: '#ffc601'
                }
              }
            }
          ],
          z: 10
        },
        series: series
      }
      myChart.setOption(option)
    }
    return {}
  }
}
</script>

<style lang="less" scoped>
.map-container {
  width: 100%;
  height: 100%;
}
</style>