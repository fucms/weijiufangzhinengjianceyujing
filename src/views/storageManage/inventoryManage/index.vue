<template>
  <div class="data-summary">
    <!-- 单栋房屋详细信息及图表 -->
    <el-card class="box-card" style="margin-top: 20px;">
      <div slot="header" class="clearfix">
        <span>单栋房屋详细信息及图表</span>
      </div>
      <div>
        <el-table :data="houseDetails" style="width: 100%">
          <el-table-column prop="houseId" label="房屋编号" width="150" />
          <el-table-column prop="location" label="位置" />
          <el-table-column prop="status" label="当前状态" width="120" />
        </el-table>
        <div ref="chart" style="margin-top: 20px;height: 400px;" />
      </div>
    </el-card>

    <!-- 搬离数据汇总 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>搬离数据汇总查询</span>
      </div>
      <el-table :data="evacuationData" style="width: 100%">
        <el-table-column prop="houseId" label="房屋编号" width="150" />
        <el-table-column prop="location" label="位置" />
        <el-table-column prop="status" label="搬离状态" width="120" />
        <el-table-column prop="evacuationDate" label="搬离日期" width="150" />
      </el-table>
    </el-card>

    <!-- 加固数据汇总 -->
    <el-card class="box-card" style="margin-top: 20px;">
      <div slot="header" class="clearfix">
        <span>加固数据汇总查询</span>
      </div>
      <el-table :data="reinforcementData" style="width: 100%">
        <el-table-column prop="houseId" label="房屋编号" width="150" />
        <el-table-column prop="location" label="位置" />
        <el-table-column prop="reinforcementStatus" label="加固状态" width="120" />
        <el-table-column prop="reinforcementDate" label="加固日期" width="150" />
      </el-table>
    </el-card>

    <!-- 拆除数据汇总 -->
    <el-card class="box-card" style="margin-top: 20px;">
      <div slot="header" class="clearfix">
        <span>拆除数据汇总查询</span>
      </div>
      <el-table :data="demolitionData" style="width: 100%">
        <el-table-column prop="houseId" label="房屋编号" width="150" />
        <el-table-column prop="location" label="位置" />
        <el-table-column prop="demolitionStatus" label="拆除状态" width="120" />
        <el-table-column prop="demolitionDate" label="拆除日期" width="150" />
      </el-table>
    </el-card>
  </div>
</template>

<script>
// 引入 ECharts 组件
import echarts from 'echarts'

export default {
  components: {
  },
  data() {
    return {
      // 搬离数据汇总
      evacuationData: [
        { houseId: '001', location: '区域A', status: '已搬离', evacuationDate: '2023-10-11' },
        { houseId: '002', location: '区域B', status: '未搬离', evacuationDate: '-' }
        // 更多数据...
      ],
      // 加固数据汇总
      reinforcementData: [
        { houseId: '003', location: '区域C', reinforcementStatus: '已加固', reinforcementDate: '2023-10-10' },
        { houseId: '004', location: '区域D', reinforcementStatus: '未加固', reinforcementDate: '-' }
        // 更多数据...
      ],
      // 拆除数据汇总
      demolitionData: [
        { houseId: '005', location: '区域E', demolitionStatus: '已拆除', demolitionDate: '2023-10-12' },
        { houseId: '006', location: '区域F', demolitionStatus: '未拆除', demolitionDate: '-' }
        // 更多数据...
      ],
      // 单栋房屋详细信息
      houseDetails: [
        { houseId: '007', location: '区域G', status: '已搬离' },
        { houseId: '008', location: '区域H', status: '已加固' }
        // 更多数据...
      ],
      // 图表配置
      houseChartOptions: {
        title: { text: '房屋状态分布' },
        tooltip: {},
        xAxis: {
          data: ['搬离', '加固', '拆除', '未处理']
        },
        yAxis: {},
        series: [
          {
            name: '房屋数量',
            type: 'bar',
            data: [5, 10, 2, 8] // 假设数据
          }
        ]
      }
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chart)
      this.chart.setOption(this.houseChartOptions)
    }
  }
}
</script>

<style scoped>
.data-summary {
  padding: 20px;
}
.box-card {
  margin-bottom: 20px;
}
</style>
