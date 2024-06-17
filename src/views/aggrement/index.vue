<template>
    <div id="content">
        <div style="height: 100%;">
            <div class="sc-gSAPjG gJborY nav"><span class="sc-jfmDQi bMXkgd"><svg @click="$router.push('/lend')"
                        t="1659509597911" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                        p-id="2997" width="200" height="200">
                        <path
                            d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                            fill="#3D3D3D" p-id="2998"></path>
                    </svg></span>
                <div class="sc-iNWwEs hGxNKX">アグリメント</div>
            </div>
            <div class="sc-lbxAil jDPmfe fix-height"></div>
            <div style="min-height: 100%; padding: 1.6rem; background: rgb(255, 255, 255);">
                <div>
                    <h1 style="font-size: 18px; text-align: center;">株式会社三井住友銀行（貸款契約）</h1>
                    <div style="margin: 30px 0; border-bottom: 1px dashed #333;">&nbsp;</div>
                    <div style="font-size: 14px;"><span style="font-weight: 600;">日期: </span><span
                            class="r-applicationTime">{{ form.quota_start_time }}</span></div>
                    <div style="font-size: 14px;"><span style="font-weight: 600;">代碼: </span>X3A2998122</div>
                    <div style="font-size: 14px;"><span style="font-weight: 600;">申請者姓名: </span><span
                            class="r-userName">{{ userInfo1.name }}</span></div>
                    <div style="font-size: 14px;"><span style="font-weight: 600;">地址: </span><span class="r-address">{{
                userInfo1.address }}</span></div>
                    <div style="font-size: 14px;"><span style="font-weight: 600;">電話號碼: </span><span
                            class="r-phoneNo">{{ userInfo.account }}</span></div>
                    <div style="font-size: 14px;"><span style="font-weight: 600;">銀行名稱: </span><span class="r-bank">{{
                userInfo3.bank_name }}</span></div>
                    <div style="font-size: 14px;"><span style="font-weight: 600;">銀行卡號碼: </span><span
                            class="r-bankCardNo">{{ userInfo3.bank_code }}</span></div>
                    <div style="font-size: 14px;">&nbsp;</div>
                    <div style="border: 1px dashed #333;">
                        <div style="line-height: 50px; font-size: 18px; font-weight: 600; text-align: center;">契約內容
                        </div>
                        <div style="background: #000; color: #fff; font-weight: 600; padding: 10px;">件名: 株式會社三井住友銀行對月現金貸款申請書<span style="flex: 1; padding: 5px 10px; position: relative;"><span
                                    class="r-period">{{ form.month }}</span></span></div>
                        <div style="padding: 10px;">株式會社三井住友銀行 作為無擔保個人貸款公司，感謝您的選擇。根據以上條件，我們已批准按照以下原則進行貸款：</div>
                    </div>
                    <ul style="padding: 0; border: 1px solid #333; margin-top: 20px;">
                        <li style="display: flex; margin-bottom: 1px;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">貸款類型</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;">分期付款<br><em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                        <li style="display: flex; margin-bottom: 1px;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">貸款期間</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;"><span class="r-period">{{
                form.month }}</span>
                                個月<em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                        <li style="display: flex; margin-bottom: 1px;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">借款金額</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;"><span
                                    class="r-currency">¥</span>
                                <span class="r-loanAmount">{{ form.quota_useing }}</span><em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                        <li style="display: flex; margin-bottom: 1px;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">貸款來源類型</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;">固定利率<br><em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                        <li style="display: flex; margin-bottom: 1px;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">利率</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;"><span class="r-loanRate">{{
                                    form.monthly_interest_rate * 100 }}</span>%
                                /每月<em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                        <li style="display: flex; margin-bottom: 1px;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">懲戒處分通知書的有效性</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;">懲戒處分通知書自發行日起 1 個月內有效<br><em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                        <li style="display: flex; margin-bottom: 0;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">電子貸款合約費用・印花稅（可退還）</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;">10% 日圓<br><em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                    </ul>
                    <ul style="padding: 0; border: 1px solid #333;">
                        <li style="display: flex; margin-bottom: 1px;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">適用於所有稅項、費用和目前關稅的法律規定，必須按照法律要求進行支付</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;">處理費用和相關費用將在貸款前收取。 利息的總額將在貸款期間內支付。<br><em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                        <li style="display: flex; margin-bottom: 0;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">條款和條件規定，從分期付款到期日開始，將按每月0.4%（年利率4.8%）的延遲利息率收取</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;">特別事項：您的貸款已獲株式會社三井住友銀行事先批准。根據情況，我們的合作金融機構可能會對您的信用進行特別檢查，並收取額外費用。<br><em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                    </ul>
                    <div style="padding: 10px; border: 1px solid #333;"><span
                            style="flex: 1; padding: 5px 10px; position: relative;"><span class="r-currency">&nbsp;<span
                                    class="r-userName">{{ userInfo1.name }}</span>様，您同意上述條件後，將直接支付至您申請貸款時指定的薪資銀行帳戶
                                <span class="r-loanAmount">{{ form.quota_useing }}</span><span
                                    class="r-loanAmount">&nbsp;日圓</span></span></span>, 的金額</div>
                    <div style="margin-top: 20px;">
                        <ol>
                            <li>契約事項與條件 / 借款金額</li>
                        </ol>
                        <p>我，作為本合約正面簽署者（以下稱為「借用者」），在此宣誓：</p>
                        <p>借用者將遵守與公司（以下稱為「貸方」）之間的本合約事項與條件。具體事項與條件如下：</p>
                        <p>1)共同信用協議（「同意書」）根據貸方的共同信用協議條款完全生效。信用協議和信用協議運作中，通常契約方需要在契約書和一般信用登記表格中，經公司批准後提供信用（以下稱「客戶」）。
                        </p>
                        <p>2)公司將決定是否承認客戶的信用額度申請。當公司批准客戶的信用額度申請時，公司將通過郵件、電話或其他認可的方式通知客戶其信用額度。</p>
                    </div>
                    <p>2.同意書及貸出條件</p>
                    <p>1. 根據銀行的分析結果，公司在授信給借款人時會考慮風險。借款人需同意進行流動性風險檢查。公司將根據個人借款的分期付款信用歷史來檢查借款金額的最低還款能力，大約佔借款金額的20%至50%（根據信用調查機構的審核可能有所不同）&nbsp;</p>
                    <p>2. 借款人保證不會將借款金額用於無正當理由的非法目的。</p>
                    <p>3.契約終止責任&nbsp;&nbsp;&nbsp;</p>
                    <p>(1)本合約一經簽訂（如未提供審批即視為無效），雙方當事人必須遵守本合約的所有條件和事項。若一方當事人違反合約的條件和事項，則另一方當事人有權向法院提起訴訟，雙方當事人都無異議的情況下，違約當事人需支付借款金額的50%作為違約金。</p>
                    <p>(2)借款人需保證借款金額不會用於國家禁止的非法目的。</p>
                    <p>(3)借款人必須在合約約定的期限內還清借款金額。若借款人希望延長借款期限，需在原定還款期限前5天向貸方提出申請。若借款人希望提前還清借款金額，需在下一個還款期限的前5天向貸方提交申請。</p>
                    <p>4.借款人經批准借款後，若有信用記錄較差的合格客戶，貸方需先進行身份確認。無法通過帳戶轉帳方式進行支付的借款人需聯繫客戶服務完成預付款的支付。借款人僅在首次支付後方可確認支付</p>
                    <p>5.據日本金融系統規定，貸方需承擔借款人有擔保借款金額的風險，並確認合格借款人的個人最低還款能力。借款人需將借款金額的20%至50%轉入其自己的帳戶。銀行將在批准後30分鐘內將款項轉至借款人指定的帳戶。若借款人未遵守合約條件，公司將視為重大故意詐騙，並將根據法律被日本法院起訴和處罰</p>
                    <p>6.若借款人未履行合約，則需承擔貸方的損失。因此，借款人應根據其証據承擔所有費用，包括訴訟費用、律師費用、律師費用的退款以及其他必須支付的費用。借款人應確認貸方已閱讀並理解合約文件</p>
                    <p>7.雙方當事人有權終止基於本合約的義務。一方當事人終止合約且另一方當事人需支付補償金的情況下，必須至少於7天前以書面通知對方當事人。此外，終止合約的當事人需支付與授信額度50%相關的違約金。雙方當事人應立即開始執行本合約的目的以獲得法律保護</p>
                    <p>8.保證條件：與三井住友銀行共同發行借款金額。借款人在借款期間需：①按期支付利息，②在期限內還清本金，③遵守並履行所有合約條件。若違反上述條件，借款人將被視為有不良個人信用記錄，由銀行信用系統製成。</p>
                    <h2 style="font-size: 15px;">退款與取消政策</h2>
                    <div style="padding: 10px; border: 1px dashed #333;">任何額外支付將與相應的貸款一起退還。一旦貸款金額存入銀行帳戶，服務將無法取消。</div>
                    <div style="display: flex; margin-top: 20px;">
                        <div style="flex: 1; position: relative; padding-bottom: 20px;">
                            <div style="font-size: 16px; font-weight: 600;">三井住友銀行</div>
                            <div style="font-size: 17px; font-weight: 600; margin-top: 80px; text-align: center;">簽名
                            </div>
                            <div
                                style="position: absolute; top: 0; left: 0; width: 100%; height: calc(100% - 80px); z-index: 2;">
                                <img style="object-fit: contain; width: 70%;height:100%" crossOrigin="Anonymous"
                                    src="https://jp1129.com/app-api/profile/upload/2024/02/24/1.Stamp_20240224232704A286.png">
                            </div>
                        </div>
                        <div style="flex: 1; position: relative; padding-bottom: 20px; margin-left: 20px;">
                            <div style="font-size: 16px; font-weight: 600;">借款人</div>
                            <div
                                style="position: absolute; top: 30px; left: 0; width: 100%; height: calc(100% - 80px); z-index: 2;">
                                <img style="object-fit: contain; width: 100%; display: none;" src="###signature###">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <button id="download-pdf" @click="download()">Download PDF</button> -->
    </div>
