<template>
  <div class="sc-yeoIj cOmpRI">
    <div class="sc-gSAPjG gJborY nav">
      <span class="sc-jfmDQi bMXkgd">
        <svg @click="$router.push('/lend')" t="1659509597911" class="icon" viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200" height="200">
          <path
            d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
            fill="#3D3D3D" p-id="2998"></path>
        </svg></span>
      <div class="sc-iNWwEs hGxNKX">サイン</div>
    </div>
    <div class="sc-lbxAil jDPmfe fix-height"></div>
    <div class="sc-dWINGa fuWyQp">
      入力内容に誤りがないことを確認の上、直筆サインをご入力ください。合格後、無事にお金を借りることができます!
    </div>

    <!-- <div class="sc-jGprRt hhccne">

      <canvas width="1032" style="touch-action: none" height="867"></canvas>
    </div> -->
    <div ref="canvasBox" class="canvasBox">
      <canvas class="canvasId" id="canvasId" />
    </div>
    <div class="sc-bPyhqo bOGhYW"><span @click="$emit('back')"> リセット</span><span @click="seaveImages">確認</span></div>
    <div>
      <!-- <index2 /> -->

    </div>
  </div>
</template>

<script>
import SignaturePad from "signature_pad";
import { eventBus } from '@/main.js';
import index2 from './index2.vue';
import User from '@/api/user.js';
import { Toast } from "vant";
import user from '@/store/modules/user';
export default {
  name: "bankaccount",
  components: { index2 },
  data() {
    return {
      index2show: false,
      SignaturePad: null,
      config: {
        penColor: "#000000", //笔刷颜色
        minWidth: 3, //最小宽度
      },
      isLoading: false,
      showTip: false,
      isLandscape: false,
      canvas: null,
      form: {

      },
      params: {
        "_contract.userid": "",
        "_contract.order_id": "",
        "_contract.com_date": "",
        "_contract.account_name": "",
        "_contract.address": "",
        "_contract.account": "",
        "_contract.bank_name": "",
        "_contract.bank_code": "",
        "_contract.quota_useing_date": "",
        "_contract.quota_useing": "",
        "_contract.monthly_interest_rate": "",
        "_contract.heTong_status": "",
        "_contract.qianming_img": "",
        "_contract.month": "",
        "QianMing_img": '',
        "contract_file": new FormData(),

      },
      userInfo: {},
      userInfo1: {},
      userInfo2: {},
      userInfo3: {},
    };
  },
  mounted() {
    this.init();
    this.form = JSON.parse(this.$route.query.form)
    this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
    this.userInfo1 = JSON.parse(window.localStorage.getItem('userInfo1'))
    this.userInfo2 = JSON.parse(window.localStorage.getItem('userInfo2'))
    this.userInfo3 = JSON.parse(window.localStorage.getItem('userInfo3'))
    this.params["_contract.userid"] = this.userInfo.userId
    this.params["_contract.order_id"] = 'X3A2998122'

    this.params["_contract.account_name"] = this.userInfo1.name
    this.params["_contract.address"] = this.userInfo1.address
    this.params["_contract.account"] = this.userInfo3.account
    this.params["_contract.bank_name"] = this.userInfo3.bank_name
    this.params["_contract.bank_code"] = this.userInfo3.bank_code

    this.params["_contract.quota_useing"] = this.form.quota_useing
    this.params["_contract.monthly_interest_rate"] = this.form.monthly_interest_rate
    this.params["_contract.com_date"] = this.form.quota_start_time
    this.params["_contract.quota_useing_date"] = this.form.quota_start_time
    this.params["_contract.month"] = this.form.month
    this.params["_contract.heTong_status"] = '0'
    this.params["heTong_status"] = '0'
    this.params["month"] = this.form.month
    this.params["_contract.pdf_img"] = JSON.parse(window.localStorage.getItem('contract_img'))

    eventBus.$on('formData-updated', formData => {
      // 在这里处理接收到的 FormData 对象
      this.params["contract_file"] = formData.get('pdf')





    });

    let formDataArray = JSON.parse(window.localStorage.getItem('contract_file'));
    this.params["contract_file"] = new FormData(formDataArray)
    console.log(this.params["contract_file"])
  },
  methods: {
    init() {
      this.isLoading = false;
      this.canvas = document.getElementById("canvasId");
      this.signaturePad = new SignaturePad(this.canvas, this.config);

      this.landscapeEvent();
      this.showTip = true;
      this.winResize();
    },
    changeColor(color) {
      if (this.signaturePad) {
        this.signaturePad.penColor = color;
        this.signaturePad.clear();
      }
    },

    winResize() {
      const evt =
        "onorientationchange" in window ? "orientationchange" : "resize";

      window.addEventListener(evt, () => {
        setTimeout(() => {
          this.landscapeEvent();
        }, 10);
      });
    },
    // 旋转操作
    landscapeEvent() {
      this.isLandscape =
        document.documentElement.clientWidth >
        document.documentElement.clientHeight;
      this.$nextTick(() => {
        this.canvas.height = this.$refs.canvasBox.clientHeight;
        this.canvas.width = this.$refs.canvasBox.clientWidth;
      });
      console.log(this.isLandscape);
    },
    overwrite() {
      this.signaturePad && this.signaturePad.clear();
    },
    seaveImages() {
      // this.$router.push('/particulars')
      if (this.signaturePad.isEmpty()) {
        // Toast('署名を空にすることはできません');
        Toast({
          message: "署名を空にすることはできません",
          duration: 2000,
          className: this.isLandscape ? "" : "sign-toast",
        });
      } else {
        this.rotateBase64Img(
          this.signaturePad.toDataURL(),
          this.isLandscape ? 0 : 0,
          async (dataBase64) => {
            let file = this.dataURLtoFile(
              dataBase64,
              new Date().getTime() + ".png"
            );
            console.log(file, "file");
            this.params["_contract.qianming_img"] = file.name
            this.params["_contract.pdf_img"] = file.name;

            let formData = new FormData();
            formData.append("file", file);
            let fileContent = formData.get("file");
            this.params["QianMing_img"] = fileContent;
            this.index2show = true
            this.isLoading = true;
            this.SaveContractInfo()

          }
        );
      }
    },
    async SaveContractInfo() {


      // 先处理文件内容

      let model1 = {
        formFile: this.params['contract_file'],
        contract_id: this.params['_contract.userid']
      };

      let res1 = await User.set_contract_img(model1);
      if (res1.success == false) {
        this.$router.push('/home')
      }
      try {

        this.params['contract_file'] = null;
        let res = await User.SaveContractInfo(this.params);
        if (res.success) {
          this.$router.push('/particulars')
        }
        else {
          Toast(res.error);
        }
      }
      catch {

      }
    },
    //将base64转换为文件..
    dataURLtoFile(dataurl, filename) {
      let arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        // eslint-disable-next-line no-undef
        bstr = window.atob(arr[1]),
        n = bstr.length,
        // eslint-disable-next-line no-undef
        u8arr = new Uint8Array(n);
      while (n--) {
        // eslint-disable-next-line no-undef
        u8arr[n] = bstr.charCodeAt(n);
      }
      // eslint-disable-next-line no-undef
      return new File([u8arr], filename, { type: mime });
    },
    // 签完名的图片旋转处理
    rotateBase64Img(src, edg, callback) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      let imgW; // 图片宽度
      let imgH; // 图片高度
      let size; // canvas初始大小
      if (edg % 90 !== 0) {
        console.error("旋转角度必须是90的倍数!");
        return;
      }
      edg < 0 && (edg = (edg % 360) + 360);
      const quadrant = (edg / 90) % 4; // 旋转象限
      const cutCoor = { sx: 0, sy: 0, ex: 0, ey: 0 }; // 裁剪坐标
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.src = src;
      image.onload = function () {
        console.log("加载了");

        imgW = image.width;
        imgH = image.height;
        size = imgW > imgH ? imgW : imgH;
        canvas.width = size * 2;
        canvas.height = size * 2;
        switch (quadrant) {
          case 0:
            cutCoor.sx = size;
            cutCoor.sy = size;
            cutCoor.ex = size + imgW;
            cutCoor.ey = size + imgH;
            break;
          case 1:
            cutCoor.sx = size - imgH;
            cutCoor.sy = size;
            cutCoor.ex = size;
            cutCoor.ey = size + imgW;
            break;
          case 2:
            cutCoor.sx = size - imgW;
            cutCoor.sy = size - imgH;
            cutCoor.ex = size;
            cutCoor.ey = size;
            break;
          case 3:
            cutCoor.sx = size;
            cutCoor.sy = size - imgW;
            cutCoor.ex = size + imgH;
            cutCoor.ey = size + imgW;
            break;
        }
        ctx?.translate(size, size);
        ctx?.rotate((edg * Math.PI) / 180);
        // drawImage向画布上绘制图片
        ctx?.drawImage(image, 0, 0);
        // getImageData() 复制画布上指定矩形的像素数据
        const imgData = ctx?.getImageData(
          cutCoor.sx,
          cutCoor.sy,
          cutCoor.ex,
          cutCoor.ey
        );
        if (quadrant % 2 === 0) {
          canvas.width = imgW;
          canvas.height = imgH;
        } else {
          canvas.width = imgH;
          canvas.height = imgW;
        }
        // putImageData() 将图像数据放回画布
        ctx?.putImageData(imgData, 0, 0);
        callback(canvas.toDataURL("image/png"));
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.canvasBox {
  width: 100%;
  height: 300px;
  margin: 30px 0;

  background: rgb(255, 255, 255);
}

.cOmpRI {
  padding: 1.6rem;
  background: rgb(241, 241, 241);
  min-height: 100%;
}

.bOGhYW>span:first-child {
  color: var(--system-color);
  border: 1px solid var(--system-color);
}

.bOGhYW>span:last-child {
  color: rgb(255, 255, 255);
  background: var(--system-color);
}

.bOGhYW>span {
  padding: 1.6rem 3rem;
  border-radius: 2.6rem;
  background: rgb(255, 255, 255);
}

.gJborY svg {
  width: 2rem;
  height: 3rem;
  transform: rotate(180deg);
  transform-origin: center center;
}

.bOGhYW {
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2rem;
}

.fuWyQp {
  font-size: 1.6rem;
  line-height: 2rem;
  color: rgb(88, 88, 88);
}

.cOmpRI .nav {
  background: rgb(241, 241, 241);
}

.hGxNKX {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  text-align: center;
  z-index: 1;
  line-height: 5rem;
  font-size: 2rem;
  font-weight: 600;
}

.jDPmfe {
  height: 5rem;
}

.gJborY {
  font-size: 1.8rem;
  line-height: 3rem;
  padding: 1rem 1.6rem;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  background: rgb(255, 255, 255);
  z-index: 8;
}

.bMXkgd {
  position: relative;
  z-index: 2;
  padding: 1rem;
}
</style>
