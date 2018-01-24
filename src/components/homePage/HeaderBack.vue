<template>
  <mt-header title="美食互动">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
    <mt-button slot="right">
      <img src='static/images/Rshare.png' />
    </mt-button>
  </mt-header>
</template>
<script>
export default {
  methods:{
    // handleClose(){
    //   console.log('3333')
    // }
  }
}
</script>
<style scoped>
.mint-header{
  background: #fff;
  color: #272727;
}
.mint-button-text img{
  width: 20px;
}
.mint-header .mint-button{
  color: #d43d3d;
}
</style>

