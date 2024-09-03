<template>
  <div class="personnel-management">
    <el-row :gutter="20">
      <!-- 巡检人员任务状态列表 -->
      <el-col :span="24">
        <el-card shadow="hover">
          <h3>巡检人员任务状态</h3>
          <el-table :data="taskStatusList" border style="width: 100%">
            <el-table-column prop="name" label="人员姓名" width="120" />
            <el-table-column prop="taskRange" label="任务范围" width="180" />
            <el-table-column prop="inspectionTime" label="巡检时间" width="150" />
            <el-table-column prop="inspectionContent" label="巡检内容" width="180" />
            <el-table-column prop="inspectionResult" label="巡检结果" width="180" />
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button type="primary" size="small" @click="viewDetails(scope.row)">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px">
      <!-- 前端后端人员工作紧密化 -->
      <el-col :span="24">
        <el-card shadow="hover">
          <h3>前端后端人员工作紧密化</h3>
          <el-button type="primary" @click="sendToBackend">发送至后端</el-button>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px">
      <!-- 巡检人员活跃指标 -->
      <el-col :span="24">
        <el-card shadow="hover">
          <h3>巡检人员活跃指标</h3>
          <el-table :data="activeMetricsList" border style="width: 100%">
            <el-table-column prop="name" label="人员姓名" width="120" />
            <el-table-column prop="taskCount" label="任务数" width="120" />
            <el-table-column prop="taskCompletionRate" label="任务及时完成率" width="180" />
            <el-table-column prop="mobileUsageFrequency" label="移动端运用频度" width="180" />
            <el-table-column prop="movementTime" label="房屋间移动时长" width="180" />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 巡检人员任务状态数据
      taskStatusList: [
        {
          name: '张三',
          taskRange: '区域A',
          inspectionTime: '2024-09-02 10:00',
          inspectionContent: '房屋结构检查',
          inspectionResult: '正常'
        },
        {
          name: '李四',
          taskRange: '区域B',
          inspectionTime: '2024-09-02 11:00',
          inspectionContent: '管道检查',
          inspectionResult: '异常'
        }
        // 其他数据...
      ],
      // 巡检人员活跃指标数据
      activeMetricsList: [
        {
          name: '张三',
          taskCount: 10,
          taskCompletionRate: '90%',
          mobileUsageFrequency: '高',
          movementTime: '5分钟'
        },
        {
          name: '李四',
          taskCount: 8,
          taskCompletionRate: '80%',
          mobileUsageFrequency: '中',
          movementTime: '8分钟'
        }
        // 其他数据...
      ]
    }
  },
  methods: {
    // 查看详情方法
    viewDetails(row) {
      this.$message(`查看 ${row.name} 的任务详情`)
    },
    // 发送至后端方法
    sendToBackend() {
      this.$message('信息已发送至后端进行审核')
    }
  }
}
</script>

<style scoped>
.personnel-management {
  padding: 20px;
}

h3 {
  margin-bottom: 10px;
}
</style>
