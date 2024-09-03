<template>
  <div class="artificial-monitoring">
    <el-card>
      <!-- 监测人员定位 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>监测人员定位</span>
        </div>
        <div>
          <el-button type="primary" @click="locatePersonnel">实时定位</el-button>
          <el-table :data="personnelLocations" style="width: 100%; margin-top: 20px;">
            <el-table-column prop="name" label="人员名称" width="150" />
            <el-table-column prop="location" label="当前位置" />
            <el-table-column prop="time" label="定位时间" width="200" />
          </el-table>
        </div>
      </el-card>

      <!-- 打卡签到 -->
      <el-card class="box-card" style="margin-top: 20px;">
        <div slot="header" class="clearfix">
          <span>打卡签到</span>
        </div>
        <div>
          <el-button type="success" @click="checkIn">打卡签到</el-button>
          <el-table :data="checkInRecords" style="width: 100%; margin-top: 20px;">
            <el-table-column prop="name" label="人员名称" width="150" />
            <el-table-column prop="time" label="签到时间" width="200" />
            <el-table-column prop="status" label="签到状态" />
          </el-table>
        </div>
      </el-card>

      <!-- 人工数据录入 -->
      <el-card class="box-card" style="margin-top: 20px;">
        <div slot="header" class="clearfix">
          <span>人工数据录入</span>
        </div>
        <div>
          <el-form :model="dataEntryForm">
            <el-form-item label="房屋基本信息">
              <el-input v-model="dataEntryForm.houseInfo" placeholder="请输入房屋基本信息" />
            </el-form-item>
            <el-form-item label="监测人员信息">
              <el-input v-model="dataEntryForm.personnelInfo" placeholder="请输入监测人员信息" />
            </el-form-item>
            <el-form-item label="上传文件">
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :on-success="handleSuccess"
              >
                <i class="el-icon-upload" />
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitData">提交数据</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personnelLocations: [
        { name: '张三', location: '网格1', time: '2024-09-02 08:00:00' },
        { name: '李四', location: '网格2', time: '2024-09-02 09:00:00' }
      ],
      checkInRecords: [
        { name: '张三', time: '2024-09-02 08:30:00', status: '已签到' },
        { name: '李四', time: '2024-09-02 08:45:00', status: '已签到' }
      ],
      dataEntryForm: {
        houseInfo: '',
        personnelInfo: ''
      },
      fileList: []
    }
  },
  methods: {
    locatePersonnel() {
      // 模拟实时定位功能
      this.$message.success('人员定位成功')
    },
    checkIn() {
      // 模拟打卡签到功能
      this.$message.success('打卡成功')
    },
    handlePreview(file) {
      console.log(file)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handleSuccess(response, file, fileList) {
      this.$message.success('文件上传成功')
    },
    submitData() {
      this.$message.success('数据提交成功')
    }
  }
}
</script>

<style scoped>
.artificial-monitoring {
  padding: 20px;
}
.box-card {
  margin-bottom: 20px;
}
</style>
