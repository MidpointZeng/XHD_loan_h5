<template>
  <div class="bankaccount-page">
    <div class="sc-lbOyJj jXEKiw nav">
      <span class="sc-fbPSWO kGfbEr" @click="$router.push('/login')"
        ><svg
          t="1659509597911"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2997"
          width="200"
          height="200"
        >
          <path
            d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
            fill="#3D3D3D"
            p-id="2998"
          ></path></svg
      ></span>
      <div class="sc-ckMVTt ipKhVx" v-text="$t('a3')">登記</div>
    </div>
    <div class="sc-gFGZVQ gTnzTn fix-height"></div>
    <h3 class="sc-GVOUr iwjCtr"></h3>
    <h3 v-text="$t('a5')">註冊成為新用戶</h3>
    <div class="sc-iNWwEs fGkUGU" style="margin-top: 3rem">
      <div class="sc-gSAPjG cHATSO">
        <span class="sc-dwLEzm eInsnn">+81</span>
      </div>
      <input type="number" :placeholder="$t('a0')" v-model="form.account" />
    </div>
    <div class="sc-iNWwEs fGkUGU" style="margin-top: 3rem">
      <img
        class="pwdIcon"
        src="data:image/png;base64,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"
        alt=""
      /><input
        type="password"
        :placeholder="$t('a1')"
        v-model="form.password"
      />
    </div>
    <div class="sc-iNWwEs fGkUGU" style="margin-top: 3rem">
      <img
        class="pwdIcon"
        src="data:image/png;base64,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"
        alt=""
      /><input type="password" :placeholder="$t('a6')" v-model="SurePassword" />
    </div>
    <div class="sc-iNWwEs2" style="margin-top: 3rem">
      <input :placeholder="$t('a140')" v-model="code" />
      <img
        class="pwdIcon2"
        src="data:image/gif;base64,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"
        alt=""
      />
    </div>
    <div v-text="$t('a7')" class="sc-jIAOiI bqZHFE iiEAzi" @click="toLogin()">
      用戶註冊
    </div>
  </div>
</template>

<script>
import User from "@/api/user.js";
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "bankaccount",
  data() {
    return {
      form: {
        account: "",
        password: "",
        code: "",
      },
      SurePassword: "",
    };
  },
  created() {
    axios.get("https://api.ipify.org/?format=json").then((res) => {
      this.ip = res.data.ip;
      console.log(this.ip);
    });
  },
  methods: {
    toLogin() {
      if (this.form.password !== this.SurePassword) {
        return Toast(this.$t("a8"));
      }
      User.register(this.form).then((res) => {
        if (res.data) {
          Toast(res.data);
          // setTimeout(()=>{
          //   this.$router.push("/login");
          // },1000)

          fbq("track", "CompleteRegistration");
          console.log("锚点代码执行成功 type:CompleteRegistration");
          this.toHome();
        } else {
          Toast(res.error);
        }
      });
    },
    toHome() {
      User.login(this.form).then((res) => {
        if (res.data) {
          const data = {
            userId: res.data.id,
            account: res.data.account,
          };
          User.IpAdd({
            ipaddres: this.ip,
            htmllink: window.linkurl,
            username: this.form.account || res.data.account,
          });
          window.localStorage.setItem("userInfo", JSON.stringify(data));
          this.$router.push("/home").catch((res) => {});
        } else {
          Toast(res.error);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.bankaccount-page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url("@/assets/img/登录注册背景.png") no-repeat;
  background-size: 100% 100%;
}

.jXEKiw {
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

.kGfbEr {
  position: relative;
  z-index: 2;
  padding: 1rem;
}

.jXEKiw svg {
  width: 2rem;
  height: 3rem;
  transform: rotate(180deg);
  transform-origin: center center;
}

.ipKhVx {
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

.gTnzTn {
  height: 5rem;
}

.iwjCtr {
  padding-top: 1rem;
}

.iwjCtr + h3 {
  color: #fff;
  font-size: 2.5rem;
  margin: 1rem 0px 0px 2rem;
}

.ldjftV {
  display: flex;
  margin: 2rem;
  border: 1px solid rgb(195, 195, 195);
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
}

.cHATSO {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
}

.ldjftV input {
  flex: 1 1 0%;
  padding: 1.2rem 0px;
  font-size: 2rem;
}

.eInsnn {
  color: var(--system-color);
  font-size: 2rem;
  font-weight: 600;
  padding: 0px 1rem;
}

.bqZHFE {
  margin: 5rem 2rem 0px;
  text-align: center;
  line-height: 5.5rem;
  border-radius: 2.75rem;
  background: var(--system-color);
  color: rgb(255, 255, 255);
  font-size: 2rem;
  font-weight: 600;
}
// input {
//   color: #fff;
//   background: transparent;
// }
// ::placeholder {
//   color: #fff;
// }
.sc-iNWwEs {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background: url("@/assets/img/inputbg.png") 0% 0% / 100% 100% no-repeat;
  margin: 2rem;
  padding: 1.5rem 1rem;
  border-radius: 0.8rem;
}
.sc-iNWwEs2 {
  display: grid;

  justify-content: space-between;
  grid-template-columns: 65% 30%;

  margin: 2rem;
  padding: 0rem 0.5rem;
  border-radius: 0.8rem;
  input {
    background: url("@/assets/img/inputbg.png") 0% 0% / 100% 100% no-repeat
      transparent;
    background-size: 100% 100%;
    height: 40px;
    padding: 1rem 4rem;
    margin-top: -10px;
    font-size: 1.3rem;
  }
  img {
    width: 90px;

    height: 40px;
  }
}
.fGkUGU2 {
}
.pwdIcon2 {
}
.fGkUGU {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background: url("@/assets/img/inputbg.png") 0% 0% / 100% 100% no-repeat
    transparent;
  margin: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
}
.cHATSO {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
}
.fA-DUjn {
  color: var(--system-color);
  font-size: 2rem;
  font-weight: 600;
  padding: 0px 1rem;
}
.fGkUGU input {
  flex: 1 1 0%;
  padding: 2rem 1rem;
  font-size: 1.6rem;
  background: transparent;
}
.pwdIcon {
  width: 2rem;
  margin-left: 1.5rem;
  position: relative;
  top: -0.1rem;
}
.cXuGMb {
  text-align: center;
  height: 8rem;
  line-height: 7rem;
  color: rgb(255, 255, 255);
  font-size: 2rem;
  font-weight: 600;
  background: url("@/assets/img/login-btn.png") 0% 0% / 100% 100% no-repeat;
  margin: 4rem 2rem 0px;
  border-radius: 2.75rem;
}
.iiEAzi {
  width: 25rem;
  text-align: center;
  line-height: 6rem;
  color: rgb(255, 255, 255);
  font-size: 2rem;
  font-weight: 600;
  background: url("@/assets/img/register-btn.png") 0% 0% / 100% 100% no-repeat;
  margin: 4rem auto;
  border-radius: 2.75rem;
}
input:-internal-autofill-selected {
  appearance: none;
  background-image: none !important;
  background-color: transparent !important;
  color: transparent !important;
}
</style>
