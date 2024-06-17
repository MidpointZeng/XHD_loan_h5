<template>
    <div class="">
        <div class="sc-gSAPjG gJborY nav"><span @click="$router.go(-1)" class="sc-jfmDQi bMXkgd"><svg t="1659509597911" class="icon"
                    viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2997" width="200" height="200">
                    <path
                        d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                        fill="#3D3D3D" p-id="2998"></path>
                </svg></span>
            <div class="sc-iNWwEs hGxNKX" v-text="$t('b71')">協議</div>
        </div>
        <div class="img">
            <img :src="imgUrl" alt="">
        </div>
    </div>
</template>

<script>
import User from '@/api/user.js'
export default {
    name: '',
    data() {
        return {
            imgUrl:''
        }
    },
    created() {
        this.getUserContractImg()
    },
    methods: {
        getUserContractImg()
        {
            User.getUserContractImg({contractId:this.$route.query.id}).then(res=>{
                this.imgUrl = res.data
            })
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
.img{
    img{
        width: 100%;
        height: 100%;
    }
}
</style>
