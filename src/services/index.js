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
export function getListInfo(pagesize, pagenum) {
  return new Promise((resolve, reject) => {
    Axios.post(URL_API.homeListInfo, `pagesize=${pagesize}&pagenum=${pagenum}`)
      .then(response => {
        if (response.status === 200) {
          // console.log(response.data)
          let dataArr = response.data.restfulResult.page.result;
          let data = dataArr.map(item => {
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
              covermap_url: item.covermap_url,
              // id
              id: item.id
            }
          })
          resolve(data)
        }
      }).catch(err => {
        //  console.log(err)
      })
  })
}
export function getFoodDetail() {
  return new Promise((resolve, reject) => {
    Axios.post(URL_API.foodDetail, 'id=123')
      .then(res => {
        //  console.log(res.data)
        let obj = res.data.cateInfoEntity
        let dataObj = {
          comm_num: obj.comm_num,
          content: obj.content,
          covermap_url: obj.covermap_url,
          creator_id: obj.creator_id,
          creator_name: obj.creator_name,
          maintitle: obj.maintitle,
          subtitle: obj.subtitle,
          start_date: obj.start_date,
          fond_num: obj.fond_num
        }
        // console.log(dataObj)
        resolve(dataObj)
      })
  })
}
export function getFoodComment() {
  return new Promise((resolve, reject) => {
    Axios.post(URL_API.foodComment, 'pagesize=5&pagenum=1&cate_id=114')
      .then(res => {
        console.log(res.data.restfulResult.page.result)
        let data = res.data.restfulResult.page.result.map(item => {
          return {
            headimg: item.headimg, //头像
            nickname: item.nickname, // 呢臣
            message: item.message, // 评论
            surplus_hour: item.surplus_hour > 24 ? parseInt(item.surplus_hour / 24) + '天前' : item.surplus_hour + '小时前',
            good_num: item.good_num //赞
          }
        })
        resolve(data)
      })
  })
}