<template>
    <div class="swiper-main">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in swiperList" :key="index">
            <img :src="item.imgUrl" alt="">
            </swiper-slide>
            
        </swiper>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
// 引入Swiper插件
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
    name: 'Swiper',
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperList: [
                {
                    id: 1,
                    imgUrl: "./images/swiper1.jpeg"
                },
                {
                    id: 2,
                    imgUrl: "./images/swiper2.jpeg"
                },
                {
                    id: 3,
                    imgUrl: "./images/swiper3.jpeg"
                }
            ],
            swiperOption: { //swiper3
             autoplay: 3000,
             speed: 1000,
             pagination: {
                el: '.swiper-pagination',
                clickable: true
             }
        }
        }
        
    }
}
</script>
<style scoped>
.swiper-main {
    width: 100%;
    height: 4.4rem;
    margin-top: 3rem;


}
.swiper-main img {
    width: 100%;
    height: 4.4rem;
}
.swiper-pagination {
    position: absolute;
    right: 0;
    top: 6.5rem;
}
</style>