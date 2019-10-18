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
  url: BASE + `/login_pwd?username=${username}&password=${password}`
})
// 分类搜索 热门搜索
export const reqSearchList = ()=>ajax({
  method:'GET',
  url: BASE + `/search?q=lil`
})

export const req=(()=>ajax({
  method:'POST',
  url: BASE + '/phone'
}))

// 请求 shopcar hot 商品
export const reqShopcarHot = ()=>{

  return ajax({
  method:'GET',
  url:BASE + '/shopcar?q=hot&b=have'
})
}
// 请求 发现 信息
export const reqFind = ()=>ajax({
  method:'GET',
  url:BASE + '/find?q=wy&b=msg'
})


// 请求 首页轮播图 和热销机型
export const reqHotPone = ()=>ajax({
  method:'GET',
  url:BASE + '/msite?q=lbt&b=hot'
})
// 请求 分类页机型
export const reqClassify = ()=>ajax({
  method:'GET',
  url:BASE + '/classify?q=classify'
})

