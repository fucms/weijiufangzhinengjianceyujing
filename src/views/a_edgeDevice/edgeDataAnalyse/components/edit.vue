<template>
  <div>
    <el-dialog :title="title" :visible.sync="visible" style="padding-bottom: 5vh" width="60%">
      <el-form ref="dataForm" :model="temp" label-position="left" label-width="auto" :rules="rules">
        <el-row>
          <el-col :span="12">
            <el-form-item label="安全监测分析" prop="customerCode">
              <el-input v-model="temp.customerCode" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="环境因素分析" prop="customerName">
              <el-input v-model="temp.customerName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="周边因素分析" prop="customerName">
              <el-input v-model="temp.customerName" />
            </el-form-item>
          </el-col>

        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="submitForm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      title: '编辑',
      visible: false,
      temp: {
        customerCode: '',
        customerName: '',
        dutyParagraph: '',
        type1: '',
        type2: '',
        type3: '',
        product: ''
      },
      rules: {}
    }
  },
  methods: {
    show(val) {
      this.visible = true
      this.temp = { ...val }
    },
    submitForm() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.visible = false
          this.$parent.getList()
          this.$message({
            type: 'success',
            message: '操作成功'
          })
        }
      })
    }
  }
}
</script>
