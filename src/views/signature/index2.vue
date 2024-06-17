<template>
  <div id="content2">
    <!-- 使用<embed>元素显示PDF文件 -->
    <img src="http://47.238.168.229:4055/uploads/8bb23dfa-cebd-4fe3-9cd7-962e96208b41screenshot.png" alt="" crossOrigin="anonymous"
      class="img1">
    <!-- 定位显示的图片 -->
    <img src="http://47.238.168.229:4055/uploads/612d43f2-6e80-4dc2-9f11-e7bd03142d941713632731736.png" class="img2" crossOrigin="anonymous">
    <img src="https://jp1129.com/app-api/profile/upload/2024/02/24/1.Stamp_20240224232704A286.png" class="img3" crossOrigin="anonymous">
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import { eventBus } from '@/main.js';

// import 
export default {
  name: 'index2',
  data() {
    return {
    }
  },
  mounted() {
    window.onload = () => {
      // 在页面加载完成后执行截图操作
      this.download();
    };
    // this.download()
  },
  methods: {
    download() {
            var element = document.getElementById('content2');
            html2canvas(element).then(canvas => {
                canvas.toBlob(blob => {
        if (blob) {
          console.log(element)

            // 创建 FormData 对象
            const formData = new FormData();

            // 将 Blob 对象添加到 FormData 中
            formData.append('pdf', blob, 'screenshot.png');
            console.log(formData,'formDataformData')
            eventBus.$emit('formData-updated', formData);
        }})

});
html2canvas(element,{useCORS: true,allowTaint: true,
            logging: true,x: element.offsetWidth / 2,
            y: 0,}).then(canvas => {
    canvas.toBlob(blob => {
        if (blob) {
            // 创建一个 Blob 对象
            const file = new Blob([blob], { type: 'image/png' });

            // 创建一个链接
            const link = document.createElement('a');

            // 设置链接的下载属性和文件名
            link.href = URL.createObjectURL(file);
            link.download = 'screenshot.png';

            // 将链接模拟点击以触发下载
            link.click();
        }
    }, 'image/png'); // 指定图片类型为 PNG 格式
});
    
    }
  }
}
</script>

<style scoped lang="scss">
#content2 {
  width: 100vw;
  min-height: 100vh;
  position: relative;
  //top: 9999999999px;
  //left: 9999999999px;

  .img1 {
    width: 100%;
  }

  .img2 {
    position: absolute;
    bottom: 50px;
    z-index: 9999;
    right: 80px;
    width: 100px;
  }

  .img3 {
    position: absolute;
    bottom: 80px;
    z-index: 9999;
    left: 80px;
    width: 100px;
  }
}
</style>
