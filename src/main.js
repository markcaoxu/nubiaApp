// 引入vue
import Vue from 'vue'
// 引入App
import App from './App'
// 引入路由
import router from './router/index.js'
//引入reset.css文件，重置样式
import '../static/css/reset.css'
//引入字体图标文件
import '../static/css/font-icon.css'


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
