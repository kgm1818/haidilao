<template>
  <div class='page' id='food-detail'>
    <header-com></header-com>
    <div class='food-content-box'>
      <div class='food-content-wraper'>
        <div class='food-content-wa'>
          <p class='start-date'>{{detailInfo.start_date}}</p>
          <h3 class='maintitle'>{{detailInfo.maintitle}}</h3>
          <p class='creator'>
            <img src='static/images/food-logo.png' />
            <span>{{detailInfo.creator_name}}</span>
          </p>
          <div v-html='detailInfo.content' class='food-content'></div>
          <p class='comm-box'>
            <span>阅读 {{detailInfo.comm_num}}</span>
            <span>
              <img src='static/images/thumbUp.png' /> {{detailInfo.fond_num}}
            </span>
          </p>
        </div>
        <div class='footer-box'>
          <p class='comm-title'>
            评论 0
          </p>
          <ul class='food-message'>
            <li v-for='item in comments'>
              <div class='food-message-pic'>
                <img :src='item.headimg' />
              </div>
              <div class='food-message-info'>
                <p>
                  <span class='seller-name'>{{item.nickname}}</span>
                  <span class='order-time'>{{item.surplus_hour}}</span>
                </p>
                <p>{{item.message}}</p>
                <div class='thumbup-comment'>
                  <span>
                    <img src='static/images/thumbUp.png' /> {{item.good_num}}
                  </span>
                  <span>
                    <img src='static/images/leavemessage.png' />
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <p class='not-more'>{{loadingMsg}}</p>
        </div>
      </div>
    </div>
    <footer class='food-footer'>
      <mt-button size='large' type='danger'>
        <img src="static/images/writecomment.png" height="20" width="20" slot="icon"> 写评论
      </mt-button>
    </footer>
  </div>
</template>
<script>
import HeaderBack from '../../components/homePage/HeaderBack.vue'
import { getFoodDetail, getFoodComment } from '../../services/index'
export default {
  data () {
    return {
      detailInfo: {
        start_date: '',
        maintitle: '',
        creator_name: '',
        content: '',
        comm_num: '',
        fond_num: '',
        myscroll: null
      },
      comments: [],
      loadingMsg: '上啦加载更多',
      totalPages: 0,
      pagenum: 1,
      flag: true
    }
  },
  components: {
    'header-com': HeaderBack
  },
  mounted () {
    getFoodDetail(this.$route.params.id)
      .then(result => {
        this.detailInfo = result

      })
    getFoodComment(5, this.pagenum, this.$route.params.id)
      .then(result => {
        this.comments = result.data;
        this.totalPages = result.totalPages
      })
    this.$nextTick(() => {
      this.myscroll = new IScroll('.food-content-box', {
        probeType: 3
      })
      this.myscroll.on('scrollStart', () => {
        this.myscroll.refresh();
      })
      this.myscroll.on('scroll', () => {
        if (this.myscroll.y <= this.myscroll.maxScrollY + 50 && this.myscroll.y > this.myscroll.maxScrollY) {
           if (this.pagenum > this.totalPages) {
               this.loadingMsg = '上啦加载更多'
            }
        } else if (this.myscroll.y < this.myscroll.maxScrollY) {
            if (this.pagenum > this.totalPages) {
              this.loadingMsg = '释放可加载更多'
            }
        }
      })
      this.myscroll.on('scrollEnd', () => {
        if (this.myscroll.y <= this.myscroll.maxScrollY + 50 && this.myscroll.y > this.myscroll.maxScrollY) {
          this.myscroll.scrollTo(0, this.myscroll.maxScrollY, 100)
        } else if (this.myscroll.y <= this.myscroll.maxScrollY) {
          this.loadingMsg = '正在加载。。。'
          if (this.flag) {
            this.flag = false;
            if (this.pagenum > this.totalPages) {
               this.loadingMsg = '没有更多数据了'
              return
            }
            getFoodComment(5, this.pagenum, this.$route.params.id)
              .then(result => {
                this.comments = this.comments.concat(result.data);
                this.flag = true;
                this.pagenum++
              })
          }
        }
      })
    })


  }
}
</script>
<style>
#food-detail {
  background: #eee;
  bottom: 0;
}
.food-content-box {
  position: absolute;
  left: 0;
  top: 40px;
  bottom: 50px;
  overflow: hidden;
}
.food-content-wraper {
  margin-top: 10px;
}
.food-content-wa {
  background: #fff;
  padding: 30px 18px 10px;
}
.start-date {
  font-size: 12px;
  color: #afafaf;
  margin-bottom: 10px;
}
.maintitle {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #272727;
}
.creator {
  line-height: 30px;
  margin-bottom: 20px;
}
.creator img {
  max-width: 30px;
  margin-right: 20px;
  vertical-align: top;
}
.creator span {
  color: #d43d3d;
  font-size: 12px;
}
.food-content-box .food-content img {
  max-width: 100%;
  vertical-align: top;
}
.comm-box {
  overflow: hidden;
  margin-bottom: 30px;
}
.comm-box span {
  display: inline-block;
  font-size: 14px;
  color: #858585;
}
.comm-box span:first-child {
  float: left;
}
.comm-box span:last-child {
  float: right;
}
.comm-box span img {
  max-width: 16px;
}
.footer-box {
  background: #eee;
  padding-top: 10px;
}
.comm-title {
  height: 50px;
  line-height: 50px;
  background: #fff;
  padding-left: 18px;
}
.food-message {
  background: #fff;
}
.food-message li {
  border-top: 1px solid #eee;
  padding: 10px 18px 10px;
  display: flex;
}
.food-message-pic {
  width: 35px;
  height: 35px;
  margin-right: 15px;
}
.food-message-pic img {
  width: 100%;
  border-radius: 50%;
}
.food-message-info {
  flex: 1;
}
.food-message-info p {
  height: 25px;
  line-height: 25px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #272727;
}
.food-message-info p .seller-name {
  color: #d43d3d;
}
.food-message-info p .order-time {
  color: #afafaf;
}
.thumbup-comment {
  margin-top: 5px;
  margin-right: 10px;
  text-align: right;
}
.thumbup-comment span {
  color: #afafaf;
  font-size: 12px;
}
.thumbup-comment span img {
  width: 16px;
  margin-right: 3px;
  vertical-align: top;
}
.thumbup-comment span:last-child {
  margin-left: 20px;
}
.not-more {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 12px;
  color: #777;
}
.food-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 41px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  width: 100%;
}
.mint-button {
  border-radius: 0;
}
.mint-button-text {
  font-size: 14px;
  margin-left: 3px;
}
</style>


