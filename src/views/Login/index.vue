<template>
  <div class="bankaccount-page">
    <img src="../../assets/img/loginLogo.png" class="bank_img" />

    <div class="body_content">
      <!-- <h3 class="sc-lbxAil bXALBm">サインイン</h3>
      <h3>またはサインアップ</h3> -->
      <!-- <div class="sc-iNWwEs kWStML" style="margin-top: 5rem">
        <div class="sc-gSAPjG cHATSO">
          <span class="sc-jfmDQi fA-DUjn">+51</span>
        </div>
        <input
          type="number"
          placeholder="número de teléfono móvil"
          v-model="form.account"
        />
      </div> -->
      <!-- <div class="sc-iNWwEs kWStML" style="margin-top: 3rem">
        <input
          placeholder="Por favor, introduzca su contraseña"
          v-model="form.password"
          type="password"
        />
      </div> -->
      <div class="sc-iNWwEs fGkUGU" style="margin-top: 5rem">
        <div class="sc-gSAPjG cHATSO">
          <span class="sc-jfmDQi fA-DUjn">+81</span>
        </div>
        <input
          type="number"
          placeholder="携帯電話番号"
          v-model="form.account"
        />
      </div>
      <div class="sc-iNWwEs fGkUGU" style="margin-top: 3rem">
        <img
          class="pwdIcon"
          src="data:image/png;base64,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"
          alt=""
        /><input
          placeholder="パスワードを入力してください"
          v-model="form.password"
        />
      </div>
      <div class="sc-olbas kITUb cXuGMb" @click="toHome">ログイン</div>
      <div class="sc-hiMGwR fCBegJ" @click="toRegister">登録</div>
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
      },
      ip: "",
    };
  },
  created() {
    axios.get("https://api.ipify.org/?format=json").then((res) => {
      this.ip = res.data.ip;
      console.log(this.ip);
    });
  },
  methods: {
    toRegister() {
      this.$router.push("/register");
    },
    toHome() {
      if (this.form.account == "" && this.form.password == "") {
        return Toast("空にすることはできません");
      }
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
  background: url("@/assets/img/login_back_img.png") no-repeat;
  background-size: 100% 100%;
  .bank_img {
    position: relative;
    width: 226px;
    height: 223px;
    left: 50%;
    transform: translateX(-50%);

    padding: 1px #ffffff solid;
  }

  .body_content {
    position: relative;
    top: 0px;
  }
}

.bXALBm {
  padding-top: 10rem;
  font-size: 4rem;
  margin-left: 2rem;
}

.bXALBm + h3 {
  color: var(--system-color);
  font-size: 2.5rem;
  margin: 1rem 0px 0px 2rem;
  white-space: pre-wrap;
}

.kWStML {
  display: flex;
  margin: 2rem;
  // border: 1px solid rgb(195, 195, 195);
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

.kWStML input {
  flex: 1 1 0%;
  padding: 1.2rem 0px;
  font-size: 2rem;
}

.kITUb {
  margin: 8rem 2rem 0px;
  text-align: center;
  line-height: 5.5rem;
  border-radius: 2.75rem;
  background: var(--system-color);
  color: rgb(255, 255, 255);
  font-size: 2rem;
  font-weight: 600;
}

.fCBegJ {
  color: var(--system-color);
  font-size: 1.8rem;
  font-weight: 600;
  margin-top: 2.5rem;
  text-align: center;
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
.fGkUGU {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background: url("@/assets/img/inputbg.png") 0% 0% / 100% 100% no-repeat;
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
  background-color: transparent;
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
</style>
