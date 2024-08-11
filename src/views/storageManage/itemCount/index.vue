<template>
  <div ref="workbench" class="crm-workbench">
    <div>
      <el-row class="elRowBox">
        <el-col :xs="24" :sm="24" :lg="24">
          <div class="chart-wrapper">
            <line-chart :chart-data="lineChartData" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import LineChart from './components/LineChart'
// import RaddarChart from './components/RaddarChart'
// import PieChart from './components/PieChart'
// import BarChart from './components/BarChart'
const lineChartData = {
  newVisitis: {
    Data1: [100, 120, 161, 134, 105, 160, 165],
    Data2: [120, 82, 91, 154, 162, 140, 145],
    Data3: [80, 90, 110, 120, 170, 130, 100]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
export default {
  name: 'Workbench',
  components: {
    LineChart
    // RaddarChart,
    // PieChart
    // BarChart
  },
  data() {
    return {
      loading: false,
      activeName: 'collectedAmount',
      lineChartData: lineChartData.newVisitis
    }
  },
  computed: {
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style scoped lang="scss">
.crm-workbench {
  position: relative;
  width: 100%;
  min-width: 1200px;
  height: 100%;
  padding: 15px 20px 20px;
  background-color: rgb(240, 242, 245);

  &__body {
    height: 100%;
    overflow: auto;
    padding-top: 55px;
  }

  .brief-box {
    width: 100%;
    background-color: white;
    border: 1px solid #e6e6e6;
    border-radius: 6px;
    .brief-title {
      padding: 15px 20px 0;
      .icon {
        color: #50cf9e;
        font-size: 18px;
      }
      .text {
        font-size: 16px;
        font-weight: bold;
        margin-left: 5px;
      }
    }
    .brief {
      width: 100%;
      padding: 10px 10px 14px 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      .brief-item {
        cursor: pointer;
        width: calc(25% - 20px);
        height: 88px;
        box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);
        border-radius: 6px;
        margin: 10px;
        .brief-item__body {
          flex: 1;
          overflow: hidden;
          .icon-box {
            width: 36px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            border-radius: 50%;
            margin-right: 10px;
            margin-left: 15px;
            flex-shrink: 0;

            .icon {
              color: white;
              font-size: 19px;
            }
          }
          .info {
            overflow: hidden;
            .title {
              font-size: 13px;
            }
            .number {
              font-size: 23px;
              font-weight: bold;
              line-height: 1;
              margin-top: 8px;
              margin-right: 5px;
              overflow: hidden;
            }
          }
        }
        .brief-item__others {
          position: relative;
          width: 100px;
          text-align: center;
          padding: 0 3px;
          overflow: hidden;

          &:before {
            position: absolute;
            top: 7.5%;
            left: 0;
            content: "";
            width: 1px;
            height: 85%;
            background-color: #e6e6e6;
            display: block;
          }
          .text {
            font-size: 12px;
            margin-left: -5px;
          }
          .rate {
            font-size: 14px;
            color: #2bbf24;
            margin-top: 8px;

            .rate__icon {
              font-size: 12px;
            }
            &.bottom {
              color: #2bbf24;
            }
            &.top {
              color: #f24b4b;
            }
          }
        }
        &:hover {
          box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
  .elRowBox {
    margin: 10px 0;
  }
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
  }
  .chartBox {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
  }
  .chartBox > p:nth-child(2) {
    margin: 0 50px;
  }
  .chartBox > p {
    font-size: 16px;
  }
}
</style>
