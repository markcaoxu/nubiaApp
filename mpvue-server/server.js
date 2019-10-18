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
// 引入shopcar数据 热销数据跟 推荐数据
let shopHotData =require('./datas/shopcar-data.json')
// 引入searchlist数据 分类搜索 热门搜索
let searchList = require('./datas/searchlist.json')

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
// 购物车 热品推荐信息
koaRouter.get('/shopcar',((ctx)=>{
  let { hotSale,have_rec } = shopHotData
  console.log(ctx.query)
  if(ctx.query.q=='hot'&&ctx.query.b=='have'){
    ctx.body={
      message:{hotSale,have_rec},
      code:"0"
    }
  }
   
})
)
// 首页 信息
koaRouter.get('/msite',((ctx)=>{
  let {msite} = shopHotData
  let {msite_swiper,hotPone} =msite
  console.log(ctx.query)
  if(ctx.query.q=='lbt'&&ctx.query.b=='hot'){
    ctx.body={
      // 轮播图和 热销机型 /msite?q=lbt&b=hot'
      message:{msite_swiper,hotPone},
      code:"0"
    }
  }
})
)
// 分类 热门搜索
koaRouter.get('/search',((ctx)=>{
  let { titles } = searchList
  if(ctx.query.q=='lil'){
    ctx.body={
      message:{titles},
      code:"0"
    }
  }
})
)
// 声明使用所有的路由及路由的相关的所有的方法
koa
  .use(koaRouter.routes())
  .use(koaRouter.allowedMethods())
  
// 监听端口,启动服务器
koa.listen('5000', () => {
  console.log('服务器启动了')
  console.log('服务器的地址为:http://localhost:5000')
})
