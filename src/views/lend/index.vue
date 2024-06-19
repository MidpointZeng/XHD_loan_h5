<template>
    <div class="bankaccount-page">
        <div class="sc-fvNpTx jwXwEK">
            <div class="sc-lbOyJj jXEKiw nav"><span class="sc-fbPSWO kGfbEr"><svg @click="$router.push('/home')"
                        t="1659509597911" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                        p-id="2997" width="200" height="200">
                        <path
                            d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                            fill="#3D3D3D" p-id="2998"></path>
                    </svg></span>
                <div class="sc-ckMVTt ipKhVx" v-text="$t('a22')">借錢</div>
            </div>
            <div class="sc-gFGZVQ gTnzTn fix-height"></div>
            <div class="sc-fctJkW fIkvDH" @click="show_dig()"><span>¥{{ formatNumber(form.quota_useing) }}</span></div>
            <!-- <div class="sc-HzFiz cWYuzY">
                <div class="horizontal-slider" style="position: relative;">
                    <div class="track track-0" style="position: absolute; left: 0px; right: 316.617px;"></div>
                    <div class="track track-1" style="position: absolute; left: 16.6641px; right: 0px;"></div>
                    <div class="thumb thumb-0 " tabindex="0" role="slider" aria-orientation="horizontal" aria-valuenow="5"
                        aria-valuemin="0" aria-valuemax="100"
                        style="position: absolute; touch-action: none; z-index: 1; left: 16.6641px;"></div>
                </div>
            </div> -->
            <div class="sc-HzFiz cWYuzY">
                <div class="horizontal-slider" style="position: relative;">
                    <van-slider v-model="form.quota_useing" :min="min_useing" :max="max_useing" />

                </div>
            </div>
            <div class="sc-grREDI gqyLgn"><img alt=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAQlBMVEUAAAAAh+sAguoAhuwAiO0Ahe4Ah+0Ahu0AiOwAiO0AhO0Ag+sAhuwAiO0AguoAie4Aie4AiuwAfuoAfuwAnu4Ahuxa0IodAAAAFXRSTlMAQIC/IE/Rp3tVRSuf29isdWhKGg/oUxuYAAAApUlEQVRYw+3WSQ7CMBBE0YpxRmdO6v5XBRlkQMGS3RGCRb8D/EWpF41/tzu344SWNy3ESnolhOxAb7CQmfgwQaRh0JwYQDyDHflizJ+h5ptaOIB4hpUHKzJsFQ+qTTCAdIaZH81I1DGiQ5qKEVXmCR4ZpDCM6pGiZVSbOOJiPAbGWzpkKRgUuNOABjSgAQ1oQAMa+HHAMrAQ6Z/PmYwzF884qK+6Ah68OMS+DA1aAAAAAElFTkSuQmCC">
                <div   v-text="$t('a23')" >拖曳選擇</div>
            </div>
            <h2 class="sc-bWXABl CwUGl"   v-text="$t('a24')" >最高貸款金額<br><span>¥</span>{{ formatNumber(max_useing) }}</h2>
            <div class="sc-eFWqGp gyjir"></div>
            <div class="sc-csvncw cFPoqI">
                <h2 v-text="$t('a25')">貸款期限（月）</h2>
                <div>
                    <span v-for="(month, index) in months" :key="index" :class="{ active: month === monthActiveIndex }"
                        @click="monthActiveIndex = month">{{ month }} {{ $t('a26') }}</span>
                </div>
            </div>
            <div class="sc-dFdIVH kxdrlP">
                <h2  v-text="$t('a27')">貸款協議和貸款詳情</h2>
                <div>
                    <span  v-text="$t('a28')">貸款額度</span>
                    <span>¥{{ formatNumber(form.quota_useing) }}</span>
                </div>
                <div>
                    <span  v-text="$t('a29')">實際金額已到賬</span>
                    <!-- quota_used -->
                    <span>¥{{ formatNumber(form.quota_useing) }}</span>
                </div>
                <div>
                    <span  v-text="$t('a30')">總利息</span>
                    <span>¥{{ formatNumber(form.Interest) }}</span>
                </div>
                <div>
                    <span  v-text="$t('a31')">每月利息</span>
                    <span>{{ form.monthly_interest_rate * 100 }}%</span>
                </div>
                <div>
                    <span  v-text="$t('a32')">貸款開始和結束日期</span>
                    <span>
                        <div>{{ form.quota_start_time }}</div>
                        <div>{{ form.quota_end_time }}</div>
                    </span>
                </div>
                <div>
                    <span  v-text="$t('a33')">首次更新日期</span>
                    <span>{{ form.repayment_date }}</span>
                </div>
                <div>
                    <span  v-text="$t('a34')">還款日期</span>
                    <span>{{ form.payment_date }} {{ $t('a35') }}</span>
                </div>
                <p><img alt=""
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAjVBMVEUAAAARZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/4RZ/5X9nuNAAAALnRSTlMA2cCY1IhA6MyuqTr1no9SRzIrCu7gubSkah8aFPvTxYSBeG9jW01BNiYQBHwlcl9u6AAAAWhJREFUWMPtl9eSgkAQRXtIEiVKEOMG4y7//3mrdlNoUcLS82KV3CeYqnMZphMAgKpVTGkqXFRJCUCXM9BByBkIqCQ1GowG72tgGYYnY7CFi7Z8Ax2uCtkGU7jJ4RoQDzbTQCX+h3mIHvEfzDDmxH8y88AmvmAmkkX8FzMTszPy38xUTmPk/Y5aUIpCecYrJ+R3y+cGShOgltYL5AO3oxqNOkRtmSXy+6SrnJ36kNv8nApg0tkPbGgdM0o7AlbgrKehbADlP76oiHA5Ej0dqSm14H6rsxAXj6veltYUm9NsdnLApbnZ0RPb5RZqNU9HW647m2q7YCJ8YLLH25Py765sxbTlK+IGeBOnA9p6Skm3yKrlDi/P2aC5oJT0WMsHlDVwsJi/8KB88GRaRfe8xxht4tDwKms2TgwgTZnDNaEA6uzp7N5CsJEZ77lh2C/6gTEajAYvaaDJ8Rqocgaq/M83gC64tNAB/gD3oJrF/havLgAAAABJRU5ErkJggg==">我已閱讀並同意<span
                        @click="$router.push('/aggrement?form=' + JSON.stringify(form))"  v-text="$t('a37')">《貸款和抵押協議》</span>
                </p>
            </div>
            <div class="sc-brCFrO jgBYIR" @click="goLink()"  v-text="$t('a38')">同意條款並確認</div>
            <div class="sc-dsQDmV cLwvWq" v-if="dialog">
                <div class="sc-iBkjds bDWjLj">
                    <div class="sc-ftvSup dueZBn" style="opacity: 1;"></div>
                    <div class="sc-papXJ dGrcLk">
                        <div class="sc-cZwWEu jrpZWt">
                            <h3  v-text="$t('a39')">借錢</h3>
                            <h4>{{ formatNumber(max_useing) }}</h4>
                            <div class="sc-jTYCaT clBDKP"><input type="number" :placeholder="$t('a40')"
                                    v-model="quota_useing2">
                            </div>
                            <div class="sc-jQHtVU etftrS"><span @click="dialog = false" v-text="$t('a41')">取消</span><span
                                    @click="checkNumber()"  v-text="$t('a42')">確認</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <aggrement v-if="aggrementShow" :form2="form" />
    </div>
