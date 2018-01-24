<template>
    <div id='app'>
        <router-view></router-view>
    </div>

</template>

<script>

export default {
    methods: {
        // handlerPush(val){
        //     console.log('dfd000')
        //     console.log(val)
        // }
    }
}
</script>

<style>
.router-link-active {
  color: #666;
}
.nav-box {
  height: 49px;
  width: 100%;
  background: #fff;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
}
.nav-box:before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #666;
  position: absolute;
  left: 0;
  top: -1px;
  transform: scaleY(0.5);
}
.nav-box a {
  flex: 1;
  text-align: center;
}
.nav-box a img {
  width: 28px;
  height: 28px;
  overflow:hidden;
  margin-top: 3px; 
}
.nav-box a span {
  font-size: 12px;
  display: block;
  margin-top: -5px;
}
.page {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>