<template>
  <div class="sc-hKMtZM gSsIyS">
    <div class="sc-eCYdqJ eSlzqF">
      <div class="sc-bZkfAO HoWLo">
        <div class="sc-kLLXSd dqxVFP" v-text="$t('a139')">貸款進度</div>
        <div class="sc-ikZpkk fDFQtg"></div>
        <div class="sc-jIZahH dTwvRZ">
          <span  v-text="$t('a53')">貸款金額（元）</span
          ><span
            ><img
              @click="showe = true"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAbFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8+T+BWAAAAI3RSTlMAv4BAYKCRHpZtVRTm39HKr6p3Wkwq99bOpZllUE5FMwsHCd7Loc8AAAE3SURBVFjD7dTbjoIwFIXh1QMHBwEBz2dnvf87TgNGRwd2m0xMNOG74ILQn9DdgFEvPc3jBM+qab5FkBmd8huPpnQ0AiRsWTxo2ErgZ8iel2m2zMsDjbkHDG/MPaAPGLYo6Q+wXAyuX5F7ZGx9Yc+bPQ5sZYjJ1VChIhlfP3cDxOx0d1VXxZpkhV6W12e+qsi6K++WxnVn0Q6Y3Gb8V8pWfYFzqfnbyq11Ms1WOnACO+vU2nTNJ2Vqd9GUnRn6KAZTY+DtA0oQECgyCLLCGzhBdPIGDETGG1BzCObqI8Y4Bv4dyGsjqHNvwEJkvYEEosQbiCGKvQEqLVCfMMYx4CyVYOkPRGcIztHrj/IEook3QPm3/t5j3DLYVtgfH2Gnjwx2RK8NA20wgIEwSDOAhqCJCoqKqMHoyQ9qUd+u50odwwAAAABJRU5ErkJggg=="
            />
            {{ $t('a54') }}
          </span>
        </div>
        <div class="sc-himrzO gnRAjo">
          <div>¥{{ formatNumber(ContractInfo.quota_useing) }}</div>
          <div>
            <span @click="$router.push('/aggrementInfo?id=' + ContractInfo.id)"
              ><img
                alt=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAY1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+aRQ2gAAAAIHRSTlMAv0CA9S8LX1TknyseEN/WwpvqxbKolVpJNSSqjIlOR6mUndwAAADtSURBVFjD7dHZCsIwEIXhk6SbXd33Zd7/KbVQdaiJTgSRlvw3h9LyFRKEflqpH+3xRUdirfG5RJt7afvHmgNzAFVq7l0qC2DoWQNgxoElAMWejQVQxNJAmZpHWQloYqkPgIKlXAB0hx7DWtG9fgNAVACGACQn1W999gE0vaZ8gMwCTHyAckn9GjOsWxgDkGhHQqBoyFEdiwBDzpQI2LkBLQKwNY52g7nGEQB5NMnanbH1AeLug+K2U7ZewLTbBVsxgANFm3ZXFKVs5QCS/g7uGgMQgH8DSpQTkOYAch8gtwCbOYmrt7BUaXEVQqwrd4lYW65cyFIAAAAASUVORK5CYII="
              />            {{ $t('a60') }}</span
            >
          </div>
        </div>
        <div class="sc-gXmSlM lhjGoT">
          <h2  v-text="$t('a55')">提款</h2>
          <ul>
            <li>
              <span
                ><img
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAhFBMVEUAAABMX6pMYKtMX6pMX6pMYq1MX6tMXqpMX6tMX6pLXqlMX6pMX6tMYKpMXqpMX6tMXqpMX6pMX6pMX6pNXalMXqpMX6pMX6pLXKlLXapJZbBMX6pMX6pMX6pLX6pMX6pMX6pMYKtMXqpMX6pKWqtMX6pLX6pLX6tMYKtJW6tMZq1MX6pzET9FAAAAK3RSTlMAqlXAZRfM57KKgNqDcGFNo2taRjO4kYZJLQf69OLRxZ+XXTgmsZl1QCMQU492QgAAAalJREFUWMO11tluqzAUheHlAIEwJCGQeR56Oqz3f79TtReGOsbervrdRv/WVpAt48/smri8RMU+HatJNUsg8x6/sO/82sLXRx7xmdNqCx91QZvDJIHL4swhx9cdhtyXdDndYDc90MMaNmv6UZZ+Tl8FnllSAKYJJU5GX1Nmjr4ppSboWlCuRMeYAVrdxwzxz1hAqjUWCF1hzECt/BMsI3as8OVCbyOgMs9EKumRsOOOT42ox5txNaxEPRQ7xvhUyHstAT4Cem0GbAN6rQY2st481LGkNyigZN8hXvn3PJt3MYCRd88jELEnh55g9iZjgzTREzz6o/kfKOgJzp4RMKV1grvnHGhoneDuuQYetE5w94yBHa0T3D0bAJF1grvnDkBF2wR3/wLYjqPy6RkP3OrKo+f70MtAPfBw9BG+bKy/0yHHt4xh0gTfZgyTA3qF8AXCV8ihZWELaG1KsSm6RpTKf/nOu+CnihIZTDn9LfHMSPhKNb3RTw2beyH7fqZtRpfxAoNm2XAeQ5ON0Lnb5prStFc3+BupPXuiOoFQs6jKq4rUtaxuG3v9H9PT24aC84jqAAAAAElFTkSuQmCC"
              /></span>
              <div>
                <div>
                  {{ $t('a56') }}<span>{{ Lost.start_time }}</span>
                </div>
                <div   v-text="$t('a57')">您的貸款申請已提交。請等待審核。</div>
              </div>
            </li>
            <li>
              <span
                ><img
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAhFBMVEUAAABMX6pMYKtMX6pMX6pMYq1MX6tMXqpMX6tMX6pLXqlMX6pMX6tMYKpMXqpMX6tMXqpMX6pMX6pMX6pNXalMXqpMX6pMX6pLXKlLXapJZbBMX6pMX6pMX6pLX6pMX6pMX6pMYKtMXqpMX6pKWqtMX6pLX6pLX6tMYKtJW6tMZq1MX6pzET9FAAAAK3RSTlMAqlXAZRfM57KKgNqDcGFNo2taRjO4kYZJLQf69OLRxZ+XXTgmsZl1QCMQU492QgAAAalJREFUWMO11tluqzAUheHlAIEwJCGQeR56Oqz3f79TtReGOsbervrdRv/WVpAt48/smri8RMU+HatJNUsg8x6/sO/82sLXRx7xmdNqCx91QZvDJIHL4swhx9cdhtyXdDndYDc90MMaNmv6UZZ+Tl8FnllSAKYJJU5GX1Nmjr4ppSboWlCuRMeYAVrdxwzxz1hAqjUWCF1hzECt/BMsI3as8OVCbyOgMs9EKumRsOOOT42ox5txNaxEPRQ7xvhUyHstAT4Cem0GbAN6rQY2st481LGkNyigZN8hXvn3PJt3MYCRd88jELEnh55g9iZjgzTREzz6o/kfKOgJzp4RMKV1grvnHGhoneDuuQYetE5w94yBHa0T3D0bAJF1grvnDkBF2wR3/wLYjqPy6RkP3OrKo+f70MtAPfBw9BG+bKy/0yHHt4xh0gTfZgyTA3qF8AXCV8ihZWELaG1KsSm6RpTKf/nOu+CnihIZTDn9LfHMSPhKNb3RTw2beyH7fqZtRpfxAoNm2XAeQ5ON0Lnb5prStFc3+BupPXuiOoFQs6jKq4rUtaxuG3v9H9PT24aC84jqAAAAAElFTkSuQmCC"
              /></span>
              <div>
                <div>
                  {{ $t('a58') }}<span>{{ Lost.start_time }}</span>
                </div>
                <div v-text="$t('a59')">申請已完成。如需了解貸款進度，請聯繫客戶服務。</div>
              </div>
            </li>
            <li v-if="Lost2 == true">
              <span
                ><img
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAPFBMVEUAAADZHgbZHgfZHgbYHgbYHQbXHQbYHgbYHgbYHgbYHgbYHwbZHQfYHQXXGwDfIADXHgXZHwfYHQfYHgZR1eX+AAAAE3RSTlMA3JuH3slB9OXSsX1yaBMIu5VO0U6tJQAAARlJREFUWMPtl0eSwzAMBM2oQMm2NP//6x65kpiAubrv01UMIMDXjwbR2TX4afJhtS7K0zMuzBLHOxkUMOk9FP9sBhXM9unn9wUNlr2Xt+hg2/kvunxbeY8BfD2PQWr5gEFCOX9gmKOUdxDgCudfXS1K7I/7t8gEy/1ObpAJsN3qx0gF5lpZCVIB0kVg5ALzP39CLsDZq8Es6NflrBHMOR+hESDmW6wTuLwFOkHehFUnWPNDoBOE/JLpBPltm3SCiRbQS6A3kT5G+iLRV5kuJr6cn2vQNpcIBfH6qIoxt2ddTKIbC9va6OZKt/cHFgJsc8RTj3oeg3h+zKMGvfBqcOhGPEldOnbcZz8c7JdnmNPeP132JL99P+r8ASAoqznBplqAAAAAAElFTkSuQmCC"
              /></span>
              <div>
                <div>
                  {{ $t('a61') }}<span>{{ Lost.start_time }}</span>
                </div>
                <div>
                  <!--  ローンが承認されました。カスタマーサービスにご連絡して手続きをお問い合わせください。 -->
                  {{ remark }}
                </div>
              </div>
            </li>
          </ul>
          <div class="sc-cCsOjp XUXPN" @click="goLink()"  v-text="$t('a62')">聯繫客戶服務</div>
        </div>
      </div>
    </div>
    <div class="sc-iBkjds bDWjLj" v-if="showe == true">
      <div class="sc-ftvSup dueZBn" style="opacity: 1"></div>
      <div class="sc-papXJ dGrcLk">
        <div class="sc-llJcti cpZJtI">
          <h2  v-text="$t('a63')">我借用詳細資料</h2>
          <ul class="info">
            <li>
              <span v-text="$t('a64')">每月本金</span
              ><span>{{ addThousandsSeparator(Lost.ben_jin) }}</span>
            </li>
            <li>
              <span v-text="$t('a65')">每月利息</span
              ><span>{{ addThousandsSeparator(Lost.li_xi) }}</span>
            </li>
            <li>
              <span v-text="$t('a66')">借閱時間</span><span>{{ Lost.start_time }}</span>
            </li>
            <li>
              <span v-text="$t('a67')">還款期限</span><span>{{ Lost.next_time }}</span>
            </li>
            <li><span v-text="$t('a65')">每月利息</span><span>0.4%</span></li>
          </ul>
          <h3 v-text="$t('a69')">每期還款期限</h3>
          <ul class="list">
            <li v-for="(item, index) in Lost.lists" :key="index">
              <span
                >{{$t('a70')}}{{ item.order }}: {{$t('a71')}}:
                {{ addThousandsSeparator(item.ben_jin_li_xi) }}</span
              ><span>{{ item.date_time }}</span>
            </li>
          </ul>
          <div class="sc-iIPllB dpopni" @click="showe = false" v-text="$t('a72')">返回</div>
        </div>
      </div>
    </div>
    <div class="sc-iBkjds bDWjLj" v-if="show2 == true">
      <div class="sc-ftvSup dueZBn" style="opacity: 1"></div>
      <div class="sc-papXJ dGrcLk">
        <div class="sc-gicCDI hBvUOz">
          <h2  v-text="$t('a73')">通知</h2>
          <div>
            {{ tips || $t('a74') }}
          </div>
          <div class="sc-ezWOiH fyqCL">
            <span @click="show2 = false" v-text="$t('a75')">取消</span
            ><span @click="goLink()" v-text="$t('a76')">客戶服務</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "@/api/user.js";
