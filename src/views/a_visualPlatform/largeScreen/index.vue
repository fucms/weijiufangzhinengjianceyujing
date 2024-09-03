<template>
  <div class="big-screen-display">
    <el-row :gutter="20">

      <!-- 显示其他信息 -->
      <el-col :span="12">
        <el-card>
          <h3>天气情况</h3>
          <el-statistic
            title="当前天气"
            value="晴天"
            :precision="0"
            value-style="font-size: 24px; color: #409EFF;"
            :prefix="''"
            :suffix="''"
          />
          <el-statistic
            title="温度"
            value="25°C"
            :precision="0"
            value-style="font-size: 24px; color: #67C23A;"
            :prefix="''"
            :suffix="''"
          />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <h3>风险情况</h3>
          <el-alert
            title="无风险"
            type="success"
            show-icon
          />
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-card style="margin-top: 20px;">
          <h3>位移监测报表</h3>
          <!-- 模拟的报表展示 -->
          <el-table :data="displacementData" style="width: 100%">
            <el-table-column prop="location" label="位置" />
            <el-table-column prop="displacement" label="位移" />
            <el-table-column prop="timestamp" label="时间戳" />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <!-- 添加数据统计图表 -->
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="12">
        <el-card>
          <h3>位移趋势图</h3>
          <div ref="displacementChart" class="chart-container" style="height: 400px;" />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <h3>天气变化趋势</h3>
          <div ref="weatherChart" class="chart-container" style="height: 400px;" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      displacementData: [
        { location: '位置A', displacement: 2.3, timestamp: '2023-10-11 10:00:00' },
        { location: '位置B', displacement: 1.8, timestamp: '2023-10-11 10:15:00' },
        { location: '位置C', displacement: 3.0, timestamp: '2023-10-11 10:30:00' }
      ]
    }
  },
  mounted() {
    this.initDisplacementChart()
    this.initWeatherChart()
  },
  methods: {
    initDisplacementChart() {
      const chart = echarts.init(this.$refs.displacementChart)
      chart.setOption({
        title: { text: '' },
        tooltip: {},
        legend: { data: ['位移'] },
        xAxis: {
          type: 'category',
          data: this.displacementData.map(item => item.timestamp)
        },
        yAxis: { type: 'value' },
        series: [
          {
            name: '位移',
            type: 'line',
            data: this.displacementData.map(item => item.displacement)
          }
        ]
      })
    },
    initWeatherChart() {
      const chart = echarts.init(this.$refs.weatherChart)
      chart.setOption({
        title: { text: '' },
        tooltip: {},
        legend: { data: ['温度'] },
        xAxis: {
          type: 'category',
          data: ['08-30 00:00', '08-30 01:00', '08-30 02:00']
        },
        yAxis: { type: 'value' },
        series: [
          {
            name: '温度',
            type: 'line',
            data: [25, 26, 27]
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
.big-screen-display {
  padding: 20px;
}

.map-container img {
  max-width: 100%;
}

.el-card {
  margin-bottom: 20px;
}

.chart-container {
  width: 100%;
  height: 400px;
}
</style>
