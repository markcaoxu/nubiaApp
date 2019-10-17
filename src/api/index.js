/**
 * 以ajax之名，引入包装的axios,发送ajax请求
 * 
 * 页面所有的ajax请求都将陈列于此
 */

// 引入ajax
import ajax from './ajax.js'

// 定义一个前缀地址
// const BASE = 'http://localhost:5000'   这里没有/api的接口
// 前面http://localhost:5000 不用书写了，因为在解决跨域的时候，有target目标地址了
// 但是必须要有/api作为接口！！！
const BASE = '/api'


// 请求用户名和密码登录
export const reqPwdLogin = ({username,password})=>ajax({
  method:'POST',
  url: BASE + `/login_pwd`,
  data: {
    username,
    password
  }
})