<template>
  <div class="auto-reminder">
    <!-- 标题 -->
    <el-card>

      <!-- 搜索框 -->
      <el-input
        v-model="search"
        placeholder="搜索姓名"
        class="search-input"
        clearable
      />

      <!-- 表格 -->
      <el-table :data="filteredStaffList" stripe border>
        <el-table-column prop="id" label="序号" width="80" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="department" label="部门" />
        <el-table-column prop="lastReportDate" label="上次上报时间" />
        <el-table-column label="操作">
          <template v-slot="scope">
            <el-button
              type="danger"
              size="mini"
              :disabled="scope.row.reminded"
              @click="remindStaff(scope.row)"
            >
              {{ scope.row.reminded ? '已提醒' : '提醒' }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '', // 搜索框绑定的数据
      staffList: [
        { id: 1, name: '张三', department: '安全部', lastReportDate: '2023-10-11', reminded: false },
        { id: 2, name: '李四', department: '运营部', lastReportDate: '2023-10-11', reminded: false },
        { id: 3, name: '王五', department: '技术部', lastReportDate: '2023-10-11', reminded: false },
        { id: 4, name: '王六', department: '运营部', lastReportDate: '2023-10-11', reminded: false },
        { id: 5, name: '李在', department: '技术部', lastReportDate: '2023-10-11', reminded: false },
        { id: 6, name: '小明', department: '运营部', lastReportDate: '2023-10-11', reminded: false }
        // 更多数据...
      ]
    }
  },
  computed: {
    // 搜索过滤后的数据列表
    filteredStaffList() {
      return this.staffList.filter(item =>
        item.name.includes(this.search)
      )
    }
  },
  methods: {
    // 提醒工作人员的函数
    remindStaff(row) {
      this.$confirm(`确定要提醒 ${row.name} 吗？`, '提醒', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        row.reminded = true
        this.$message({
          type: 'success',
          message: `已提醒 ${row.name}`
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '提醒已取消'
        })
      })
    }
  }
}
</script>

<style scoped>
.auto-reminder {
  padding: 20px;
}

.search-input {
  margin-bottom: 20px;
}
</style>
