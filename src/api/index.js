// 引入ajax
import ajax from './ajax.js'
// http://localhost:5000/position/40.10038,116.36867
// const BASE = 'http://localhost:5000'
const BASE = '/api'

// 获取手机信息
export const reqPhones = ({ phoneCharactor }) => ajax({
  method: 'GET',
  url: BASE + `/phone`,
  params: {
    phoneCharactor
  }
})