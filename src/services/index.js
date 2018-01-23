import URL_API from '../common/URL_API.js'
import Axios from 'axios'
console.log(URL_API)
export function getBannerImg() {
  return new Promise((resolve, reject) => {
    Axios.post(URL_API.bannerImg)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data)
          let data = response.data.list.map(item=>{
            return item.covermap_url
          })
          resolve(data)
        }
      })
      .catch(err=>{
        console.log(err)
        reject(err)
      })
  })
}