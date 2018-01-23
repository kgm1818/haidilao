<template>
  <section class='list-box'>
    <ul>
      <li v-for='item in footList'>
        <div class='content'>
          <p class='title'>{{item.maintitle}}</p>
          <p class='subtitle'>{{item.subtitle}}</p>
          <p class='evaluate'>
            <span><img src='http://imageapp.haidilao.com/img/comment-g.png' />
              <font>{{item.comm_num}}</font>
            </span>
            <span><img src='http://imageapp.haidilao.com/img/goodnum.png' />
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
  mounted () {
    getListInfo()
      .then(result => {
        this.footList = result
      }).catch(err => {
        console.log(err)
      })
  },
  methods: {

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
}
.evaluate{
  position: absolute;
  left: 10px;
  top: 110px;
  color: #afafaf;
  font-family: "微软雅黑"；

}
</style>