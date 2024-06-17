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
            <div v-if="form1Show">
                <div class="sc-ZyCDH lirsN active">
                    <img alt=""
                        src="data:image/png;base64,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"><span>個人資訊</span>
                    <svg v-if="!show1" @click="show1 = true" t="1659509597911" class="icon" viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200" height="200">
                        <path
                            d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                            fill="#3D3D3D" p-id="2998"></path>
                    </svg>
                    <svg v-else @click="show1 = false" t="1659509597911" class="icon icon2" viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200" height="200">
                        <path
                            d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                            fill="#3D3D3D" p-id="2998"></path>
                    </svg>
                </div>
                <div v-show="show1">
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a79')" v-model="form1.name"></div>
                    <div class="sc-jOhDuK iQSHss"><input :accept="$t('a80')" v-model="form1.age"></div>  <div class="sc-hlnMnd dUwcBf">
                        <div class="sc-GVOUr iItKtQ selector">
                            <div class="sc-fXynhf jQGPhK">
                                <div class="sc-dwLEzm " :class="{ 'iDnLzP': !form1.sex }">{{ form1.sex ? form1.sex :
                                    '請選擇性別'
                                }}</div>
                                <!-- @click="bDWjLjShow = true" -->
                                <svg  t="1659509597911" class="icon"
                                    viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200"
                                    height="200">
                                    <path
                                        d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                                        fill="#3D3D3D" p-id="2998"></path>
                                </svg>
                            </div>
                            <div class="sc-iBkjds bDWjLj" v-if="bDWjLjShow">
                                <div class="sc-ftvSup dueZBn" style="opacity: 1;"></div>
                                <div class="sc-papXJ dGrcLk">
                                    <ul>
                                        <div @click="bDWjLjShow = false"><span  v-text="$t('a82')">關閉</span></div>
                                        <li class="active" @click="form1.sex =$t('a83'), bDWjLjShow = false"  v-text="$t('a83')">男性</li>
                                        <li class="" @click="form1.sex = $t('a84'), bDWjLjShow = false" v-text="$t('a84')">女士</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a85')" disabled v-model="form1.email"></div>
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a86')"  disabled v-model="form1.address"></div>
                    <div class="sc-hlnMnd dUwcBf">
                        <div class="sc-GVOUr iItKtQ selector">
                            <div class="sc-fXynhf jQGPhK">
                                <div class="sc-dwLEzm" :class="{ 'iDnLzP': !form1.marriage_status }">{{
                                    form1.marriage_status ?
                                    form1.marriage_status : '婚姻狀況選項' }} </div>
                                    <!-- @click="bDWjLjShow2 = true" -->
                                    <svg 
                                    t="1659509597911" class="icon" viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200" height="200">
                                    <path
                                        d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                                        fill="#3D3D3D" p-id="2998"></path>
                                </svg>
                            </div>
                            <div class="sc-iBkjds bDWjLj" v-if="bDWjLjShow2">
                                <div class="sc-ftvSup dueZBn" style="opacity: 1;"></div>
                                <div class="sc-papXJ dGrcLk">
                                    <ul>
                                        <div @click="bDWjLjShow2 = false"><span v-text="$t('a82')" >關閉</span></div>
                                        <li class="active" @click="form1.marriage_status = $t('a88'), bDWjLjShow2 = false">離婚
                                        </li>
                                        <li class="" @click="form1.marriage_status =  $t('a89'), bDWjLjShow2 = false" v-text="$t('a89')">未婚</li>
                                        <li class="" @click="form1.marriage_status = $t('a90'), bDWjLjShow2 = false" v-text="$t('a90')">已婚</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sc-hlnMnd dUwcBf">
                        <div class="sc-GVOUr iItKtQ selector">
                            <div class="sc-fXynhf jQGPhK">
                                <div class="sc-dwLEzm " :class="{ 'iDnLzP': !form1.degree }">{{ form1.degree ? form1.degree
                                    :
                                    '可選教育背景' }} </div>
                                    <!-- @click="bDWjLjShow3 = true" -->
                                    <svg  t="1659509597911" class="icon"
                                    viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200"
                                    height="200">
                                    <path
                                        d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                                        fill="#3D3D3D" p-id="2998"></path>
                                </svg>
                            </div>
                            <div class="sc-iBkjds bDWjLj" v-if="bDWjLjShow3">
                                <div class="sc-ftvSup dueZBn" style="opacity: 1;"></div>
                                <div class="sc-papXJ dGrcLk">
                                    <ul>
                                        <div @click="bDWjLjShow3 = false"><span v-text="$t('a82')" >關閉</span></div>
                                        <li class="active" @click="form1.degree =$t('a92'), bDWjLjShow3 = false" v-text="$t('a92')">博士號</li>
                                        <li class="" @click="form1.degree = $t('a93'), bDWjLjShow3 = false" v-text="$t('a93')">修士號</li>
                                        <li class="" @click="form1.degree =  $t('a94'), bDWjLjShow3 = false" v-text="$t('a94')">學士號</li>
                                        <li class="" @click="form1.degree =  $t('a95'), bDWjLjShow3 = false" v-text="$t('a95')">高中學歷</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sc-eKBdFk icUshI"></div>
                    <!-- <div class="sc-kIKDeO czsnHl" @click="setUserInfo()">確認個人資訊</div> -->
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
            show1: true,
            show2: true,
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
        getUserInfo()
        {
            User.getUserInfo({userId:this.userInfo.userId}).then(res=>{
                if(res.data.userinfo==null)
                {
                    this.$router.push('/submit')
                }
                this.form1 = res.data.userinfo
            })
        },

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
                    Toast(this.$t('a119'));

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
                return    Toast(this.$t('a115'));
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
                return   Toast(this.$t('a117'));
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
