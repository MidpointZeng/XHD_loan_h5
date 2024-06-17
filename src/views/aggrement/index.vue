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
                    <h1 style="font-size: 18px; text-align: center;">株式会社みずほ銀行（ローン契約）</h1>
                    <div style="margin: 30px 0; border-bottom: 1px dashed #333;">&nbsp;</div>
                    <div style="font-size: 14px;"><span style="font-weight: 600;">日付: </span><span
                            class="r-applicationTime">{{ form.quota_start_time }}</span></div>
                    <div style="font-size: 14px;"><span style="font-weight: 600;">コード: </span>X3A2998122</div>
                    <div style="font-size: 14px;"><span style="font-weight: 600;">申請者の氏名: </span><span
                            class="r-userName">{{ userInfo1.name }}</span></div>
                    <div style="font-size: 14px;"><span style="font-weight: 600;">住所: </span><span class="r-address">{{
                userInfo1.address }}</span></div>
                    <div style="font-size: 14px;"><span style="font-weight: 600;">電話番号: </span><span
                            class="r-phoneNo">{{ userInfo.account }}</span></div>
                    <div style="font-size: 14px;"><span style="font-weight: 600;">銀行の名称: </span><span class="r-bank">{{
                userInfo3.bank_name }}</span></div>
                    <div style="font-size: 14px;"><span style="font-weight: 600;">銀行のカードの番号: </span><span
                            class="r-bankCardNo">{{ userInfo3.bank_code }}</span></div>
                    <div style="font-size: 14px;">&nbsp;</div>
                    <div style="border: 1px dashed #333;">
                        <div style="line-height: 50px; font-size: 18px; font-weight: 600; text-align: center;">契約内容
                        </div>
                        <div style="background: #000; color: #fff; font-weight: 600; padding: 10px;">件名: 株式会社みずほ銀行に対する
                            月の現金貸借申請書<span style="flex: 1; padding: 5px 10px; position: relative;"><span
                                    class="r-period">{{ form.month }}</span></span></div>
                        <div style="padding: 10px;">株式会社みずほ銀行 を無担保個人ローン会社としてお選びいただき、ありがとうございます。
                            上記の条件に従い、以下の原則通りに貸付を承認したことをお知らせします:</div>
                    </div>
                    <ul style="padding: 0; border: 1px solid #333; margin-top: 20px;">
                        <li style="display: flex; margin-bottom: 1px;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">ローンの種類</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;">分割払い<br><em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                        <li style="display: flex; margin-bottom: 1px;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">貸出期間</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;"><span class="r-period">{{
                form.month }}</span>
                                ヶ月<em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                        <li style="display: flex; margin-bottom: 1px;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">借入金額</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;"><span
                                    class="r-currency">¥</span>
                                <span class="r-loanAmount">{{ form.quota_useing }}</span><em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                        <li style="display: flex; margin-bottom: 1px;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">ローン借入先の種類</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;">固定金利型<br><em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                        <li style="display: flex; margin-bottom: 1px;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">利率</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;"><span class="r-loanRate">{{
                                    form.monthly_interest_rate * 100 }}</span>%
                                /1か月<em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                        <li style="display: flex; margin-bottom: 1px;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">懲戒処分通知書の有効性</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;">懲戒処分通知書の発行日から 1
                                か月以内に有効があります<br><em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                        <li style="display: flex; margin-bottom: 0;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">電子ローン契約料・印紙税（返金れます）</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;">10% 円<br><em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                    </ul>
                    <ul style="padding: 0; border: 1px solid #333;">
                        <li style="display: flex; margin-bottom: 1px;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">適用されるすべての税金、手数料、および現行関税は、法律通りに支払いを義務付けられます</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;">処理手数料と該当する手数料は、貸す前に前に請求されます。
                                利息の合計額は、借入期間にわたり支払われます<br><em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                        <li style="display: flex; margin-bottom: 0;"><span
                                style="flex: 1; padding: 5px 10px; position: relative; color: #fff; background: #333;">観察した。
                                条件・事項によると、分割払いの期限が来た日から、支払遅延に対する遅延利息の率が1か月0.4％（1年4.8％）という率で請求されます</span><span
                                style="flex: 1; padding: 5px 10px; position: relative;">特殊事項: あなたローンは
                                株式会社みずほ銀行によって事前承認されています。 場合によっては、私たちの提携金融機関があなたの信用に対する特別なチェックを行い、追加料金を請求することがあります<br><em
                                    style="position: absolute; height: 1px; background: #333; width: 100%; left: 0; bottom: -1px;">&nbsp;</em></span>
                        </li>
                    </ul>
                    <div style="padding: 10px; border: 1px solid #333;"><span
                            style="flex: 1; padding: 5px 10px; position: relative;"><span class="r-currency">&nbsp;<span
                                    class="r-userName">{{ userInfo1.name }}</span>様、上記の条件に同意した後、ローンを申し込んだときに指定した給与銀行口座に
                                <span class="r-loanAmount">{{ form.quota_useing }}</span><span
                                    class="r-loanAmount">&nbsp;円</span></span></span>, の金額を直接支払います</div>
                    <div style="margin-top: 20px;">
                        <ol>
                            <li>契約の事項と条件/借入金額</li>
                        </ol>
                        <p>本契約の前面にある署名者である私(以下「借用者」という) は、</p>
                        <p>借用者が会社 (以下「貸主」という)と本契約の事項・条件に従うことを宣誓します。具体的な事項・条件は以下のようです。</p>
                        <p>1)共通ローテーションの信用契約(「同意書」) は、貸主の共通ローテーションの信用同意書&nbsp;(「項目」)
                            に従って完全な効力を有します。&nbsp;信用契約およびローテーション運用では、通常、契約当事者は、契約書及び一般的なローテーション信用登録書において、（以下「依頼・同意書」という）会社による承認後にクレジットを提供する必要があります&nbsp;（以下、「お客様」という）。
                        </p>
                        <p>2)会社は、与信限度額を認めるかどうかを決定します。 会社が顧客の与信限度申請書を承認したとき、会社は、郵便、電話、またはその他の認められた手段で顧客に与信枠を通知します。</p>
                    </div>
                    <p>2.同意書及び貸し出す条件</p>
                    <p>1. 銀行の分析結果によると、同社は借り手に与信枠を付与する際にリスクを考慮します。
                        借り手は、&nbsp;流動性リスクのチェックに同意する必要があります。会社は、個人的な借入の分割払いの信用履歴を作成するため、借入金の約 20% から 50%
                        (信用調査機関の審査により違うことがある) の借り手の最低支払能力をチェックします。&nbsp;</p>
                    <p>2. 借り手は、借入金額が理由なく違法な目的に使用されないことを保証します。</p>
                    <p>3.契約を終了する責任&nbsp;&nbsp;&nbsp;</p>
                    <p>(1)本契約が締結された後 (検討のために提出されない場合、無効とみなされます)、両当事者は本契約のすべての条件・事項を遵守しなければなりません。
                        一方の当事者が本契約の条件・事項に違反した場合、他方の当事者は裁判所に訴訟を起こす権利が&ZeroWidthSpace;&ZeroWidthSpace;あり、双方に異議がなかったうえで、違反した当事者は借入金額の
                        50% の違約金を支払わなければなりません。</p>
                    <p>(2)借り手は、借入金額が国家によって禁止されている違法な目的に使用されていないことを保証しなければなりません。</p>
                    <p>(3)借り手は、契約で合意された期限までに借入金額を返済しなければなりません。 借り手が借入の期間の延長を希望する場合は、借入の有効期限が切れる 5 日前に貸し手に申請する必要があります。
                        借り手が期限前に借入金額を返済したい場合は、次の返済期限の5日前までに申請書を貸し手に提出する必要があります。</p>
                    <p>4.借り手が借りることを承認された後、信用記録が悪い一部の適格な顧客の場合、貸し手は最初に身元を確認する必要があります。
                        口座振替で支払うことができない借り手は、顧客&nbsp;サービスに連絡して、前払金の支払いを完了する必要があります。 借り手は、最初の支払いを行った後のみ、支払いを確認できます</p>
                    <p>5. 日本の金融システムの規定によると、貸し手は借り手の有担保借入金額に対するリスクを負い、適格な借り手の個人の最低返済能力を確認する必要があります。借り手は、借入金額の&nbsp;
                        &nbsp;
                        20% から 50% を自分の口座に入金する必要があります。銀行の承認済みから 30 分後に、銀行は借り手の契約で指定された口座に送金します。
                        契約が締結された後に借り手が契約条件を遵守しない場合、会社は重大な故意詐欺とみなされ、日本裁判所によって起訴され、法律に従って処罰されます。</p>
                    <p>6.借り手が契約を履行しなかった場合、借り手は貸し手によって生じた損失を負担する必要があります。
                        これにより、借り手は借り手の証拠に基づいて、訴訟費用、弁護士費用、弁護士費用の払い戻し、およびその他の支払う必要のある費用を含む、発生したすべての費用を確認できます。
                        借り手は、貸し手が契約文書を読んで理解したことを返信します</p>
                    <p>7.両当事者は、本契約に基づく義務を終了する権利を有します。 一方の当事者が契約を終了したが、他方の当事者に補償を支払う義務がある場合、少なくとも
                        7日前までに書面で他方の当事者に通知する必要があります。 また、契約を終了する当事者は、与信限度額の50% の違約金を支払わなければなりません。
                        両当事者は、法的保護を得るために、本契約の目的を直ちに実行し始めなければなりません。</p>
                    <p>8.保証条件: と みずほ銀行 の共同により、借入金額を発行されます。 借りる期間中、借り手は①期限内に利息を支払い、期限内に元本を支払う③契約のすべての条件を満たし、遵守する必要があります。
                        上記の点に違反すると、借り手は銀行の信用システムによって作成された悪い個人信用記録を持つことになります。</p>
                    <h2 style="font-size: 15px;">返金とキャンセル政策</h2>
                    <div style="padding: 10px; border: 1px dashed #333;">なんでもの追加の支払いは、対照するローンと共に払い戻されます。
                        ローン金額が銀行口座に入金されると、サービスはキャンセルされません</div>
                    <div style="display: flex; margin-top: 20px;">
                        <div style="flex: 1; position: relative; padding-bottom: 20px;">
                            <div style="font-size: 16px; font-weight: 600;">株式会社みずほ銀行</div>
                            <div style="font-size: 17px; font-weight: 600; margin-top: 80px; text-align: center;">署名
                            </div>
                            <div
                                style="position: absolute; top: 0; left: 0; width: 100%; height: calc(100% - 80px); z-index: 2;">
                                <img style="object-fit: contain; width: 70%;height:100%" crossOrigin="Anonymous"
                                    src="https://jp1129.com/app-api/profile/upload/2024/02/24/1.Stamp_20240224232704A286.png">
                            </div>
                        </div>
                        <div style="flex: 1; position: relative; padding-bottom: 20px; margin-left: 20px;">
                            <div style="font-size: 16px; font-weight: 600;">借り手</div>
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
