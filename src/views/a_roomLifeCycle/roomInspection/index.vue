<template>
  <div class="house-inspection">
    <el-card>
      <el-table :data="tasks" style="width: 100%">
        <el-table-column prop="name" label="任务名称" />
        <el-table-column prop="type" label="任务类型" />
        <el-table-column prop="cycle" label="任务周期">
          <el-table-column prop="status" label="任务状态" />
          <el-table-column prop="dueDate" label="截止日期" />
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="small" @click="viewTask(scope.row)">查看</el-button>
              <el-button type="success" size="small" @click="completeTask(scope.row)">完成</el-button>
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog :visible.sync="dialogVisible" title="任务详情">
      <el-form :model="selectedTask">
        <el-form-item label="任务名称">
          <el-input v-model="selectedTask.name" disabled />
        </el-form-item>
        <el-form-item label="任务类型">
          <el-input v-model="selectedTask.type" disabled />
        </el-form-item>
        <el-form-item label="任务周期">
          <el-input v-model="selectedTask.cycle" disabled />
        </el-form-item>
        <el-form-item label="任务状态">
          <el-input v-model="selectedTask.status" disabled />
        </el-form-item>
        <el-form-item label="截止日期">
          <el-input v-model="selectedTask.dueDate" disabled />
        </el-form-item>
        <el-form-item label="任务描述">
          <el-input v-model="selectedTask.description" type="textarea" disabled />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          name: '房屋裂缝检测',
          type: '日常任务',
          cycle: '每月一次',
          status: '未完成',
          dueDate: '2023-10-10',
          description: '对房屋进行裂缝检测，确保安全。'
        },
        {
          name: '结构稳定性检测',
          type: '年度任务',
          cycle: '每年一次',
          status: '未完成',
          dueDate: '2023-10-10',
          description: '检查房屋结构的整体稳定性，避免重大事故。'
        },
        {
          name: '临时巡检任务',
          type: '临时任务',
          cycle: '一次性',
          status: '进行中',
          dueDate: '2023-10-10',
          description: '突发事件导致的紧急巡检任务，需及时完成。'
        }
      ],
      dialogVisible: false,
      selectedTask: {}
    }
  },
  methods: {
    viewTask(task) {
      this.selectedTask = { ...task }
      this.dialogVisible = true
    },
    completeTask(task) {
      task.status = '已完成'
      this.$message.success('任务已完成')
    }
  }
}
</script>

<style scoped>
.house-inspection {
  padding: 20px;
}
</style>
