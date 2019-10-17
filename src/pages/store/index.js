// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入4个属性对象
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

// 引入msite模块
import msite from './modules/msite.js'
// 引入phone模块
import phone from './modules/phone.js'

// 声明使用Vue方法
Vue.use(Vuex)
// 暴露出去
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    msite,
    phone
  }
})
