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
}
.mint-swipe-item{
  overflow: hidden;
}
.mint-swipe-item img {
  width: 100%;
}
</style>
