<template>
  <div class='header-box'>
    <input v-model="textVal" type="text" />
    <div>{{this.num}}</div>
  </div>
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

</style>


