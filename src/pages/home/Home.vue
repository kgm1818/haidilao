<template>
  <div>
    <div class="page" id='home'>
      <div id='wrapper-box'>
        <header-com></header-com>
        <banner-com></banner-com>
        <list-com :pagenum='pagenum' @getPagenum='getPagenum'></list-com>
      </div>
      <nav class='nav-box'>
        <router-link to="/numeral">
          <img src='static/images/numeral.png' />
          <span> 排号</span>
        </router-link>
        <router-link to="/meal">
          <img src='static/images/meal.png' />
          <span> 订餐</span>
        </router-link>
        <router-link to="/more">
          <img src='static/images/more.png' />
          <span> 更多</span>
        </router-link>
        <router-link to="/me">
          <img src='static/images/my.png' />
          <span> 我的</span>
        </router-link>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
// import Header from '../../components/homePage/Header.vue'
import Header from '../../components/homePage/Header.vue'
import Banner from '../../components/homePage/Banner.vue'
import List from '../../components/homePage/List.vue'

let flag = true
export default {
  data () {
    return {
      isShow: true,
      pagenum: 1
    }
  },
  components: {
    'header-com': Header,
    'banner-com': Banner,
    'list-com': List
  },
  mounted () {
    let Iscroll = new IScroll('#home', {
      probeType: 3
    })
    Iscroll.on('scrollStart', () => {
      Iscroll.refresh();
      var scrollHeight = document.getElementById('wrapper-box').offsetHeight - document.body.clientHeight + 49;
      console.log(scrollHeight)
    });
    Iscroll.on('scrollEnd', () => {
      console.log(Iscroll)
      console.log(document.body.clientHeight)
      if (Iscroll.y <= Iscroll.maxScrollY) {
        console.log('加载下一页')
        if (flag) {
          flag = false;
          this.pagenum++;
          console.log(this.pagenum);
        };
      }
    })
  },
  methods: {
    getPagenum (val) {
      flag = true;
    }
  }
}
</script>
<style scoped>
.mint-header {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  top: 15px;
  background: rgba(0, 0, 0, 0);
}
</style>