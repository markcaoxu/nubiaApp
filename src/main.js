// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入路由
import router from './router/index.js'
// 引入mint-ui
import MintUI from 'mint-ui'
// mint-ui样式   本地包里   也可以配置babel
import 'mint-ui/lib/style.css'
// 声明使用
Vue.use(MintUI)

// mint-ui的主要组件
import { Field } from 'mint-ui';
Vue.component(Field.name, Field);

import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

// vee-validate的引入
import './vee-validate.js'

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
