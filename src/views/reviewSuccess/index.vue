<template>
    <div class="bankaccount-page">
        <div class="sc-jIAOiI hHKpxm">
            <div class="sc-gSAPjG gJborY nav"><span class="sc-jfmDQi bMXkgd"><svg @click="$router.push('/home')"
                        t="1659509597911" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                        p-id="2997" width="200" height="200">
                        <path
                            d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                            fill="#3D3D3D" p-id="2998"></path>
                    </svg></span>
                <div class="sc-iNWwEs hGxNKX" _msttexthash="4484168" _msthash="45"   v-text="$t('a46')" >成功</div>
            </div>
            <div class="sc-lbxAil jDPmfe fix-height"></div>
            <h2 _msttexthash="16617978" _msthash="46"  v-text="$t('a47')">用戶的各位</h2>
            <div _msttexthash="37801621" _msthash="47"  v-text="$t('a48')">任務獲得恭喜</div>
            <div class="sc-ZyCDH chpVCJ"><img alt="" src="../../assets/img/img1.png">
                <h3>
                    <font _mstmutation="1" _msttexthash="24974599" _msthash="48"   v-text="$t('a49')" >可用額度</font> (¥)
                </h3>
                <div class="sc-jOhDuK inOSvi" _msttexthash="70707" _msthash="49">10,000,000</div><span
                    class="sc-hlnMnd eBLXqd"><img alt="" src="../../assets/img/img2.png"><span _msttexthash="56200378"
                        _msthash="50"  v-text="$t('a50')">最低利率從 0.4% 起, 30秒快速貸款</span></span>
                <div class="sc-eKBdFk cLMguJ" _msttexthash="22183642" _msthash="51"  v-text="$t('a51')">輕鬆借款</div>
            </div>
            <div class="sc-bUbCnL jUAgQi">
                <h3 _msttexthash="13935090" _msthash="52"  v-text="$t('a52')">快速貸款</h3>
                <ul>
                    <li><img alt=""
                            src="data:image/png;base64,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">
                        <div _msttexthash="6227429" _msthash="53"  v-text="$t('a130')">長期</div>
                    </li>
                    <li><img alt=""
                            src="data:image/png;base64,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">
                        <div _msttexthash="16986450" _msthash="54"  v-text="$t('a131')">迅速批准</div>
                    </li>
                    <li><img alt=""
                            src="data:image/png;base64,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">
                        <div _msttexthash="9452495" _msthash="55"  v-text="$t('a132')">儘快借款</div>
                    </li>
                </ul>
            </div>
            <div class="sc-kIKDeO czsnHl" _msttexthash="10951694" _msthash="56" @click="$router.push('/lend')"  v-text="$t('a133')">馬上借款</div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
.bankaccount-page {
    width: 100%;
    height: 100%;
}

.hHKpxm {
    height: 100%;
    background: linear-gradient(0deg, transparent, rgb(189, 233, 236));
}

.hHKpxm .nav {
    background: transparent;
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

.bMXkgd {
    position: relative;
    z-index: 2;
    padding: 1rem;
}

.gJborY svg {
    width: 2rem;
    height: 3rem;
    transform: rotate(180deg);
    transform-origin: center center;
}

.jDPmfe {
    height: 5rem;
}

.hHKpxm h2 {
    font-size: 2.5rem;
    margin: 5rem 1.6rem 0px;
}

.hHKpxm h2+div {
    font-size: 2.5rem;
    font-weight: 600;
    margin: 1rem 1.6rem 0px;
}

.chpVCJ {
    margin: 5rem 1.6rem 0px;
    padding: 1.6rem 1.6rem 4rem;
    border-radius: 0.8rem;
    color: rgb(255, 255, 255);
    background: linear-gradient(135deg, var(--system-light), var(--system-color));
    position: relative;

    h3 {
        font-size: 1.8rem;
        font-weight: 400;
    }

}
.chpVCJ > img {
    position: absolute;
    width: 10rem;
    height: auto;
    right: 2rem;
    top: -3.5rem;
}
.inOSvi {
    font-size: 3rem;
    font-weight: 600;
}

.eBLXqd {
    margin-top: 1rem;
    padding: 0.4rem 1rem;
    line-height: 1.8rem;
    border-radius: 1.3rem;
    background: var(--system-dark);
    display: inline-block;

     img {
        width: auto;
        height: 1.8rem;
        margin-right: 0.3rem;
    }
}

.cLMguJ {
    border-top: 0.5px solid var(--system-light);
    margin-top: 3rem;
}

.eBLXqd {
    margin-top: 1rem;
    padding: 0.4rem 1rem;
    line-height: 1.8rem;
    border-radius: 1.3rem;
    background: var(--system-dark);
    display: flex;
    align-items: center;
    width: 75%;
}

.jUAgQi {
    background: rgb(255, 255, 255);
    margin: 2rem 1.6rem 0px;
    padding: 2rem 1rem;
    border-radius: 0.8rem;

    h3 {
        font-size: 1.8rem;
    }

    ul {
        display: flex;
        margin-top: 2rem;

        li {
            flex: 1 1 0%;
            text-align: center;
            font-size: 1.4rem;
            font-weight: 600;

            img {
                height: 4rem;
                object-fit: contain;
            }

            img+div {
                margin-top: 1rem;
            }
        }
    }
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
</style>
