<template>
  <section class='list-box'>
    <ul>
      <li v-for='item in footList' @click.stop='goFoodDetail(item.id)'>
        <div class='content'>
          <p class='title'>{{item.maintitle}}</p>
          <p class='subtitle'>{{item.subtitle}}</p>
          <p class='evaluate'>
            <span class='comm_num'><img src='http://imageapp.haidilao.com/img/comment-g.png' />
              <font>{{item.comm_num}}</font>
            </span>
            <span class='fond_num'><img src='http://imageapp.haidilao.com/img/goodnum.png' />
              <font>{{item.fond_num}}</font>
            </span>
            <span>{{item.end_date}}</span>
          </p>
        </div>
        <div class='pic-info'>
          <img :src='item.covermap_url' />
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
import { getListInfo } from '../../services/index.js'
export default {
  data () {
    return {
      footList: []
    }
  },
  props: {
    pagenum: Number
  },
  mounted () {
    getListInfo(10, this.pagenum)
      .then(result => {
        this.footList = result
      }).catch(err => {
        console.log(err)
      })
    this.$event.$on('pageNum', (obj) => {
      getListInfo(10, obj.pagenum)
        .then(result => {
          this.footList = this.footList.concat(result)
          obj.addNum()
        }).catch(err => {
          console.log(err)
        })
    })
  },
  methods: {
    goFoodDetail (id) {
      this.$router.push('/home/foodDetail/' + id)
    }
  },
  updated () {

  }
}
</script>
<style scoped>
.list-box {
  width: 100%;
  background: #eee;
}
.list-box li {
  width: 100%;
  display: flex;
  height: 135px;
  background: #fff;
  margin-top: 5px;
}
.content,
.pic-info {
  flex: 1;
  overflow: hidden;
}
.content {
  padding: 10px 20px 0 10px;
  box-sizing: border-box;
  position: relative;
}
.pic-info img {
  width: 100%;
}
.content .title {
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  max-height: 40px;
  overflow: hidden;
  color: #444;
}
.content .subtitle {
  font-size: 12px;
  color: #858585;
  max-height: 45px;
  margin-top: 3px;
}
.evaluate {
  position: absolute;
  left: 10px;
  top: 110px;
  color: #afafaf;
  font-family: "微软雅黑";
  display: flex;
}
.evaluate span {
  display: flex;
  font-size: 12px;
  line-height: 16px;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.comm_num img,
.fond_num img {
  transform: scale(0.7);
}
</style>