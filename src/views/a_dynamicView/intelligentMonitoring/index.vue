<template>
  <div class="monitoring-and-warning">
    <el-card>

      <!-- 实时预警通知 -->
      <el-alert
        v-for="alert in alerts"
        :key="alert.id"
        :title="alert.title"
        type="error"
        show-icon
        closable
        class="alert-box"
        @close="removeAlert(alert.id)"
      />

      <!-- 数据分析部分 -->
      <section>
        <h3>数据分析</h3>
        <p>通过对倾斜数据、沉降数据和裂缝数据统计分析并结合人工巡检情况，进行风险分析和评估。</p>
        <div ref="dataChart" style="width: 100%; height: 400px;" />
      </section>

      <!-- 实时风险预测部分 -->
      <section>
        <h3>实时风险预测</h3>
        <p>运用先进的云计算与机器学习技术，建立房屋多维度的变形模型，有效实现安全预警。</p>
        <div ref="riskChart" style="width: 100%; height: 400px;" />
      </section>

      <!-- 综合风险评估部分 -->
      <section>
        <h3>综合风险评估</h3>
        <p>根据房屋的检测鉴定结果或安全排查综合评定等级，实施监测方案。</p>
        <el-button @click="evaluateRisk">评估风险</el-button>
      </section>

      <!-- 阈值提醒部分 -->
      <section>
        <h3>阈值提醒</h3>
        <p>根据监测和巡检数据设置分级预警机制，发送预警通知。</p>
        <el-button @click="configureThreshold">配置阈值提醒</el-button>
      </section>

      <!-- 数据查询部分 -->
      <section>
        <h3>数据查询</h3>
        <el-form :inline="true" :model="queryForm" class="demo-form-inline">
          <el-form-item label="时间">
            <el-date-picker v-model="queryForm.date" type="daterange" placeholder="选择日期" />
          </el-form-item>
          <el-form-item label="建筑类型">
            <el-select v-model="queryForm.buildingType" placeholder="选择类型">
              <el-option label="住宅" value="residential" />
              <el-option label="商业" value="commercial" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="searchData">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="exportData">导出数据</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="时间" width="180" />
          <el-table-column prop="location" label="监测点" width="180" />
          <el-table-column prop="level" label="水位" width="180" />
          <el-table-column prop="flow" label="流量" width="180" />
          <el-table-column prop="quality" label="水质" width="180" />
        </el-table>
      </section>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      queryForm: {
        date: '',
        buildingType: ''
      },
      tableData: [
        {
          date: '2023-10-02',
          location: '监测点A',
          level: '5m',
          flow: '20m³/s',
          quality: '良好'
        },
        {
          date: '2023-10-02',
          location: '监测点B',
          level: '6m',
          flow: '22m³/s',
          quality: '一般'
        }
      ],
      alerts: [
        { id: 1, title: '预警：监测点A水位异常' },
        { id: 2, title: '预警：监测点B流量超标' }
      ]
    }
  },
  mounted() {
    this.drawDataChart()
    this.drawRiskChart()
  },
  methods: {
    analyzeData() {
      this.$message('正在分析数据...')
      this.drawDataChart()
    },
    predictRisk() {
      this.$message('正在进行风险预测...')
      this.drawRiskChart()
    },
    evaluateRisk() {
      this.$message('正在评估风险...')
    },
    configureThreshold() {
      this.$message('正在配置阈值提醒...')
    },
    searchData() {
      this.$message('正在查询数据...')
    },
    exportData() {
      this.$message('导出数据...')
    },
    removeAlert(id) {
      this.alerts = this.alerts.filter(alert => alert.id !== id)
    },
    drawDataChart() {
      const chart = echarts.init(this.$refs.dataChart)
      const option = {
        title: { text: '' },
        tooltip: {},
        xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月'] },
        yAxis: {},
        series: [
          {
            name: '水位',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      chart.setOption(option)
    },
    drawRiskChart() {
      const chart = echarts.init(this.$refs.riskChart)
      const option = {
        title: { text: '' },
        tooltip: {},
        xAxis: { data: ['一月', '二月', '三月', '四月', '五月', '六月'] },
        yAxis: {},
        series: [
          {
            name: '风险等级',
            type: 'line',
            data: [2, 4, 5, 3, 4, 5]
          }
        ]
      }
      chart.setOption(option)
    }
  }
}
</script>

<style scoped>
.monitoring-and-warning {
  padding: 20px;
}
.monitoring-and-warning h2 {
  margin-bottom: 20px;
}
.monitoring-and-warning section {
  margin-bottom: 40px;
}
.alert-box {
  margin-bottom: 15px;
}
</style>
