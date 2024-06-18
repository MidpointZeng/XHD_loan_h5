<template>
  <div class="bankaccount-page">
    <div class="sc-hKMtZM gSsIyS">
      <div class="sc-eCYdqJ eSlzqF">
        <div class="sc-bBXxYQ jrKGZq">
          <div class="sc-cOFTSb fXiYX">
            <!-- userInfo.account -->
            <div style="display: flex;"><span style="flex: 1 1 0%;"><span v-text="$t('b0')"> 客戶, +81</span> {{   0 }}</span>
              <div class="sc-kgUAyh iWVEpr"><img alt=""
                  src="data:image/png;base64,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">
              </div>
            </div>
            <div class="sc-BeQoi VPeDW">
              <div v-text="$t('b1')">錢包餘額: </div>
              <div><span>¥ {{ formatNumber(userInfo2.user_money || 0) }}</span><span class="btn"
                  @click="userInfo2.user_money > 0 ? TXshow = true : ''" v-text="$t('b2')">帳戶提款</span></div>
            </div>
          </div>
        </div>
        <ul class="sc-hTtwUo duOWcT">
          <li @click="$router.push('/info1')"><img alt=""
              src="data:image/png;base64,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"><span v-text="$t('b3')">個人資料</span><svg
              t="1659509597911" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2997"
              width="200" height="200">
              <path
                d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                fill="#3D3D3D" p-id="2998"></path>
            </svg></li>
          <li @click="$router.push('/info2')"><img alt=""
              src="data:image/png;base64,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"><span v-text="$t('b4')">求人信息</span><svg
              t="1659509597911" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2997"
              width="200" height="200">
              <path
                d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                fill="#3D3D3D" p-id="2998"></path>
            </svg></li>
          <li @click="$router.push('/info3')"><img alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAC9FBMVEUAAABEREBFQzwnY8EnYbwpYrwhVLgpYrsmYL4nYrwobNgta8orZrI0TYYnYb0nYr8vc+ApaNImYMAoZcciZNAmZ84tdegtWqQzWpIsXakqb98nYsA6UG8yWp0obd01eOQud/UnYtgrbbYsbNEqX7QkWcUsW6YcargaTuEmY8IgVs84U3omY8Q0gOEsce0vU5ErdPsfW/8lbtYaTN4XPvn///8oYr4yeeri5/YkV6woYbooYb1d0/Iyd+T4+fj///z7+/xQz/FU0fLV9Pxn1vMxd+f++//9/f3g5fTc4PAye+7f4/Izeuv2/f5cz+0qY79rwTv6+voLTLLy8/waQ6Fo6P5KzvEzfPH+///z+f7l6feI3/UjcOgUZecnYb8MTrb09fvs6vgpYroUVLjs7vrQ7/dl0e4aaukkX70aWLonX7cvYLDx9vnb5PZPy+1JyuwlZMiz35teuyr59vrp7Phm4/Vd0fHe4vBJpu4xeezg5vdhl/BSze0raukQYuNPttxBlc9Wg8woYcMmXbRTtxr6///m7vwwfvq1z/jt8PbR3vRWttxCrtgkZc1NfccgXLwuarcRUbMWTqjn6vfb4vXm5fKBrPGH2vA9gesud+qbtt8qa9ERUbgjVKm95Kh3xEzt8fz/+/r6/PlJiOwpc+odbOo4rNd+ntUIPZ/7/f/V3/VX1PNj3/DJ2vDS2u+iueMvct9yl9QjZtQtacp/yFb07PjZ4fKUuPKLs/Ikcu5HxOk2hekbZeJivN9vldRBltBCdMY2bMIrZLvy8fecwfRu2PJrnvCxxOiCotltks49kswUW8wqaLsiXLcWTaVDsAbb9fzW4/mtyfU+h+5Dn+ZGstovcdpLr9YXS6RRtRnN3vvE2frI4/m76vji5/i26PVf1/V93PRa0/J50+yp0upSlelZvuJNvuJ4weEjbN+FpNnF5rOp242Mz2dswjxivjA2qwC/7vrc6ffa6Pe15PM2ffAsc+YraOLe8tTZ7c9Jl81PsRfoM8XxAAAANXRSTlMABwXH02sJgh6uf05EEvjayjnm2dOro4dmZWJWSDIp/Obi19C+uK6dmo5dWfDv2Gjxt7e0cwanNbEAAAkiSURBVFjDnZh3VBNBEMZV7L333nu/eF40CSgxzSCJSowkQQKJICAKikFERUVFQRSxAPbee++99957773948zuEUNOnz6/93gZkrvffbszO7d3uZzKk9sZ5s6TS6jcLr8LTxIyMBRKcA0BI7fQR/6ilSrU9yhbokydkiXL52tSUMD4q4+C+eqVDhQnJGde7qjyU7Xr6De2ZfPCpfDIf2ZUKVTcfDJwFJeJBE07744dvR2aHQ7vkpWLwa9/ZWDU2EMECh21wRs8oIBBPh2qds0r5P8XRlEPMSDEo/ZfRgRltKMCS5qxNSu7n5QHT3T9N3/Dk4SBNmYu9LebTPHx8Sa7/8KZyACcRqVpXdAtEW7IamVTzZTh2GZapFlweNrWLVu2TDu8QLPI5O/Nj+pTzSJ4rJBBVSkTbAAjNNO+aMG0cYnLGEYqZUDLEsdNW7Bz50wNoagcBXImwrU4C6ynjFEntg0d14tBzfftwvAKOz/U3w4YnKSx5f9U3I0ow2fyiaE3GKIuEkk2Q+YLlm4MtftrMFkOFVCEjDy8D5++un3nGSFD4mvAz/MzTCThGqQIGZWyGXuNf2Kg5g6N/4xD0vgVzpXHlYH1UY0yJumORf+WQQOc6K2mhUhRja2ay42RvxbPWBLECIQpojL4SqTMQULxdjQr5ra2GyTQsSwJSCS+e4WNHx8WQAVRLyqgyRiGUKDwdrTK2QZKRZI61R2LitUzTNeMlNR+rqpxYQbRo4NdGdRWExavY0cRugD4cimzn+Q25UBQuIFZlbp06dXTU3idPn366rNt/kQ74y/cJJShO3E9qZoRD3yaGiNDFLJ/ddTyRGbVlKXtc2rWWr/sxWzyJ5TxNfxxcne0RR98qmsjg5ucwcROXdY1dWlOQjaE1ofpQi8svHH2mWilZm4sefJXBBmBk1P00ew5JgMYQieUgYo/yPhKYEB2sOIYW9E5s4XQR6j1iFwxVc+k5IDM4iFOhsb+aL4U6uf6IrDirSqZzShYHBjc5JH6aGNSLyb16u+cIIPKf0cYnVs79hdHdR6SDxl9s9bIY43Le/nOWtpdoPXDvgzL1s6OAQQyzo79RVWYh9RL5TguZN/UuSwbLgv7fnzPnhEjRuzZc/z48REQoS4OcerixSG0VpbNeAbmsseTv3Qgx4ks6+QsyyqiJD2yNWiQM1q5chARBBBSiHRaPOanBh1PUREnFvW1rgGIWj2va2evDiitVtuBarBWO9gl9OpMIDLpuEWY5bFFSLW1iOREokk+q/SsQqnsMgYhnj379+/fkwpDZxQxuAOFwEJM1CxESD5SJRUisVr3skEKZcxUOULu3+s9fXpvKogw5KN79ylEJoGFuMAfIeXIcOonA8Q6MihNqWSX6w0A8TyLa59KOk/qjOYxZz0JxBcZzGE7QjwIpC44gXkNUCsVaUlzGYBEBDsZeDhVF2xunQhESr+cZoI6dtQhkLIihCyJilGw7NQAGI42IvhXD5K59jkKCZsn4xsC1LGGQsogRLckSsGCbvfqHKeN6MRQyeV8QEMKsYXxPrfEQ1NRlSGQEqQdLZGxqFiEeCJE2gUuPr8LcdFlPoQGComzhTFOiLeqYwkCyQsMDiBGYBgV7w/FdSCQ2W/mzJnz+hUDetUNwjezCUQbZ4Ps0OHEe7fzu5yXQDyAwVnWRSGEVSfZvChkwJmBAwdem8OA5vyA8MwAhERo4zrzEClOrGoDzU4hWDliSHE0MtJXDV7BQ65169Zt4Eacjo0DIRyNkOAILV+xBqkUUqzqyNE6KSDmxKTYgKFM32wjEIMLROaESIMjMMUkWVIZFJtfprkAVCyWvZiWPTBi+mx+TCC+zIDRPETudCKTBntSiEEiYRLbLVR5i5IrEkjVZLOILEBgsH3CJ2y/69lJKmFevh09evSZ15jbbmcgfPuSkUhpsSGjCwML0C8zNLkq6bHFapFq2x0VE8Mi5FIHr2C4R30dMHv27AEvfKGwXpDwm0zG8BCJRIYF67c2VNy0GG3UbVJxBe5bHc0SyMQnnlj2vOCSvGCIPGQefrlswbZ2CaHmur/aI4xncoacpU6uPDnrvJHzDLpuXcoe26PfhlEcl0/QqAESu2vilcW3nOvFkHNf8K4nlj1t1IsygVHcudEuJ+agU4fALYNN6/N08fCJu+hey6Uh0LDXIa/B/R/IMLy+LXNUKCculCtbRRNCOZFPFlpRbHq4eDhQPnbqFBwc3InIGd465DlYu/0ONXIiFBiiIrmcyov7TnNWBqOISU/fhZSJ2z3jIjx5RUTwoddgbX+6dMadGIUMunComiSTG7rP6gNK9aak4UAZfmW49m4HkFvP7k/bROKGyRwHp1Rx3YuX9cGthSVlfJ9YdlPSrsWLJ06ceGn7ihUrvLy84uLivHj1325DxrK5KbpA8EGNOPcFpRLEQOF0u2VBCnZT2sOnE1CPbYM7H7LZbJ152R7cMTCGuYn63Tocizm1lAsDBNstMRc4yXJUDpS0TenKzeHh4Zs3J537MD5sDMOMQc2fL2XkieGxsue6U4FwzdSGORm48YOG4AMUmT5WrVSn9aGC8HZAkB6yKj+QFqQ/F748SP7ccioQjdfOTxguqpaAMwWUdfoApVLBUqlj1NC9k5aHx7LK1UlJCrjPBqzTUYa4uhsDVDFSRDaQlpTVvmk8A3zgh9HIKgBsNCqimeUpPIOrLGDA5riwiFDEk/dn6OXRCp5BpYhBc9EyfYaPJZT6KCxk4NQ0QghMb0hWyhG9fK4xxpWhNs6V64+MzAoJ5MhhjX7DoI0y0izmMHdW68g1U6OixgdFG404mvT08XL51DUjrVlcIPdHH9lNIVKEx2Cjy9p3LGNVbFCAjJFHHUhXr16ze581q6+Yo4zKf2RgjvKeNIuIuBCd1WfvyN1Ljh5dd2zkXh+rJcQsooyEvKUED5J53B4kKQMS3ndSiNVi0el0FmvIpL5oAL4ERoP8bm8WhA/WRT1EZsKgwovnCD2KuD+NC5CoKh6R5t8zzKLajcmRbhcWMFBNCjUVid0YkLjihar84Q2HkIEBvnCITI5M4CgrMjm5dN18UOcCxl/esRQjrz7yliiR16NcgYpV8f7yzz4oQ6j/Ybi9RHD5XYj7CdzpUf1uhH1eAAAAAElFTkSuQmCC"><span v-text="$t('b5')">銀行信息</span><svg
              t="1659509597911" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2997"
              width="200" height="200">
              <path
                d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                fill="#3D3D3D" p-id="2998"></path>
            </svg></li>

          <li @click="goLink()"><img alt=""
              src="data:image/png;base64,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"><span v-text="$t('b6')">客戶服務</span><svg
              t="1659509597911" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2997"
              width="200" height="200">
              <path
                d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                fill="#3D3D3D" p-id="2998"></path>
            </svg></li>
          <li @click="$router.push('/info4')"><img alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAC9FBMVEUAAABEREBFQzwnY8EnYbwpYrwhVLgpYrsmYL4nYrwobNgta8orZrI0TYYnYb0nYr8vc+ApaNImYMAoZcciZNAmZ84tdegtWqQzWpIsXakqb98nYsA6UG8yWp0obd01eOQud/UnYtgrbbYsbNEqX7QkWcUsW6YcargaTuEmY8IgVs84U3omY8Q0gOEsce0vU5ErdPsfW/8lbtYaTN4XPvn///8oYr4yeeri5/YkV6woYbooYb1d0/Iyd+T4+fj///z7+/xQz/FU0fLV9Pxn1vMxd+f++//9/f3g5fTc4PAye+7f4/Izeuv2/f5cz+0qY79rwTv6+voLTLLy8/waQ6Fo6P5KzvEzfPH+///z+f7l6feI3/UjcOgUZecnYb8MTrb09fvs6vgpYroUVLjs7vrQ7/dl0e4aaukkX70aWLonX7cvYLDx9vnb5PZPy+1JyuwlZMiz35teuyr59vrp7Phm4/Vd0fHe4vBJpu4xeezg5vdhl/BSze0raukQYuNPttxBlc9Wg8woYcMmXbRTtxr6///m7vwwfvq1z/jt8PbR3vRWttxCrtgkZc1NfccgXLwuarcRUbMWTqjn6vfb4vXm5fKBrPGH2vA9gesud+qbtt8qa9ERUbgjVKm95Kh3xEzt8fz/+/r6/PlJiOwpc+odbOo4rNd+ntUIPZ/7/f/V3/VX1PNj3/DJ2vDS2u+iueMvct9yl9QjZtQtacp/yFb07PjZ4fKUuPKLs/Ikcu5HxOk2hekbZeJivN9vldRBltBCdMY2bMIrZLvy8fecwfRu2PJrnvCxxOiCotltks49kswUW8wqaLsiXLcWTaVDsAbb9fzW4/mtyfU+h+5Dn+ZGstovcdpLr9YXS6RRtRnN3vvE2frI4/m76vji5/i26PVf1/V93PRa0/J50+yp0upSlelZvuJNvuJ4weEjbN+FpNnF5rOp242Mz2dswjxivjA2qwC/7vrc6ffa6Pe15PM2ffAsc+YraOLe8tTZ7c9Jl81PsRfoM8XxAAAANXRSTlMABwXH02sJgh6uf05EEvjayjnm2dOro4dmZWJWSDIp/Obi19C+uK6dmo5dWfDv2Gjxt7e0cwanNbEAAAkiSURBVFjDnZh3VBNBEMZV7L333nu/eF40CSgxzSCJSowkQQKJICAKikFERUVFQRSxAPbee++99957773948zuEUNOnz6/93gZkrvffbszO7d3uZzKk9sZ5s6TS6jcLr8LTxIyMBRKcA0BI7fQR/6ilSrU9yhbokydkiXL52tSUMD4q4+C+eqVDhQnJGde7qjyU7Xr6De2ZfPCpfDIf2ZUKVTcfDJwFJeJBE07744dvR2aHQ7vkpWLwa9/ZWDU2EMECh21wRs8oIBBPh2qds0r5P8XRlEPMSDEo/ZfRgRltKMCS5qxNSu7n5QHT3T9N3/Dk4SBNmYu9LebTPHx8Sa7/8KZyACcRqVpXdAtEW7IamVTzZTh2GZapFlweNrWLVu2TDu8QLPI5O/Nj+pTzSJ4rJBBVSkTbAAjNNO+aMG0cYnLGEYqZUDLEsdNW7Bz50wNoagcBXImwrU4C6ynjFEntg0d14tBzfftwvAKOz/U3w4YnKSx5f9U3I0ow2fyiaE3GKIuEkk2Q+YLlm4MtftrMFkOFVCEjDy8D5++un3nGSFD4mvAz/MzTCThGqQIGZWyGXuNf2Kg5g6N/4xD0vgVzpXHlYH1UY0yJumORf+WQQOc6K2mhUhRja2ay42RvxbPWBLECIQpojL4SqTMQULxdjQr5ra2GyTQsSwJSCS+e4WNHx8WQAVRLyqgyRiGUKDwdrTK2QZKRZI61R2LitUzTNeMlNR+rqpxYQbRo4NdGdRWExavY0cRugD4cimzn+Q25UBQuIFZlbp06dXTU3idPn366rNt/kQ74y/cJJShO3E9qZoRD3yaGiNDFLJ/ddTyRGbVlKXtc2rWWr/sxWzyJ5TxNfxxcne0RR98qmsjg5ucwcROXdY1dWlOQjaE1ofpQi8svHH2mWilZm4sefJXBBmBk1P00ew5JgMYQieUgYo/yPhKYEB2sOIYW9E5s4XQR6j1iFwxVc+k5IDM4iFOhsb+aL4U6uf6IrDirSqZzShYHBjc5JH6aGNSLyb16u+cIIPKf0cYnVs79hdHdR6SDxl9s9bIY43Le/nOWtpdoPXDvgzL1s6OAQQyzo79RVWYh9RL5TguZN/UuSwbLgv7fnzPnhEjRuzZc/z48REQoS4OcerixSG0VpbNeAbmsseTv3Qgx4ks6+QsyyqiJD2yNWiQM1q5chARBBBSiHRaPOanBh1PUREnFvW1rgGIWj2va2evDiitVtuBarBWO9gl9OpMIDLpuEWY5bFFSLW1iOREokk+q/SsQqnsMgYhnj379+/fkwpDZxQxuAOFwEJM1CxESD5SJRUisVr3skEKZcxUOULu3+s9fXpvKogw5KN79ylEJoGFuMAfIeXIcOonA8Q6MihNqWSX6w0A8TyLa59KOk/qjOYxZz0JxBcZzGE7QjwIpC44gXkNUCsVaUlzGYBEBDsZeDhVF2xunQhESr+cZoI6dtQhkLIihCyJilGw7NQAGI42IvhXD5K59jkKCZsn4xsC1LGGQsogRLckSsGCbvfqHKeN6MRQyeV8QEMKsYXxPrfEQ1NRlSGQEqQdLZGxqFiEeCJE2gUuPr8LcdFlPoQGComzhTFOiLeqYwkCyQsMDiBGYBgV7w/FdSCQ2W/mzJnz+hUDetUNwjezCUQbZ4Ps0OHEe7fzu5yXQDyAwVnWRSGEVSfZvChkwJmBAwdem8OA5vyA8MwAhERo4zrzEClOrGoDzU4hWDliSHE0MtJXDV7BQ65169Zt4Eacjo0DIRyNkOAILV+xBqkUUqzqyNE6KSDmxKTYgKFM32wjEIMLROaESIMjMMUkWVIZFJtfprkAVCyWvZiWPTBi+mx+TCC+zIDRPETudCKTBntSiEEiYRLbLVR5i5IrEkjVZLOILEBgsH3CJ2y/69lJKmFevh09evSZ15jbbmcgfPuSkUhpsSGjCwML0C8zNLkq6bHFapFq2x0VE8Mi5FIHr2C4R30dMHv27AEvfKGwXpDwm0zG8BCJRIYF67c2VNy0GG3UbVJxBe5bHc0SyMQnnlj2vOCSvGCIPGQefrlswbZ2CaHmur/aI4xncoacpU6uPDnrvJHzDLpuXcoe26PfhlEcl0/QqAESu2vilcW3nOvFkHNf8K4nlj1t1IsygVHcudEuJ+agU4fALYNN6/N08fCJu+hey6Uh0LDXIa/B/R/IMLy+LXNUKCculCtbRRNCOZFPFlpRbHq4eDhQPnbqFBwc3InIGd465DlYu/0ONXIiFBiiIrmcyov7TnNWBqOISU/fhZSJ2z3jIjx5RUTwoddgbX+6dMadGIUMunComiSTG7rP6gNK9aak4UAZfmW49m4HkFvP7k/bROKGyRwHp1Rx3YuX9cGthSVlfJ9YdlPSrsWLJ06ceGn7ihUrvLy84uLivHj1325DxrK5KbpA8EGNOPcFpRLEQOF0u2VBCnZT2sOnE1CPbYM7H7LZbJ152R7cMTCGuYn63Tocizm1lAsDBNstMRc4yXJUDpS0TenKzeHh4Zs3J537MD5sDMOMQc2fL2XkieGxsue6U4FwzdSGORm48YOG4AMUmT5WrVSn9aGC8HZAkB6yKj+QFqQ/F748SP7ccioQjdfOTxguqpaAMwWUdfoApVLBUqlj1NC9k5aHx7LK1UlJCrjPBqzTUYa4uhsDVDFSRDaQlpTVvmk8A3zgh9HIKgBsNCqimeUpPIOrLGDA5riwiFDEk/dn6OXRCp5BpYhBc9EyfYaPJZT6KCxk4NQ0QghMb0hWyhG9fK4xxpWhNs6V64+MzAoJ5MhhjX7DoI0y0izmMHdW68g1U6OixgdFG404mvT08XL51DUjrVlcIPdHH9lNIVKEx2Cjy9p3LGNVbFCAjJFHHUhXr16ze581q6+Yo4zKf2RgjvKeNIuIuBCd1WfvyN1Ljh5dd2zkXh+rJcQsooyEvKUED5J53B4kKQMS3ndSiNVi0el0FmvIpL5oAL4ERoP8bm8WhA/WRT1EZsKgwovnCD2KuD+NC5CoKh6R5t8zzKLajcmRbhcWMFBNCjUVid0YkLjihar84Q2HkIEBvnCITI5M4CgrMjm5dN18UOcCxl/esRQjrz7yliiR16NcgYpV8f7yzz4oQ6j/Ybi9RHD5XYj7CdzpUf1uhH1eAAAAAElFTkSuQmCC"><span v-text="$t('b7')">銀行金融</span><svg
              t="1659509597911" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2997"
              width="200" height="200">
              <path
                d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                fill="#3D3D3D" p-id="2998"></path>
            </svg></li>
          <li @click="logout()"><img alt=""
              src="data:image/png;base64,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"><span v-text="$t('b8')">登出</span><svg
              t="1659509597911" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2997"
              width="200" height="200">
              <path
                d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                fill="#3D3D3D" p-id="2998"></path>
            </svg></li>
        </ul>
        <div class="sc-jgbSNz cDbcao">Saha Pico Speedy Cach</div>
      </div>
    </div>
    <div class="sc-iBkjds bDWjLj" v-if="TXshow">
      <div class="sc-ftvSup dueZBn" style="opacity: 1;"></div>
      <div class="sc-papXJ dGrcLk">
        <div class="sc-jdAMXn kxIha-D">
          <h2 _msttexthash="11782381" _msthash="75" v-text="$t('b2')">帳戶提款</h2>
          <div style="font-size: 2rem; text-align: center; font-weight: 600;">
            <p class="sc-iTONeN eVDkMI" _msttexthash="15228005" _msthash="76" v-text="$t('b10')">出金金額</p>
            <div style="display: flex; line-height: 2rem;">¥ <div class="sc-iAvgwm kllgrh"
                style="flex: 1 1 0%; margin-left: 1rem;"><input type="number" :placeholder="$t('b11')"
                  v-model="form.money" _mstplaceholder="33208227" _msthash="77"></div>
            </div>
            <div class="sc-iAvgwm kllgrh" style="margin-top: 2rem;"><input type="number" :placeholder="$t('b12')"
                v-model="form.quxian_code" _mstplaceholder="36866518" _msthash="78"></div>
          </div>
          <div class="sc-bZnhIo dbAMMG"><span _msttexthash="7314177" _msthash="79" @click="TXshow = false" v-text="$t('b13')">取消</span><span
              _msttexthash="11782381" _msthash="80" @click="tx" v-text="$t('b2')">帳戶提款</span></div>
        </div>
      </div>
    </div>
    <div class="sc-iBkjds bDWjLj" v-if="failShow">
      <div class="sc-ftvSup dueZBn" style="opacity: 1;"></div>
      <div class="sc-papXJ dGrcLk">
        <div class="sc-jdAMXn kxIha-D">
          <h2 _msttexthash="11782381" _msthash="75" v-text="$t('b2')">帳戶提款</h2>
          <div v-text="$t('b14')">現金出金代碼輸入失敗</div>
          <div class="sc-bZnhIo dbAMMG"><span _msttexthash="7314177" _msthash="79"
              @click="failShow = false" v-text="$t('b13')">取消</span><span _msttexthash="11782381" _msthash="80"
              @click="failShow = false" v-text="$t('b2')">帳戶提款</span></div>
        </div>
      </div>
    </div>
    <div class="sc-iBkjds bDWjLj" v-if="SuccessShow">
      <div class="sc-ftvSup dueZBn" style="opacity: 1;"></div>
      <div class="sc-papXJ dGrcLk">
        <div class="sc-jdAMXn kxIha-D">
          <h2 _msttexthash="11782381" _msthash="75" v-text="$t('b2')">帳戶提款</h2>
          <div v-text="$t('b15')">成功完成出金</div>
          <div class="sc-bZnhIo dbAMMG"><span _msttexthash="7314177" _msthash="79"
              @click="SuccessShow = false" v-text="$t('b13')">取消</span><span _msttexthash="11782381" _msthash="80"
              @click="SuccessShow = false" v-text="$t('b2')">帳戶提款</span></div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import User from '@/api/user.js'
