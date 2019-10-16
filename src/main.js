// 引入vue
import Vue from 'vue'
// 引入App
import App from './App'
// 引入路由
import router from './router/index.js'

// 设置vue配置信息
Vue.config.productionTip = false
// new不报错
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router // 配置路由器
})
