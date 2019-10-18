// 引入Vue
import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes.js'
import store from '../store/index.js'
// 声明，使用以下router
Vue.use(VueRouter)
// 向外暴露路由    添加路由守卫
const router = new VueRouter({
  mode:'history',  // 去掉路由地址的#
  routes
})
router.beforeEach((to, from, next) => {
  // 判断
  
  if(store.state.login.user._id){
    if(to.path==='/login'&&from.path==='/profile'){
      // 误操作
    }else{
      next()
    }
  }else{
    next()
  }
  
  
})
export default router