export default {
  name: "bankaccount",
  data() {
    return {
      showe: true,
      show2: false,
      Lost: [],
      Lost2: false,
      url: "",
      tips: "",
      userInfo: {
        userId: "",
        account: "",
      },
      remark: "",
      ContractInfo: {},
    };
  },
  created() {
    // this.userInfo = { ...JSON.parse(window.localStorage.getItem('userInfo')) }
    // this.Select();
  },
  methods: {
    addThousandsSeparator(sb) {
      return new Intl.NumberFormat("en-US").format(sb);
    },
    Select() {
      // User.GetContractInfo({
      //   contractId:'11c5d57f-1891-4466-b0c1-44f0b41dd048'
      // }).then(res=>{
      //   // console.log(res)
      //   this.Lost=res.data;
      // });
      // User.shen_he({
      //   contractId:'11c5d57f-1891-4466-b0c1-44f0b41dd048'
      // }).then(res=>{
      //   if(res.data=='审核成功'){
      //     this.showe=false;
      //     this.show2=true;
      //     this.Lost2=true;
      //   }
      //   // console.log(res)
      //   // this.Lost2=res.data;
      // });
      User.getUserContract({
        userId: this.userInfo.userId,
      }).then((res) => {
        this.ContractInfo = res.data;
        User.GetContractInfo({
          contractId: res.data.id,
        }).then((res) => {
          // console.log(res)
          this.Lost = res.data;
        });

        console.log(res);
        if (res.data.heTong_status != 0) {
          this.showe = false;
          this.show2 = true;
          this.Lost2 = true;
        }
        if (res.data.heTong_status == 0) {
          this.Lost2 = false;
        }
        // console.log(res)
        // this.Lost2=res.data;
        this.remark = res.data.remark;
      });
      // User.SleKefu({}).then(res=>{
      //   this.url = res.data.rows[0].kefu_url
      // })
      User.Getsystemconfig().then((res) => {
        this.url = res.data.ke_fu;
        this.tips = res.data.sptgContent;
      });
    },
    goLink() {
      // window.location.href = this.url
      window.open(this.url, "_blank");
    },
    formatNumber(amount) {
      // 将数字转换为字符串
      let strAmount = String(amount);
      // 检查是否包含小数点
      let decimalIndex = strAmount.indexOf(".");
      let decimalPart = "";
      if (decimalIndex !== -1) {
        // 如果有小数部分，则提取并移除小数部分
        decimalPart = strAmount.slice(decimalIndex);
        strAmount = strAmount.slice(0, decimalIndex);
      }
      // 从末尾开始，每隔三位插入一个逗号
      let formattedAmount = "";
      for (let i = strAmount.length - 1, count = 0; i >= 0; i--) {
        formattedAmount = strAmount[i] + formattedAmount;
        count++;
        if (count % 3 === 0 && i !== 0) {
          formattedAmount = "," + formattedAmount;
        }
      }
      // 添加回小数部分并返回
      return formattedAmount + decimalPart;
    },
  },
};
</script>

