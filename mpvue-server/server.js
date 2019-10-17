// 引入koa
let Koa = require('koa')
// 引入koa-router
let KoaRouter = require('koa-router')
// 实例化koa
let koa = new Koa()
// 实例化koa-router
let koaRouter = new KoaRouter()

// 引入datas数据
let datas = require('./datas/login.json')


koaRouter.post('/login_pwd',(ctx)=>{
  // console.log(ctx.query.username,ctx.query.password)
  // 匹配账号密码
  datas.users.forEach((item)=>{
    if(item.username===ctx.query.username&&item.password===ctx.query.password){
      ctx.body={
        message:'登录成功',
        code:"0"
      }
    }
  })
})

// 声明使用所有的路由及路由的相关的所有的方法
koa
  .use(koaRouter.routes())
  .use(koaRouter.allowedMethods())
  
// 监听端口,启动服务器
koa.listen('5000', () => {
  console.log('服务器启动了')
  console.log('服务器的地址为:http://localhost:5000')
})
