<template>
  <div class='banner-box'>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in imgList">
        <img :src='item' />
      </mt-swipe-item>
    </mt-swipe>
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
  },
  updated () {
  }
}
</script>
<style scoped>
.banner-box {
  width: 100%;
  height: 288px;
  overflow: hidden;
}
.mint-swipe-item{
 height: 100%;
 width: 100%;
 overflow: hidden;
}
.mint-swipe-item img {
  max-width: 100%;
  max-height:100%;
}
</style>