<style lang="scss" scoped>
.hBvUOz {
  width: 35rem;
  padding: 3rem 1.6rem 2rem;
  background: rgb(255, 255, 255);
  border-radius: 1.2rem;
}

.hBvUOz h2 {
  text-align: center;
  font-size: 2.3rem;
}

.hBvUOz h2 + div {
  font-size: 1.5rem;
  padding: 3rem 1rem 2rem;
  color: rgb(92, 92, 92);
}

.fyqCL {
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2rem;
  text-align: center;
}

.fyqCL > span:first-child {
  color: var(--system-color);
  border: 1px solid var(--system-color);
}

.fyqCL > span:last-child {
  color: rgb(255, 255, 255);
  background: var(--system-color);
  margin-left: 1rem;
}

.fyqCL > span {
  padding: 1.2rem 1.5rem;
  border-radius: 2.6rem;
  background: rgb(255, 255, 255);
}

.dGrcLk {
  margin: 0px auto;
  position: relative;
  z-index: 2;
}

.bDWjLj {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
}

.dueZBn {
  transition: opacity 0.1s ease-in-out 0s;
  text-align: center;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  will-change: opacity;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  z-index: 1;
}

.dGrcLk {
  margin: 0px auto;
  position: relative;
  z-index: 2;
}

.cpZJtI {
  width: 35rem;
  padding: 1.6rem;
  background: rgb(255, 255, 255);
  border-radius: 1.2rem;
}

