<template>
    <div class="bankaccount-page">
        <div style="padding-bottom: 2rem;">
            <div class="sc-lbOyJj jXEKiw nav"><span @click="$router.push('/home')" class="sc-fbPSWO kGfbEr"><svg
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
                    <div class="sc-jOhDuK iQSHss"><input :accept="$t('a80')" v-model="form1.age"></div>
                    <div class="sc-hlnMnd dUwcBf">
                        <div class="sc-GVOUr iItKtQ selector">
                            <div class="sc-fXynhf jQGPhK" @click="bDWjLjShow = true">
                                <div class="sc-dwLEzm " :class="{ 'iDnLzP': !form1.sex }">{{ form1.sex ? form1.sex :
                                   $t('a81')
                                }}</div><svg t="1659509597911" class="icon" viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200" height="200">
                                    <path
                                        d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                                        fill="#3D3D3D" p-id="2998"></path>
                                </svg>
                            </div>
                            <div class="sc-iBkjds bDWjLj" v-if="bDWjLjShow">
                                <div class="sc-ftvSup dueZBn" style="opacity: 1;"></div>
                                <div class="sc-papXJ dGrcLk">
                                    <ul>
                                        <div @click="bDWjLjShow = false"><span    v-text="$t('a82')" >關閉</span></div>
                                        <li class="active" @click="form1.sex = $t('a83'), bDWjLjShow = false"  v-text="$t('a83')">男性</li>
                                        <li class="" @click="form1.sex = $t('a84'), bDWjLjShow = false"  v-text="$t('a84')">女士</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a85')" v-model="form1.email"></div>
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a86')" v-model="form1.address"></div>
                    <div class="sc-hlnMnd dUwcBf">
                        <div class="sc-GVOUr iItKtQ selector">
                            <div class="sc-fXynhf jQGPhK" @click="bDWjLjShow2 = true">
                                <div class="sc-dwLEzm" :class="{ 'iDnLzP': !form1.marriage_status }">{{
                                    form1.marriage_status ?
                                    form1.marriage_status : $t('a87') }} </div><svg t="1659509597911" class="icon"
                                    viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200"
                                    height="200">
                                    <path
                                        d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                                        fill="#3D3D3D" p-id="2998"></path>
                                </svg>
                            </div>
                            <div class="sc-iBkjds bDWjLj" v-if="bDWjLjShow2">
                                <div class="sc-ftvSup dueZBn" style="opacity: 1;"></div>
                                <div class="sc-papXJ dGrcLk">
                                    <ul>
                                        <div @click="bDWjLjShow2 = false"><span  v-text="$t('a82')" >關閉</span></div>
                                        <li class="active" @click="form1.marriage_status = $t('a88'), bDWjLjShow2 = false"  v-text="$t('a88')">離婚
                                        </li>
                                        <li class="" @click="form1.marriage_status = $t('a89'), bDWjLjShow2 = false"  v-text="$t('a89')">未婚</li>
                                        <li class="" @click="form1.marriage_status = $t('a90'), bDWjLjShow2 = false"  v-text="$t('a90')">已婚</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sc-hlnMnd dUwcBf">
                        <div class="sc-GVOUr iItKtQ selector">
                            <div class="sc-fXynhf jQGPhK" @click="bDWjLjShow3 = true">
                                <div class="sc-dwLEzm " :class="{ 'iDnLzP': !form1.degree }">{{ form1.degree ?
                                    form1.degree
                                    :
                                    $t('a91') }} </div><svg t="1659509597911" class="icon" viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200" height="200">
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
                                        <li class="active" @click="form1.degree = $t('a92'), bDWjLjShow3 = false" v-text="$t('a92')">博士號</li>
                                        <li class="" @click="form1.degree = $t('a93'), bDWjLjShow3 = false" v-text="$t('a93')">修士號</li>
                                        <li class="" @click="form1.degree = $t('a94'), bDWjLjShow3 = false" v-text="$t('a94')">學士號</li>
                                        <li class="" @click="form1.degree = $t('a95'), bDWjLjShow3 = false" v-text="$t('a95')">高中學歷</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sc-eKBdFk icUshI"></div>
                    <div class="sc-kIKDeO czsnHl" @click="setUserInfo()" v-text="$t('a96')">確認個人資訊</div>
                </div>
            </div>

            <div v-if="form2Show">
                <div class="sc-ZyCDH lirsN active"><img alt=""
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA6CAMAAAA9UgEZAAAC/VBMVEUAAAAwaMA7f+sqZsRCdcVCdcW1yegyd+c4bcIyduM5b8NKecMpYr0oYbwoYr1jjM8yduNrk9IoYb0wc96ateCuxOYraswwaMBbiM0xdeFcic1CdcVjjc9rk9Jah80sZb9xmNRzmdQoYb2YtOCCpNkoYbwwc96lvuMsas8raMmXs9////9Ac8RFheo1eeU4e+YxdeFNiupYhswoYb0wctw6e+MxdeGCo9dijc8zasFGhOYxduUxdeKKqtsoYbwxduSWst+5zOrJ2O4xdeNjjc7O2+8oYr3+/v7///8yeOnh5vVd0vEkWKxb0fFX0fAnYb3c9fshXbsyeevL8Pph2PQhUqlg0/JU0PAvdelLq9sqZL7j5/aG3fTe5PT8/fsmcejn6vcxeOmetdtOtNtrwDvj9/ym5vfk6Pbg5fQrdOglX7wnYLseW7rs7vn4+/bq6fZg1/FQte4cWbqk5vcpcuhKs9pmvjT5+v3a4fMvd+mEy1x8yFL0+P3q7fgYTqjp7Pekw/SGsPI6b8MzasB4xkz6/PlJiOyk0epnvzb7/P2+7fm87Pjk6fdak+0kb+cwdeJFsdlWg8spZcTv8fpxou+Py+cxduUvc+Bdud4racxNfMhFdsYuZr8lW7EaUaoXTqea1Hnm7/vh6fnN3vjH2vin5/eewPTc5fORt/PV3vF2pfDP2e9pnO/J1e3E0uxRjey/zuusweVPweWqv+FRvOGatOCPq9wub9VjjM9ahs0/csQiVa2P0Gvu8/zp8Pz09PvY5frn6/i26viZ4Pa60faryfaM3/WoxvWA2/SZvPSy3/LF3PCR1u9glu6z1u1azOwyeuxBg+o4fOq6yekfbOe0x+OTr96MqdsucduFpNl8ntdyl9RuldMhZdJpkdEsa9Db78/a785PfsuAyVZwwkFqwDphvC7t+f3Y9Pyn6Pnd8fio2/J6x/Ja0PCu3+9Ls+6p0+uKr+qXzeeOyeWjuuIkbeFMrN3g8tff8dUgX8NHdLolWrGs25Gn2YpswDwPx5ncAAAARnRSTlMA/P0G9O8a/fv59/b14trW1MuLhVtINe7f3NnVzb+9u7irdWRSRi4qIxkPDffv7uXg0czIwrivmJOFgm1rZ2JXVlNJQyYjPY44hgAABUdJREFUSMeNlwV000AYgDvc3d3d3Z00TSkhBcZIKW0p0LVdkdGuLWspQwZDBsPd3d3d3d3d3f1x9+fWhi4Mvr6Xl7zc9/7/7v67XGWSlK2bNWO6Gfy4qZvTp6hcvUEZ2f/RulA6nmKt/O3JCrVarcCkqJ3n316ujDxFUVZ+8ySwCGpF1YbJe7lTUQiWvT2JaCKqNP27l6YAhbGOu6JWGMLCzHa72ex2B+JmK/cXscVgIk5y23Xmc7GrR48eHZvCrdOZE920jSTF4jwRzboUK44umOdxyuk4z675h5fF2u0GItdJmVTMTgHs1/jVi+bSf+A5cNJNXHW2JGJWQbRyqw86UWO5GPQ4f4U5TFDzp5SMyFneOoM0IssPnNVJRS0uiBHb1qA20tBzV9hBPVNLJDYjEactlfZI2BidAaLm9IsVBwsRE1weZNKSwIujwvykLfPn6HDTGT16Hbd0fTcRA4HDCzw0DhsTD0GrEbEUiOyg5ZrxcnplxjYDBsxGP+Ey66MOMMcOhLAT7OJ8Uwm5XtRrnPTFNrPaiJk5RgEYzPExOOrOWHhMXx6qHMTIa+MZE7244/Y2EiZgXoTzXRAPDxA0NZiDXEy4jf4GEaVNg8Ij9+ebHi8QoZebGEbrWQyihAnEH6TxtAr10FImKwImr0UmvX57sPldZJon4J7GLYOH/DJZBujlVRs2u3UMZvvkMD/2kzAz8w0wp7IKPAyslkHQxzoH86lvgNcvaKils7DYZSWhlwkmJI6iR3RIQp8Ayi6CuUQHZmFsWq4yYI5UJoeKmPMugAlzwq/H5jxiquDnv6jgQkxQFQZshmBz8BpshoO5v50k7UMD5mgweTCXY9OFTVVPWpIeInOCG5uJBYTQOgVTLoXYjAkLmFrIdvyIRJOsSHIjMoElwSajTzSH9sJ0RY16AcmYLjBN+wST/jkkOjr6/hcUsn80YsfQpNka/CMEHCPmnEfDhw//dRc1GhKF7oYEmcvQCE32zwrwPNGM6t69+4M72HyI7qKJKZqVM1NJJawFUTNM9V/mOYN6kpVU32Vibggl2UZFRXUXskX8mS29C1XfVIpU/FaTYBpPK7H5435/xGfUage+2dH1D3ORTjGZpcgqszDE3ACz0hWQywN3YjPWrRiHTLKyL9kE07juqX+zhmaA2KT3GNRTrRRFdhN2sAmbb4xGxwnp6nuiUr48BK9i1JtZisqcuINZN2qQetxhNE55RktxRKXstA923BRXrEgo7d81p+MC7D3FYXRMedU+CSOOtFUq23qggG6yKGQm0U69CfXUhIM6xq5rG0yntqHKtj2hlzetFCJH4OvAcqv0eIwc2N1wOjTJVtLpUBwSd98DMVN50RfJMt2F8z01xTEWsa4TCiQmtB8aZ6fzOkeRkIBwDOISfCakLj71buLEie8nntjfb+HCfoSFIx7TcqfNdjkSmmb2f3lDhK7e0mhQwvreBNvuOBQHQNr4UYxvo4UC8gQOexTAbQnXMwHCtVpm1F6vzebdOwo9aGybOFacK1BMUCOnrfIRjcgIrVYbHs4wPtd1ItaUPNXMuKT3MhLoveenRwhilqADUT5BtUQkrDV5TWIJd9238gbFUUBmEMUUogA2gkv44PJ69SYNWCa918acvzUjkgxOlmAP+kpcjtt2Y+OqpYze59ObXCvXXptGYQ8oChGDaR5CEbjICH7QtK1btmy9t20GF4lHBuBL/O1kDJ0FWIuFi0BwnAU0IEu5ZE7xlai/kqmJLFkap5L28kKiyVO2RrpgLaRoadn/0apewQwhPIxJSN6C9SX/rPwGw7+0nCCiVlAAAAAASUVORK5CYII="><span>作品情報</span>
                    <svg v-if="!show2" @click="show2 = true" t="1659509597911" class="icon" viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200" height="200">
                        <path
                            d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                            fill="#3D3D3D" p-id="2998"></path>
                    </svg>
                    <svg v-else @click="show2 = false" t="1659509597911" class="icon icon2" viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200" height="200">
                        <path
                            d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                            fill="#3D3D3D" p-id="2998"></path>
                    </svg>
                </div>
                <div v-show="show2">
                    <div class="sc-hlnMnd dUwcBf">
                        <div class="sc-GVOUr iItKtQ selector">
                            <div class="sc-fXynhf jQGPhK" @click="bDWjLjShow4 = true">
                                <div class="sc-dwLEzm" :class="{ 'iDnLzP': !form2.job_option_type }">{{
                                    form2.job_option_type ? form2.job_option_type :
                                    $t('a97')
                                }} </div><svg t="1659509597911" class="icon" viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200" height="200">
                                    <path
                                        d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                                        fill="#3D3D3D" p-id="2998"></path>
                                </svg>
                            </div>
                            <div class="sc-iBkjds bDWjLj" v-if="bDWjLjShow4">
                                <div class="sc-ftvSup dueZBn" style="opacity: 1;"></div>
                                <div class="sc-papXJ dGrcLk">
                                    <ul>
                                        <div @click="bDWjLjShow4 = false"><span v-text="$t('a82')" >關閉</span></div>
                                        <li v-text="$t('a98')" class="active" @click="form2.job_option_type = $t('a98'), bDWjLjShow4 = false">
                                            自有公司</li>
                                        <li v-text="$t('a99')" class="" @click="form2.job_option_type = $t('a99'), bDWjLjShow4 = false">
                                            辦公室職員
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sc-hlnMnd dUwcBf">
                        <div class="sc-GVOUr iItKtQ selector">
                            <div class="sc-fXynhf jQGPhK" @click="bDWjLjShow5 = true">
                                <div class="sc-dwLEzm" :class="{ 'iDnLzP': !form2.total_option_years }">{{
                                    form2.total_option_years ? form2.total_option_years :
                                    $t('a100')
                                }} </div><svg t="1659509597911" class="icon" viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200" height="200">
                                    <path
                                        d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                                        fill="#3D3D3D" p-id="2998"></path>
                                </svg>
                            </div>
                            <div class="sc-iBkjds bDWjLj" v-if="bDWjLjShow5">
                                <div class="sc-ftvSup dueZBn" style="opacity: 1;"></div>
                                <div class="sc-papXJ dGrcLk">
                                    <ul @click="bDWjLjShow5 = false">
                                        <div @click.stop="bDWjLjShow5 = false"><span v-text="$t('a82')" >關閉</span></div>
                                        <li class="active" @click="form2.total_option_years = '0 - 1'">0 - 1</li>
                                        <li class="" @click="form2.total_option_years = '1 - 3'">1 - 3</li>
                                        <li class="" @click="form2.total_option_years = '3 - 5'">3 - 5</li>
                                        <li    v-text="$t('a101')" class="" @click="form2.total_option_years = $t('a101')">5個或更多</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sc-hlnMnd dUwcBf">
                        <div class="sc-GVOUr iItKtQ selector">
                            <div class="sc-fXynhf jQGPhK" @click="bDWjLjShow6 = true">
                                <div class="sc-dwLEzm " :class="{ 'iDnLzP': !form2.monthly_option_income }">{{
                                    form2.monthly_option_income ? form2.monthly_option_income :
                                    $t('a102')
                                }} </div><svg t="1659509597911" class="icon" viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200" height="200">
                                    <path
                                        d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                                        fill="#3D3D3D" p-id="2998"></path>
                                </svg>
                            </div>
                            <div class="sc-iBkjds bDWjLj" v-if="bDWjLjShow6">
                                <div class="sc-ftvSup dueZBn" style="opacity: 1;"></div>
                                <div class="sc-papXJ dGrcLk">
                                    <ul @click="bDWjLjShow6 = false">
                                        <div @click="bDWjLjShow6 = false"><span  v-text="$t('a82')">關閉</span></div>
                                        <li class="active" @click="form2.monthly_option_income = '0 - 14999'">0 - 14999
                                        </li>
                                        <li class="" @click="form2.monthly_option_income = '15000 - 24999'">15000 -
                                            24999
                                        </li>
                                        <li class="" @click="form2.monthly_option_income = '25000 - 34999'">25000 -
                                            34999
                                        </li>
                                        <li class="" @click="form2.monthly_option_income = '35000 - 44999'">35000 -
                                            44999
                                        </li>
                                        <li   v-text="$t('a103')"  class="" @click="form2.monthly_option_income =   $t('a103')">超過45000</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sc-hlnMnd dUwcBf">
                        <div class="sc-GVOUr iItKtQ selector">
                            <div class="sc-fXynhf jQGPhK" @click="bDWjLjShow7 = true">
                                <div class="sc-dwLEzm" :class="{ 'iDnLzP': !form2.monthly_household_income }">{{
                                    form2.monthly_household_income ? form2.monthly_household_income :
                                    $t('a104')
                                }} </div><svg t="1659509597911" class="icon" viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200" height="200">
                                    <path
                                        d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                                        fill="#3D3D3D" p-id="2998"></path>
                                </svg>
                            </div>
                            <div class="sc-iBkjds bDWjLj" v-if="bDWjLjShow7">
                                <div class="sc-ftvSup dueZBn" style="opacity: 1;"></div>
                                <div class="sc-papXJ dGrcLk">
                                    <ul @click="bDWjLjShow7 = false">
                                        <div @click="bDWjLjShow7 = false"><span   v-text="$t('a82')">關閉</span></div>
                                        <li class="active" @click="form2.monthly_household_income = '0 - 24999'">0 -
                                            24999
                                        </li>
                                        <li class="" @click="form2.monthly_household_income = '25000 - 34999'">25000 -
                                            34999
                                        </li>
                                        <li class="" @click="form2.monthly_household_income = '35000 - 44999'">35000 -
                                            44999
                                        </li>
                                        <li class="" @click="form2.monthly_household_income = '45000 - 54999'">45000 -
                                            54999
                                        </li>
                                        <li    v-text="$t('a105')" class="" @click="form2.monthly_household_income = $t('a105')">55000以上</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sc-kIKDeO czsnHl"  v-text="$t('a106')" @click="setfamily()">確認工作資訊</div>
                </div>
            </div>
            <div v-if="form3Show">
                <div class="sc-ZyCDH lirsN active"><img alt=""
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUAAABWqf5Vqf5WqfhXrP9Vqf4xVHhAd65Ad61Wqf8BdeweiPJZq/////5Uqf6Av//e7v5arP8mjfQUgu8qj/RQpv5MpP1isP87mfhxt/41lfd6vP/1+v7l8f6Fwf52uf5En/rV6f7D4P5stP4Le+0Gk8kCAAAACXRSTlMAvLz4wr1YjIyBc6xRAAAAsklEQVQoz8XSyRKCMBAE0BjXlhEdIYAg7v//jXZkqRwEDx54RU2T6lxSiZnCajEjO2umDX6WazPHoNioDFITjTDbEX+UR4pCXHdpVKXah3LJm1Q1QHbYha7u4uN8An6V7nEI1CdX1cz781MiFhHEPaCJtiyKMkMM4vQ70Zdy5JFeQJEkSZRzUga0ZbIlh1uapqVykutKZDxyKYASRD30pXj4Yvyy+Uw8y69Jhk9rlxszgTfDwhmMeAHw+QAAAABJRU5ErkJggg=="><span>銀行資訊</span>
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
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a107')" v-model="form3.bank_name"></div>
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a108')" v-model="form3.bank_code"></div>
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a109')" v-model="form3.bank_Branch_name"></div>
                    <!-- <div class="sc-jOhDuK iQSHss"><input placeholder="支店番号" v-model="form3.bank_Branch_code" ></div> -->
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a110')" v-model="form3.trade_type"></div>
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a111')" v-model="form3.bank_card_number"></div>
                    <div class="sc-jOhDuK iQSHss"><input :placeholder="$t('a112')" v-model="form3.account_name"></div>
                    <div    v-text="$t('a113')"  class="sc-kIKDeO czsnHl" @click="setbankinfo()">驗證銀行訊息</div>
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
            show2: false,
            show3: false,
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
                // bank_Branch_code: ""
            },
            userInfo: {
                userId: '',
                account: '',
            }
        }
    },
    watch: {
    form1: {
      handler() {
        //判断表单是否填满了
        if (!this.areAllFieldsEmpty(this.form1)) {
          this.show2 = true;
        }
      },
      deep: true,
    },
    form2: {
      handler() {
        //判断表单是否填满了
        if (
          !this.areAllFieldsEmpty(this.form2) &&
          !this.areAllFieldsEmpty(this.form1)
        ) {
          this.show3 = true;
        }
      },
      deep: true,
    },
  },
    created() {
        // this.userInfo = { ...JSON.parse(window.localStorage.getItem('userInfo')) }
        // console.log(window.localStorage.getItem('userInfo').userId)
        // this.form3.account = this.userInfo.account
        // this.getUserInfo()
    },
    methods: {
        getUserInfo() {
            User.getUserInfo({ userId: this.userInfo.userId }).then(res => {
                console.log(res.data.userinfo != null)
                if (res.data.bankInfo != null) {
                    this.form3Show = false
                }
                if (res.data.familyInfo != null) {
                    this.form2Show = false

                }
                if (res.data.userinfo != null) {
                    this.form1Show = false
                }
            })
        },
        areAllFieldsEmpty(obj) {
            let objbool = true;
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
                        objbool = false; // 如果有一个字段不为空，则返回false
                    } else {
                        objbool = true;
                    }
                }
            }
            return objbool; // 如果所有字段都为空，则返回true
        },
        areAllFieldsEmptyTwo(obj) {
            let objbool = true;
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
                        objbool = false; // 如果有一个字段不为空，则返回false
                    } else {
                        objbool = true;
                        return objbool
                    }
                }
            }
            return objbool; // 如果所有字段都为空，则返回true
        },
        setUserInfo() {
            if (this.areAllFieldsEmptyTwo(this.form1)) {
                return Toast('個人情報をご入力ください');
            }
            console.log(this.form1);
            this.form1.age = parseInt(this.form1.age)

            const params = {
                ...this.form1,
                userId: JSON.parse(window.localStorage.getItem('userInfo')).userId,
            }

            User.setuserInfo(params).then(res => {
                if (res.success) {
                    Toast(this.$t('a114'));


                    fbq('track', 'AddToCart');

                    
                    window.localStorage.setItem('userInfo1', JSON.stringify(this.form1))

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
                return Toast(this.$t('a115'));
            }
            const params = {
                ...this.form2,
                userId: JSON.parse(window.localStorage.getItem('userInfo')).userId,
            }

            User.setfamily(params).then(res => {
                if (res.success) {
                    Toast(this.$t('a116'));
                    window.localStorage.setItem('userInfo2', JSON.stringify(this.form2))


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
            if (this.areAllFieldsEmpty(this.form3)) {
                return  Toast(this.$t('a117'));
            }
            const params = {
                ...this.form3,
                userId: JSON.parse(window.localStorage.getItem('userInfo')).userId,
            }

            User.setbankinfo(params).then(res => {
                if (res.success) {
                    Toast(this.$t('a118'));
                    window.localStorage.setItem('userInfo3', JSON.stringify(this.form3))
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
