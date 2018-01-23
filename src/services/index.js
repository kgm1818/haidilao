import URL_API from '../common/URL_API.js'
import Axios from 'axios'
// 首页轮播
export function getBannerImg() {
  return new Promise((resolve, reject) => {
    Axios.post(URL_API.bannerImg)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data)
          let data = response.data.list.map(item => {
            return item.covermap_url
          })
          resolve(data)
        }
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}
// 首页列表
export function getListInfo() {
  return new Promise((resolve, reject) => {
    console.log('dfs')
    Axios.post(URL_API.homeListInfo, 'pagesize=10&pagenum=1')
      .then(response => {
        if (response.status === 200) {
          console.log(response.data)
          let dataArr = response.data.restfulResult.page.result;
          let data = dataArr.map(item=>{
            return {
              // 标题
              maintitle: item.maintitle,
              subtitle: item.subtitle,
              // 评论
              comm_num: item.comm_num,
              // 赞
              fond_num: item.fond_num,
              // 时间
              end_date: item.end_date,
              // 图片路径
              covermap_url: item.covermap_url
            }
          })
          resolve(data)
        }
      }).catch(err => {
        console.log(err)
      })
  })
}