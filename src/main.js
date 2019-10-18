// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入路由
import router from './router/index.js'
// 引入Lazyload
import { Lazyload } from 'mint-ui'
//引入reset.css文件，重置样式
import '../public/css/reset.css'

// 引入store
import store from './store/index.js'
// 引入mint-ui
import MintUI from 'mint-ui'
// mint-ui样式   本地包里   也可以配置babel
import 'mint-ui/lib/style.css'
// 声明使用
Vue.use(MintUI)

// mint-ui的主要组件
import { Field } from 'mint-ui';
Vue.component(Field.name, Field);

// mint-ui选项卡相关
import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

// mint-ui表单校验相关
import { TabContainer, TabContainerItem } from 'mint-ui';
//引入懒加载
// import { Lazyload } from 'mint-ui';
//声明使用
Vue.use(Lazyload);


Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

// vee-validate的引入
import './vee-validate.js'

// 使用懒加载
Vue.use(Lazyload)
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
  router, // 配置路由器
  store // 注册store
})
