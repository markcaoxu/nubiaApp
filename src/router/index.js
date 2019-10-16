// 引入Vue
import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes.js'
// 声明，使用以下router
Vue.use(VueRouter)
// 向外暴露路由
export default new VueRouter({
  mode:'history',  // 去掉路由地址的#
  routes
})