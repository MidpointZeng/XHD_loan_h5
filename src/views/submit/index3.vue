<template>
    <div class="bankaccount-page">
        <div style="padding-bottom: 2rem;">
            <div class="sc-lbOyJj jXEKiw nav"><span @click="$router.go(-1)" class="sc-fbPSWO kGfbEr"><svg
                        t="1659509597911" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                        p-id="2997" width="200" height="200">
                        <path
                            d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                            fill="#3D3D3D" p-id="2998"></path>
                    </svg></span>
               <div class="sc-ckMVTt ipKhVx"    v-text="$t('a78')" >資訊輸入</div>
            </div>
            <div class="sc-gFGZVQ gTnzTn fix-height"></div>
            <div v-if="form3Show">
                <div class="sc-ZyCDH lirsN active"><img alt=""
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUAAABWqf5Vqf5WqfhXrP9Vqf4xVHhAd65Ad61Wqf8BdeweiPJZq/////5Uqf6Av//e7v5arP8mjfQUgu8qj/RQpv5MpP1isP87mfhxt/41lfd6vP/1+v7l8f6Fwf52uf5En/rV6f7D4P5stP4Le+0Gk8kCAAAACXRSTlMAvLz4wr1YjIyBc6xRAAAAsklEQVQoz8XSyRKCMBAE0BjXlhEdIYAg7v//jXZkqRwEDx54RU2T6lxSiZnCajEjO2umDX6WazPHoNioDFITjTDbEX+UR4pCXHdpVKXah3LJm1Q1QHbYha7u4uN8An6V7nEI1CdX1cz781MiFhHEPaCJtiyKMkMM4vQ70Zdy5JFeQJEkSZRzUga0ZbIlh1uapqVykutKZDxyKYASRD30pXj4Yvyy+Uw8y69Jhk9rlxszgTfDwhmMeAHw+QAAAABJRU5ErkJggg=="><span>銀行情報</span>
                    <svg v-if="!show3" @click="show3 = true" t="1659509597911" class="icon" viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200" height="200">
                        <path
                            d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                            fill="#3D3D3D" p-id="2998"></path>
                    </svg>
                    <svg v-else @click="show3 = false" t="1659509597911" class="icon icon2" viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200" height="200">
                        <path
                            d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                            fill="#3D3D3D" p-id="2998"></path>
                    </svg>
                </div>
                <div v-show="show3">
                    <div class="sc-jOhDuK iQSHss" v-if="form1.name">
                        <div> {{ form1.name }}</div>
                    </div>
                    <div class="sc-jOhDuK iQSHss">
                        <div>+81 {{ form3.account }}</div>
                    </div>
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a107')" v-model="form3.bank_name" disabled></div>
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a108')" v-model="form3.bank_code" disabled></div>
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a109')" v-model="form3.bank_Branch_name" disabled></div>
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a110')" v-model="form3.trade_type" disabled></div>
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a111')" v-model="form3.bank_card_number" disabled></div>
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a112')" v-model="form3.account_name" disabled></div>
                    <!-- <div class="sc-kIKDeO czsnHl" @click="setbankinfo()">驗證銀行訊息</div> -->
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import User from '@/api/user.js'
import { Toast } from 'vant';
export default {
    name: '',
    data() {
        return {
            show1: false,
            show2: false,
            show3: true,
            bDWjLjShow: false,
            bDWjLjShow2: false,
            bDWjLjShow3: false,
            bDWjLjShow4: false,
            bDWjLjShow5: false,
            bDWjLjShow6: false,
            bDWjLjShow7: false,
            form1Show: true,
            form1: {
                name: '',
                age: '',
                sex: '',
                email: '',
                address: '',
                marriage_status: '',
                degree: '',
            },
            form2Show: true,
            form2: {
                job_option_type: '',
                total_option_years: '',
                monthly_option_income: '',
                monthly_household_income: '',
            },
            form3Show: true,
            form3: {
                account: '',
                bank_name: '',
                bank_code: '',
                bank_Branch_name: '',
                trade_type: '',
                bank_card_number: '',
                account_name: '',
            },
            userInfo: {
                userId: '',
                account: '',
            }
        }
    },
    created() {
        this.userInfo = { ...JSON.parse(window.localStorage.getItem('userInfo')) }
        console.log(window.localStorage.getItem('userInfo').userId)
        this.form3.account = this.userInfo.account
        this.getUserInfo()
    },
    methods: {
        areAllFieldsEmpty(obj) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
                        return false; // 如果有一个字段不为空，则返回false
                    }
                }
            }
            return true; // 如果所有字段都为空，则返回true
        },
        getUserInfo()
        {
            User.getUserInfo({userId:this.userInfo.userId}).then(res=>{
                if(res.data.bankInfo==null)
                {
                    this.$router.push('/submit')
                }
                this.form3 = res.data.bankInfo
            })
        },
        setUserInfo() {
            if (this.areAllFieldsEmpty(this.form1)) {
                 return Toast(this.$t('a120'));
            }
            this.form1.age = parseInt(this.form1.age)

            const params = {
                ...this.form1,
                userId: JSON.parse(window.localStorage.getItem('userInfo')).userId,
            }

            User.setuserInfo(params).then(res => {
                if (res.success) {
                     Toast(this.$t('a114'));

                    if (!this.form2Show && !this.form3Show) {
                        setTimeout(() => {
                            this.$router.push('/lend')
                        }, 1000)
                    }
                    else {
                        this.form1Show = false
                        this.show2 = true
                    }
                }
                else {
                    Toast(res.error);
                }
            })
        },
        setfamily() {
            if (this.areAllFieldsEmpty(this.form2)) {
                return  Toast(this.$t('a115'));
            }
            const params = {
                ...this.form2,
                userId: JSON.parse(window.localStorage.getItem('userInfo')).userId,
            }

            User.setfamily(params).then(res => {
                if (res.success) {
                    Toast(this.$t('a116'));

                    if (!this.form1Show && !this.form3Show) {
                        setTimeout(() => {
                            this.$router.push('/lend')
                        }, 1000)
                    }
                    else {
                        this.form2Show = false
                        this.show3 = true
                    }
                }
                else {
                    Toast(res.error);
                }
            })
        },
        setbankinfo() {
            if (this.areAllFieldsEmpty(this.form2)) {
                return  Toast(this.$t('a117'));
            }
            const params = {
                ...this.form3,
                userId: JSON.parse(window.localStorage.getItem('userInfo')).userId,
            }

            User.setbankinfo(params).then(res => {
                if (res.success) {
                    Toast(this.$t('a118'));
                    if (!this.form2Show && !this.form2Show) {
                        setTimeout(() => {
                            this.$router.push('/lend')
                        }, 1000)
                    }
                    else {
                        this.form3Show = false
                    }
                }
                else {
                    Toast(res.error);
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
.bankaccount-page {
    width: 100%;
    height: 100%;
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

    svg {
        width: 2rem;
        height: 3rem;
        transform: rotate(180deg);
        transform-origin: center center;
    }

    .kGfbEr {
        position: relative;
        z-index: 2;
        padding: 1rem;
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
}

.gTnzTn {
    height: 5rem;
}

.lirsN {
    display: flex;
    padding: 1.6rem;
    line-height: 3rem;

    svg {
        width: 2rem;
        height: 2rem;
        margin-top: 0.5rem;
    }

    img:first-child {
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
        object-fit: contain;
    }

    span {
        font-size: 1.8rem;
        font-weight: 600;
        flex: 1 1 0%;
    }


}

.active .icon2 {
    margin-top: 0.2rem;
    transform: rotate(90deg);

}

.iQSHss {
    margin: 1.6rem;
    padding: 0.8rem 1.6rem;
    border: 1px solid rgb(153, 153, 153);
    border-radius: 1rem;

    div,
    input {
        width: 100%;
        font-size: 1.6rem;
        padding: 1rem 0.5rem;
    }
}

.dUwcBf {
    margin: 1.6rem;
    padding: 0.8rem 1.6rem;
    border: 1px solid rgb(153, 153, 153);
    border-radius: 1rem;

    .selector {
        font-size: 1.6rem;
        padding: 1rem 0.5rem;
    }
}

.iItKtQ>div:last-child {
    -webkit-box-pack: end;
    justify-content: end;
}

.jQGPhK {
    display: flex;
}

.jQGPhK>div {
    flex: 1 1 0%;
}

.jQGPhK svg {
    width: 2rem;
    height: 2rem;
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
}

.iItKtQ>div:last-child>div:last-child {
    margin: 0px;
}

.iItKtQ ul {
    background: rgb(255, 255, 255);

    li {
        padding: 1.6rem;
        font-size: 1.8rem;
        border-top: 1px solid rgb(241, 241, 241);
    }

    div {
        text-align: right;

        span {
            display: inline-block;
            padding: 1rem 2rem;
        }

    }
}

.iItKtQ .dGrcLk {
    margin: 0px auto;
    position: relative;
    z-index: 2;
}

.czsnHl {
    margin: 2rem;
    text-align: center;
    line-height: 5.5rem;
    border-radius: 2.75rem;
    background: var(--system-color);
    color: rgb(255, 255, 255);
    font-size: 2rem;
    font-weight: 600;
}

.iDnLzP {
    color: rgb(124, 124, 124);
}
</style>