</template>

<script>
import User from '@/api/user.js'
import aggrement from '@/views/aggrement'
import { Toast } from 'vant';
export default {
    name: '',
    components: { aggrement },
    data() {
        return {
            aggrementShow: '',
            dialog: true,
            months: ['6', '12',  '36', '48', '60', '72'],
            monthActiveIndex: '60', // 60月的索引
            quota_useing2: 2000000,
            max_useing: 2000000,
            form: {
                quota_useing: 2000000,
                quota_used: 2000000,
                Interest: 0,
                monthly_interest_rate: 0.4,
                quota_start_time: '',
                quota_end_time: '',
                repayment_date: '',
                payment_date: '04',
                month: ''
            },
            userInfo: {
                account: ''
            },
            min_useing: 0,
        }
    },
    created() {
        this.form.quota_start_time = this.getDate()
        this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        this.form.month = this.monthActiveIndex

        this.getInfo()
    },
    methods: {

        show_dig() {
            this.dialog = true;
        },
        getInfo() {
            User.getInfo({ userId: this.userInfo.userId }).then(res => {
                // this.Info = res.data
                this.max_useing = res.data.quota_useing
                this.min_useing = res.data.min_money
                this.quota_useing2 = this.max_useing
                this.form.quota_useing = this.quota_useing2
                this.form.monthly_interest_rate = res.data.monthly_interest_rate
            })

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
        checkNumber() {
            if (this.quota_useing2 > this.max_useing) {
                return Toast(this.$t('a43'))
            }
            else if (this.quota_useing2 < this.min_useing) {
                return Toast(`${this.$t('a44')} ${this.min_useing} ${this.$t('a45')} `)
            }
            this.form.quota_useing = this.quota_useing2
            this.dialog = false
        },
        addMonths(dateString, monthsToAdd) {
            let date = new Date(dateString);
            date.setUTCMonth(date.getUTCMonth() + monthsToAdd);

            // 检查是否超过了目标月份的最后一天
            const lastDayOfMonth = new Date(date.getUTCFullYear(), date.getUTCMonth() + 1, 0).getUTCDate();
            if (date.getUTCDate() > lastDayOfMonth) {
                date.setUTCDate(lastDayOfMonth);
            }

            return date.toISOString().split('T')[0];
        },
        getDate() {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0'); // 加 1 是因为 getMonth() 返回的是从 0 到 11
            const day = String(today.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            return formattedDate
        },
        goLink() {
            this.aggrementShow = true,
                setTimeout(() => {
                    this.$router.push('/signature?form=' + JSON.stringify(this.form))
                }, 1000)
        },
        // 计算总利息并赋值到前台
        getZlx(benjin) {
            let yue_fen = parseInt(this.form.month);
            let li_lv = parseFloat(this.form.monthly_interest_rate);
            let ben_jin = parseFloat(benjin);
            this.form.Interest = (yue_fen * li_lv * ben_jin).toFixed(0);
        }
    },
    watch: {
        // 'form.quota_useing': function (newVal, oldVal) {
        //     if (newVal > 10000000) {
        //         this.form.quota_useing = 10000000;
        //         Toast('入力金額は最大金額の 10000000 を超えることはできません')
        //     }
        //     else if (newVal < 500000) {
        //         Toast('入力された金額は、最低金額の 500000 未満にすることはできません')
        //     }
        // }
        'form.quota_useing': {
            immediate: true,
            handler(newVal, oldVal) {

                this.getZlx(newVal);

                // console.log(this.form.quota_useing);
                // console.log(this.form.monthly_interest_rate)
                // this.form.month = this.monthActiveIndex
                // this.form.Interest = this.form.quota_useing * (this.form.monthly_interest_rate) * this.form.month
                // this.form.Interest = this.form.Interest.toFixed(2);
                // this.form.quota_end_time = this.addMonths(this.form.quota_start_time || this.getDate(), parseInt(newVal));
                // this.form.repayment_date = this.addMonths(this.form.quota_start_time || this.getDate(), 1);
            }

        },
        monthActiveIndex:
        {
            immediate: true,
            handler(newVal, oldVal) {

                this.form.month = newVal
                this.getZlx(this.form.quota_useing);
                // this.form.Interest = this.form.quota_useing * (this.form.monthly_interest_rate) * parseInt(newVal)
                this.form.quota_end_time = this.addMonths(this.form.quota_start_time || this.getDate(), parseInt(newVal));
                this.form.repayment_date = this.addMonths(this.form.quota_start_time || this.getDate(), 1);
            }
        }
    }
}
</script>

<style scoped lang="scss">
.bankaccount-page {
    width: 100%;
    height: 100%;
}

.jwXwEK {
    padding: 1.6rem;
    background: rgb(241, 241, 241);
    min-height: 100%;
}

.jwXwEK .nav {
    background: rgb(241, 241, 241);
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

.gTnzTn {
    height: 5rem;
}

.fIkvDH {
    text-align: center;
    padding: 1rem 0px;
    font-size: 2rem;
    font-weight: 600;

    span {
        padding-right: 2.6rem;
        background: url(../../assets/img/edit.png) right center / 2rem no-repeat;
    }
}

.cWYuzY {
    height: 4rem;

    .horizontal-slider {
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #d4fff6, var(--system-color));
        border-radius: 2rem;
    }

    .thumb {
        width: 4.4rem;
        height: 4.4rem;
        border-radius: 2.2rem;
        outline: none;
        background: url(../../assets/img/edit2.png) center center / 115% 115% no-repeat rgb(255, 255, 255);
        top: -0.2rem;
    }

    :deep(.van-slider) {

        position: relative;
        width: 93%;
        height: 2px;
        left: 12px;
        background-color: transparent;
        border-radius: 999px;
        cursor: pointer;
        top: 18px;

        .van-slider__button {
            width: 4.4rem;
            height: 4.4rem;
            border-radius: 2.2rem;
            outline: none;
            background: url(../../assets/img/edit2.png) center center / 115% 115% no-repeat rgb(255, 255, 255);
            top: -0.2rem;
        }

        .van-slider__bar {
            background-color: transparent;

        }
    }
}

.gqyLgn {
    text-align: center;
    color: var(--system-dark);
    font-size: 2rem;
    font-weight: 600;
    margin-top: 2rem;

    img {
        width: 2rem;
    }
}

.CwUGl {
    font-size: 2rem;
    margin-top: 2rem;
}

.gyjir {
    margin: 1.5rem 0px;
    height: 0.5px;
    background: rgb(180, 180, 180);
}

.cFPoqI {
    padding: 1.6rem;
    background: rgb(255, 255, 255);
    border-radius: 0.8rem;

    div {

        margin-top: 1.6rem;

        span {
            font-size: 1.4rem;
            font-weight: 600;
            display: inline-block;
            vertical-align: top;
            width: calc(33% - 14px);
            text-align: center;
            line-height: 3.5rem;
            border: 1px solid rgb(181, 181, 181);
            border-radius: 0.5rem;
            margin-right: 13px;
            margin-bottom: 1rem;
        }

        .active {    
            color: rgb(255, 255, 255);
            background: var(--system-dark);
            border-color: var(--system-dark);
        }

        span:nth-child(4n) {
            // margin-right: 0px;
        }
    }
}

.kxdrlP {
    padding: 1.6rem;
    background: rgb(255, 255, 255);
    border-radius: 0.8rem;
    margin-top: 2rem;

    h2 {
        margin-bottom: 1rem;
    }

    div {
        display: flex;
        font-size: 1.6rem;
        padding: 0.8rem 0px;

        span:first-child {
            color: rgb(93, 93, 93);
        }

        span:last-child {
            flex: 1 1 0%;
            text-align: right;
            white-space: nowrap;
            margin-left: 2rem;

            div {
                display: block;
                padding: 0;
            }
        }
    }

    p {
        font-size: 1.4rem;
        line-height: 2rem;

        img {
            width: 1.6rem;
            height: 1.6rem;
            margin: 0.2rem 1rem 0px 0px;
        }

        span {
            color: rgb(26, 13, 171);
            text-decoration: underline;
        }
    }
}

.jgBYIR {
    margin-top: 2rem;
    text-align: center;
    line-height: 5.5rem;
    border-radius: 2.75rem;
    background: var(--system-color);
    color: rgb(255, 255, 255);
    font-size: 1.8rem;
    font-weight: 600;
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

.cLwvWq>div>div:last-child {
    width: 80%;
}

.dGrcLk {
    margin: 0px auto;
    position: relative;
    z-index: 2;
}

.jrpZWt {
    padding: 2rem;
    background: rgb(255, 255, 255);
    border-radius: 1rem;
}

.cLwvWq h3 {
    font-size: 1.8rem;
}

.cLwvWq h4 {
    text-align: center;
    margin-top: 2rem;
    font-size: 2.5rem;
}

.clBDKP {
    padding: 1rem;
    border-bottom: 1px solid rgb(153, 153, 153);
    margin-top: 1rem;
}

.clBDKP>input {
    font-size: 1.6rem;
}

.etftrS {
    margin-top: 2rem;
    display: flex;

    span {
        flex: 1 1 0%;
        padding: 1rem 2rem;
        font-size: 1.5rem;
        text-align: center;
        color: rgb(82, 82, 82);
    }

    span:last-child {
        color: rgb(255, 255, 255);
        font-weight: 600;
        background: var(--system-dark);
        border-radius: 1rem;
        margin-left: 3rem;
    }
}
</style>