export default {
  name: "bankaccount",
  data() {
    return {
      TXshow: false,
      failShow: false,
      SuccessShow: false,
      userInfo: {
        account: ''
      },
      userInfo2: {
        user_money: 0
      },
      url: '',
      form: {
        // JSON.parse(window.localStorage.getItem('userInfo')).userId
        userId: 0,
        money: 0,
        quxian_code: ''
      }
    };
  },
  created() {
    // this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
    // this.Getsystemconfig()
    // this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      User.getUserInfo({ userId: this.userInfo.userId }).then(res => {
        if (res.data.userinfo) {
          this.userInfo2 = res.data.userinfo
          this.form.money = this.userInfo2.user_money || 0
        }

      })
    },
    Getsystemconfig() {
      User.Getsystemconfig().then(res => {
        this.url = res.data.ke_fu
      })
    },
    logout() {
      window.localStorage.clear()
      this.$router.push('/login')
    },
    goLink() {
      // window.location.href("www.baidu.com")
      window.open(this.url, '_blank')
    },
    tx() {
      User.tx(this.form).then(res => {
        if (res.success) {
          this.SuccessShow = true
        }
        else {
          this.failShow = true
        }
        this.TXshow = false
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
  },
};
</script>

<style lang="scss" scoped>
.bankaccount-page {
  width: 100%;
  height: 100%;


}

.gSsIyS {
  height: 100%;

  .eSlzqF {
    height: 100%;
    padding-bottom: 6.4rem;

    .jrKGZq {
      display: flex;
      background-image: url(../../assets/img/ubg2.42ca55526e1dc8bdb682.png);
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: initial;
      background-origin: initial;
      background-clip: initial;
      background-size: 100%;
      background-color: var(--system-color);
      // height: 22rem;
      padding: 6rem 1.6rem;

      img {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }

      .fXiYX {
        flex: 1 1 0%;
        color: rgb(255, 255, 255);
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 4rem;
        margin-right: 1rem;
        padding-top: 0.5rem;

        .iWVEpr {
          flex: 0 0 6rem;
          height: 6rem;
          border-radius: 3rem;
          overflow: hidden;
        }

        .VPeDW {
          font-size: 1.8rem;
          line-height: 2.5rem;
          margin-top: -1.5rem;

          div {
            display: flex;

            span:first-child {
              flex: 1 1 0%;
            }
          }

          div .btn {
            font-size: 1.2rem;
            background: var(--system-light);
            padding: 0.5rem 1.5rem;
            line-height: 1.5rem;
            border-radius: 1.25rem;
          }
        }
      }
    }

    .duOWcT {
      padding-top: 2rem;
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;
      margin-top: -1.5rem;
      background: rgb(255, 255, 255);

      li {
        display: flex;
        padding: 2rem 3rem;
        line-height: 3rem;

        img:first-child {
          width: 3rem;
          height: 3rem;
        }

        svg {
          width: 2rem;
          height: 2rem;
          margin-top: 0.5rem;
        }

        span {
          flex: 1 1 0%;
          margin-left: 2rem;
          font-size: 1.8rem;
        }
      }
    }

    .cDbcao {
      padding: 4rem 0px;
      text-align: center;
      font-size: 1.6rem;
      color: rgb(153, 153, 153);
      background: rgb(241, 241, 241);
    }
  }
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

.kxIha-D {
  width: 35rem;
  padding: 3rem 1.6rem 2rem;
  background: rgb(255, 255, 255);
  border-radius: 1.2rem;
}

.kxIha-D h2 {
  text-align: center;
  font-size: 2.3rem;
}

.kxIha-D h2+div {
  font-size: 1.5rem;
  padding: 3rem 2rem 2rem;
  color: rgb(92, 92, 92);
}

.eVDkMI {
  text-align: left;
  color: rgb(51, 51, 51);
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.kllgrh {
  border-radius: 1rem;
  border: 1px solid var(--system-color);
}

.kllgrh>input {
  width: 100%;
  font-size: 1.6rem;
  padding: 1rem;
  background: transparent;
  vertical-align: top;
}

.dbAMMG {
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2rem;
}

.dbAMMG>span:first-child {
  color: var(--system-color);
  border: 1px solid var(--system-color);
}

.dbAMMG>span {
  padding: 1.5rem 3.5rem;
  border-radius: 2.6rem;
  background: rgb(255, 255, 255);
}

.dbAMMG>span:last-child {
  color: rgb(255, 255, 255);
  background: var(--system-color);
}

.dbAMMG>span {
  padding: 1.5rem 3.5rem;
  border-radius: 2.6rem;
  background: rgb(255, 255, 255);
}</style>
