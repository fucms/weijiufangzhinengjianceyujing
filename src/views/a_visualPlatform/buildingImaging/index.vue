<template>
  <div class="building-imaging">
    <el-row :gutter="20">
      <!-- 图片上传 -->
      <el-col :span="12">
        <el-card>
          <h3>房屋图片上传</h3>
          <el-upload
            class="upload-demo"
            action="#"
            :show-file-list="false"
            :on-change="handlePictureChange"
            :before-upload="beforeUpload"
          >
            <el-button type="primary">上传房屋图片</el-button>
          </el-upload>
          <el-image
            v-if="imageUrl"
            :src="imageUrl"
            fit="contain"
            style="margin-top: 20px; width: 100%; max-height: 400px;"
          />
        </el-card>
      </el-col>

      <!-- 2.5D 平面图展示 -->
      <el-col :span="12">
        <el-card>
          <h3>房屋 2.5D 平面图</h3>
          <div class="floor-plan">
            <img :src="floorPlan" alt="2.5D 平面图" style="width: 100%; max-height: 500px; object-fit: cover;">
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- BIM 3D 展示 -->
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="24">
        <el-card>
          <h3>房屋 BIM 3D 展示</h3>
          <!-- 模拟的 BIM 3D 展示 -->
          <div class="bim-container">
            <img src="" alt="BIM 3D 模型" style="width: 100%; max-height: 600px; object-fit: cover;">
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: null,
      floorPlan: '' // 替换为实际的 2.5D 平面图路径
    }
  },
  methods: {
    handlePictureChange(file, fileList) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.imageUrl = e.target.result
      }
      reader.readAsDataURL(file.raw)
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isJpgOrPng) {
        this.$message.error('上传图片只能是 JPG 或 PNG 格式!')
      }
      return isJpgOrPng
    }
  }
}
</script>

<style scoped>
.building-imaging {
  padding: 20px;
}

.upload-demo {
  margin-bottom: 20px;
}

.floor-plan img,
.bim-container img {
  max-width: 100%;
}

.bim-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
}
</style>
