<template>
  <div class="screen_box">
    <header class="header">大屏数据可视化模板</header>
    <section class="container">
      <div class="cloumn">
        <div class="panel">
          <bar-echart></bar-echart>
          <div class="panel-bottom"></div>
        </div>
        <div class="panel">
          2
          <div class="panel-bottom"></div>
        </div>
        <div class="panel-down panel">
          3
          <div class="panel-bottom"></div>
        </div>
      </div>
      <div class="cloumn center">
        <div class="panel">
          7
          <div class="panel-bottom"></div>
        </div>

        <div class="panel-down panel">
          8
          <map-echart></map-echart>
          <div class="panel-bottom"></div>
        </div>
      </div>
      <div class="cloumn">
        <div class="panel">
          4
          <div class="panel-bottom"></div>
        </div>
        <div class="panel">
          5
          <div class="panel-bottom"></div>
        </div>
        <div class="panel-down panel">
          6
          <div class="panel-bottom"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import barEchart from './echarts/bar-echart.vue'
import mapEchart from './echarts/map/map-echart.vue'
export default {
  name: 'HomeView',
  components: {
    barEchart,
    mapEchart
  }
}
</script>

<style lang="less" scoped>
.screen_box {
  .header {
    color: #fff;
    height: 5.2083rem;
    line-height: 5.2083rem;
    text-align: center;
    font-size: 1.25rem;
    background: url('../assets/header_bg.png');
    background-size: 100% 100%;
  }
  .container {
    min-width: 53.3333rem;
    max-width: 100rem;
    margin: 0 auto;
    padding: 0.125rem 0.125rem 0;
    margin: 0px 0.5208rem;
    display: flex;
    height: calc(100vh - 5.2083rem) !important;
    .center {
      margin: 0px 0.5208rem;
    }
    .cloumn {
      flex: 3;
      display: flex;
      flex-direction: column;
      margin-bottom: 1.0417rem;
      &:nth-child(2) {
        flex: 5;
      }
      .panel-down {
        flex: 1;
      }
      .panel {
        height: 16.1458rem;
        position: relative;
        box-sizing: border-box;
        padding: 1.3021rem;
        color: #fff;
        margin-top: 0.5208rem;
        &::before {
          position: absolute;
          top: 0;
          left: 0;
          content: '';
          width: 0.5208rem;
          height: 0.5208rem;
          border-left: 0.1042rem solid #fff;
          border-top: 0.1042rem solid #fff;
        }
        &::after {
          position: absolute;
          top: 0;
          right: 0;
          content: '';
          width: 0.5208rem;
          height: 0.5208rem;
          border-right: 0.1042rem solid #fff;
          border-top: 0.1042rem solid #fff;
        }
        .panel-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          left: 0;
          &::before {
            position: absolute;
            bottom: 0;
            left: 0;
            content: '';
            width: 0.5208rem;
            height: 0.5208rem;
            border-left: 0.1042rem solid #fff;
            border-bottom: 0.1042rem solid #fff;
          }
          &::after {
            position: absolute;
            bottom: 0;
            right: 0;
            content: '';
            width: 0.5208rem;
            height: 0.5208rem;
            border-right: 0.1042rem solid #fff;
            border-bottom: 0.1042rem solid #fff;
          }
        }
      }
    }
  }
}
</style>
