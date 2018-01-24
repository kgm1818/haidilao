<template>
  <mt-header>
    <mt-button slot="right">
      <img src='static/images/sao.png' class='img left' />
      <img src='static/images/kf_home.png' class='img' />
    </mt-button>
  </mt-header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      textVal: ''
    }
  },
  computed: mapState(['num']),
  beforeCreate () {
    console.log('header,beforeCreate....')
  },
  created () {
    console.log('header,created....')

  },
  beforeMount () {
    console.log('header,beforeMount....')
  },
  mounted () {
    console.log('header,mounted....')
  },
  beforeUpdate () {
    console.log('header,beforeUpdate....')
  },
  updated () {
    console.log('header,updated....')
  },
  activated () {
    console.log('header,activated....')
  },
  deactivated () {
    console.log('header,deactivated....')
  },
  beforeDestroy () {
    console.log('header,beforeDestroy....')
  },
  destroyed () {
    console.log('header,destroyed....')
  }

}
</script>
<style>
.mint-button-text .img{
  width: 40px;
  height: 40px;
}
.mint-button-text .img.left{
  margin-right: 10px;
}
</style>