</template>


<script>
import html2canvas from 'html2canvas';
import { eventBus } from '@/main.js';

export default {
    name: '',
    props: { form2: {
        quota_start_time:'',
            com_date: '',
                order_id: '',
                account_name: '',
                address: '',
                account: '',
                bank_name: '',
                bank_code: '',
                quota_useing_date: '',
                quota_useing: '',
                monthly_interest_rate: '',
    } },
    data() {
        return {
            form: {
                com_date: '',
                order_id: '',
                account_name: '',
                address: '',
                account: '',
                bank_name: '',
                bank_code: '',
                quota_useing_date: '',
                quota_useing: '',
                monthly_interest_rate: '',
            },
            userInfo: {},
            userInfo1: {},
            userInfo2: {},
            userInfo3: {},
        }
    },
    created() {
    // console.log(this.form)


        if (this.$route.query.form) {
            this.form = JSON.parse(this.$route.query.form)
        }
        else{
            this.form = this.form2

        }
        this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        this.userInfo1 = JSON.parse(window.localStorage.getItem('userInfo1'))
        this.userInfo2 = JSON.parse(window.localStorage.getItem('userInfo2'))
        this.userInfo3 = JSON.parse(window.localStorage.getItem('userInfo3'))
    },
    mounted() {
        this.download()
    },
    methods: {
         download() {
            var element = document.getElementById('content');
            html2canvas(element).then(canvas => {
                canvas.toBlob(blob => {
        if (blob) {
            // 创建 FormData 对象
            const formData = new FormData();

            // 将 Blob 对象添加到 FormData 中
            formData.append('pdf', blob, 'screenshot.png');
            eventBus.$emit('formData-updated', formData);
        }})

});
//             console.log(element)
//             html2pdf().from(element).outputPdf().then(pdf => {
//     console.log('PDF 生成成功:', pdf); // 在这里确认 PDF 是否成功生成
//     const pdfBlob = new Blob([pdf], { type: 'application/pdf' });
//     const pdfFile = new File([pdfBlob], 'aggrement.pdf', { type: 'application/pdf' });
//     const formData = new FormData();
//     formData.append('pdf', pdfFile);
//             eventBus.$emit('formData-updated', formData);

//     console.log('FormData 中的 PDF 文件:', formData.get('pdf')); // 在这里确认 PDF 是否被添加到 FormData 中
// }).catch(error => {
//     console.error('PDF 生成失败:', error);
// });
//              html2pdf().from(element).save('aggrement.pdf');
//             const pdfFile = new File(['aggrement.pdf'], 'aggrement.pdf', { type: 'application/pdf' });
//             // 创建 FormData 对象
//             const formData = new FormData();
//             // 将 PDF 文件添加到 FormData 对象
//             formData.append('pdf', pdfFile);
//             const fileSize = pdfFile.size;
// console.log("文件大小:", fileSize, "字节");
//             eventBus.$emit('formData-updated', formData);
//             console.log(formData.get('pdf'),'pdf')
//             window.localStorage.setItem('pdf',JSON.stringify(formData.get('pdf')))

//             // window.localStorage.setItem('contract_file', JSON.stringify(formData));
//             const formDataObject = Array.from(formData.entries())
//             const formDataJSON = JSON.stringify(formDataObject);
//             console.log(formDataJSON,'formDataJSON')

//             window.localStorage.setItem('contract_file', formDataJSON);
//             html2canvas(element).then(canvas => {
//         // 将 Canvas 转换为图片数据
//         const imageData = canvas.toDataURL('image/png');

        
//         const filename = element.getAttribute('data-filename') || 'default_filename.png';
//         // 这里可以将图片数据发送到服务器或者进行其他处理
//         console.log('图片数据:', filename);
//         window.localStorage.setItem('contract_img',JSON.stringify(filename));

//       });
        }
    }
}
</script>

<style scoped lang="scss">
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

    svg {
        width: 2rem;
        height: 3rem;
        transform: rotate(180deg);
        transform-origin: center center;
    }
}

.bMXkgd {
    position: relative;
    z-index: 2;
    padding: 1rem;
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
</style>
