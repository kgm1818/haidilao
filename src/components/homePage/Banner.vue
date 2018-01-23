<template>
  <div class='banner-box'>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in imgList">
          <img :src='item' />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import { getBannerImg } from '../../services/index.js'

export default {
  data () {
    return {
      imgList: []
    }
  },
  methods: {

  },
  mounted () {
    getBannerImg()
      .then(result => {
        console.log(result)
        this.imgList = result
      })
      .catch(err => {
        console.log(err)
      })
      this.mySwiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      loop: true,
      autoplay: 5000
    })
  },
  updated(){
    this.mySwiper.update()
  }
}
</script>
<style scoped>
.swiper-container {
  width: 100%;
  height: 288px;
}
.swiper-slide img {
  width: 100%;
}
</style>
