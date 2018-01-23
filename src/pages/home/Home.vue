<template>
  <div class="page">
   <banner-com></banner-com>
  </div>
</template>
<script>
// import Header from '../../components/homePage/Header.vue'
import Banner from '../../components/homePage/Banner.vue'
import List from '../../components/homePage/List.vue'
export default {
  data () {
    return {
      isShow: true
    }
  },
  components: {
    // 'header-com': Header,
    'banner-com': Banner,
    'list-com': List
  },
  beforeCreate () {
    console.log('home,beforeCreate....')
  },
  created () {
    console.log('home,created....')
  },
  beforeMount () {
    console.log('home,beforeMount....')
  },
  mounted () {
    console.log('home,mounted....')
  },
  beforeUpdate () {
    console.log('home,beforeUpdate....')
  },
  updated () {
    console.log('home,updated....')
  },
  activated () {
    console.log('home,activated....')
  },
  deactivated () {
    console.log('home,deactivated....')
  },
  beforeDestroy () {
    console.log('home,beforeDestroy....')
  },
  destroyed () {
    console.log('home,destroyed....')
  },
  methods:{

  }
}
</script>
<style scoped>

</style>