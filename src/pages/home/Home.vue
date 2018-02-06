<template>
  <div>
    <div class="page" id='home'>
      <div id='wrapper-box'>
        <header-com></header-com>
        <banner-com></banner-com>
        <list-com :pagenum="pagenum"></list-com>
        <div class='loadmore'>
          {{bottomStatus}}
        </div>
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
      pagenum: 1,
      bottomStatus: ''
      // bottomStatus: ['上拉显示更多', '正在加载...', '没有更多数据了']
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
    });
    Iscroll.on('scroll', () => {
      if (Iscroll.y <= Iscroll.maxScrollY + 50 && Iscroll.y > Iscroll.maxScrollY) {
        this.bottomStatus = '上拉显示更多';
      } else if (Iscroll.y <= Iscroll.maxScrollY) {
        this.bottomStatus = '释放加载更多';
      }
    })
    Iscroll.on('scrollEnd', () => {
      if (Iscroll.y <= Iscroll.maxScrollY + 50 && Iscroll.y > Iscroll.maxScrollY) {
        this.bottomStatus = '上拉显示更多';
        Iscroll.scrollTo(0, Iscroll.maxScrollY + 50, 200)
      }
      else if (Iscroll.y <= Iscroll.maxScrollY) {
        this.bottomStatus = '正在加载';
        if (flag && this.pagenum < 7) {
          flag = false;
          this.pagenum++;
          this.$event.$emit('pageNum', { pagenum: this.pagenum, addNum: function () { flag = true, this.bottomStatus = '上拉显示更多' } })
        }else{
          this.bottomStatus = '没有更多数据了'
        }
      }
    })
  },
  methods: {
    // handleBottomChange (status) {
    //   this.bottomStatus = status;
    // },
    // loadBottom () {
    // 加载更多数据
    // this.allLoaded = true;// 若数据已全部获取完毕
    // this.$refs.loadmore.onBottomLoaded();
    // }
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
.loadmore {
  height: 50px;
  width: 100%;
  text-align: center;
  line-height: 50px;
  background: #eee;
}
</style>