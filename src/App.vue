<template>
    <div id='app'>
        <router-view></router-view>
        <nav class='nav-box'>
            <router-link to="/home">首页</router-link>
            <router-link to="/discover">发现</router-link>
            <router-link to="/order">订单</router-link>
            <router-link to="/me">我的</router-link>
        </nav>
    </div>

</template>

<script>

export default {

}
</script>

<style scoped>
.router-link-active{
    background:lightblue;
    color: lightcoral;
}
.nav-box {
  height: 49px;
  line-height: 49px;
  width: 100%;
  background: lavenderblush;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
}
.nav-box:before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid lightblue;
  position: absolute;
  left: 0;
  top: -1px;
  transform: scaleY(0.5);
}
.nav-box a {
  flex: 1;
  text-align: center;
}
.page{
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 49px;
}
</style>