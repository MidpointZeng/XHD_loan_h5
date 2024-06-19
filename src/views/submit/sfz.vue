<!-- 该组件仅支持单张照片的上传，类似于身份证正反面的上传，限制为10M -->
<template>
    <div class="one-img-upload">
        <el-upload :class="{ haveImg: haveImg }" action="/tjf-upp/action/website/TFileUploadAction"
            :style="{ width: uploadWidth, textAlign:'center' }" ref="oneImgUpload" list-type="picture-card" accept=".png, .gif, .jpg, .jpeg"
            :multiple="false" :on-success="onSuccess" :on-remove="onRemove" :on-error="onError"
            :before-upload="beforeUpload">
            <img v-if="defaultImg" class="default-img" :src="defaultImg" />
            <i v-else slot="default" class="el-icon-plus"></i>
        </el-upload>
    </div>
</template>
   
<script>
export default {
    name: "sfz",
    props: {
        defaultImg: {
            //默认位置的照片
            type: String,
            default: "",
        },
        uploadWidth: {
            //照片框的宽度
            type: String,
            default: "148px",
        },
    },

    data() {
        return {
            haveImg: false,
        };
    },

    methods: {
        onSuccess(res, file, fileList) {
            if (res.status == "FAILED") {
                this.haveImg = false;
                this.$message.error("文件上传失败");
                this.$refs.oneImgUpload.clearFiles();
            } else {
                this.haveImg = true;
                this.$message.success("文件上传成功");
                let re = {
                    res,
                    file,
                    fileList,
                };
                this.$emit("onSuccess", re);
            }
        },

        onRemove(file, fileList) {
            this.haveImg = false;
            let re = {
                file,
                fileList,
            };
            this.$emit("onRemove", re);
        },

        onError(res, file, fileList) {
            this.haveImg = false;
            this.$message.error("文件上传失败");
        },

        beforeUpload(file) {
            let msg = "";
            var fileType = file.name.replace(/.+\./, ""); //文件类型
            if (
                ["jpg", "png", "gif", "jpeg"].indexOf(fileType.toLowerCase()) === -1
            ) {
                msg = "请上传后缀名为jpg,png,gif,jpeg的附件！";
            }

            let size = file.size / 1024 / 1024 / 2;
            if (size > 10) {
                msg = "图片大小必须小于10M";
            }

            if (msg) {
                this.$message.error(msg);
                return false;
            }
        },
    },
};
</script>
              
<style lang="scss" scoped>
.one-img-upload {
  width: 100%;

  .default-img {
    width: 100%;
  }

  ::v-deep .el-upload--picture-card {
    width: auto;
    min-width: 148px;
  }

  .haveImg {
    ::v-deep .el-upload--picture-card {
      display: none;
    }
  }
}
</style>