.cpZJtI h2 {
  text-align: center;
  font-size: 2rem;
}

.cpZJtI .info {
  padding: 1rem 0px;
}

.cpZJtI .info li {
  display: flex;
  line-height: 2.5rem;
  font-size: 1.4rem;
}

.cpZJtI .info li > span:first-child {
  color: rgb(122, 122, 122);
}

.cpZJtI .info li > span:last-child {
  text-align: right;
}

.cpZJtI .info li > span {
  flex: 1 1 0%;
}

.cpZJtI h3 {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.cpZJtI .list {
  line-height: 2.5rem;
  font-size: 1.4rem;
  color: rgb(118, 118, 118);
  max-height: 20rem;
  overflow: hidden auto;
  width: calc(100% + 2rem);
}

.cpZJtI .list > li {
  display: flex;
  padding-right: 2rem;
}

.dpopni {
  margin-top: 2rem;
  text-align: center;
  line-height: 5.5rem;
  border-radius: 2.75rem;
  background: var(--system-color);
  color: rgb(255, 255, 255);
  font-size: 2rem;
  font-weight: 600;
}

.cpZJtI .list > li > span:first-child {
  flex: 1 1 0%;
}

.gSsIyS {
  height: 100%;
}

.lhjGoT {
  padding: 3rem 1.6rem;
}

.eSlzqF {
  height: 100%;
  padding-bottom: 6.4rem;
}

.HoWLo {
  min-height: 100%;
  background-color: rgb(241, 241, 241);
  padding-bottom: 6.4rem;
}

.dqxVFP {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  height: 5rem;
  line-height: 5rem;
  position: relative;
  z-index: 2;
  color: rgb(255, 255, 255);
}

.fDFQtg {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 22rem;
  background: url(../../assets/img/ubg.png) center top / 100% 25rem no-repeat;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  z-index: 1;
}

.dTwvRZ {
  margin-top: 1rem;
  position: relative;
  z-index: 2;
  padding: 2rem 1.6rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
}

.dTwvRZ > span:last-child {
  float: right;
}

.dTwvRZ > span:last-child img {
  width: 2.5rem;
  margin-right: 0.3rem;
}

img,
svg {
  vertical-align: top;
}

img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.gnRAjo {
  position: relative;
  z-index: 2;
  padding: 2.5rem 1.6rem 2rem;
  color: rgb(255, 255, 255);
  font-weight: 600;
}

.gnRAjo > div:first-child {
  font-size: 2.8rem;
}

.gnRAjo > div:nth-child(2) {
  font-size: 2rem;
  margin-top: 0.3rem;
}

.gnRAjo > div:nth-child(2) img {
  width: 2.4rem;
  margin-right: 0.3rem;
}

.lhjGoT {
  padding: 3rem 1.6rem;
}

ul {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}

.gnRAjo > div:nth-child(2) {
  font-size: 2rem;
  margin-top: 0.3rem;
}

.lhjGoT ul li {
  margin: 1rem;
  padding: 1.5rem 1rem;
  background: rgb(255, 255, 255);
  border-radius: 1rem;
  border: 1px solid red;
  display: flex;
}

.lhjGoT ul li > span {
  width: 3rem;
  margin-right: 1rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
}

.lhjGoT ul li > span img {
  object-fit: contain;
}

.lhjGoT ul li > div {
  flex: 1 1 0%;
}

.lhjGoT ul li > div > div:first-child {
  font-size: 1.8rem;
}

.lhjGoT ul li > div > div:first-child span {
  font-size: 1.3rem;
  margin-left: 2rem;
  white-space: nowrap;
}

.lhjGoT ul li > div > div:last-child {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: rgb(102, 102, 102);
}

.XUXPN {
  margin-top: 5rem;
  height: 6rem;
  text-align: center;
  padding: 0px 4rem;
  border-radius: 2.75rem;
  background: var(--system-color);
  color: rgb(255, 255, 255);
  font-size: 1.8rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
}
</style>
