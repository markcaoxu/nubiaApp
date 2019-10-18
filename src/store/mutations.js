// 存储 mutations  直接操作状态数据的集合
// 引入常量名
import Vue from 'vue'
import {
  ADD_CHECKED_PONE,
  DEL_CHECKED_PONE,
  REMOVE_CHECKED_PONE,

  ADD_DETAIL_OBJ,
  REMOVE_DETAIL_OBJ
} from './mutationsType'
export default {
  //  加入购物车的商品
  [ADD_CHECKED_PONE](state, {
    pone
  }) {
    // 如果state中没有该商品
    if (state.checked_pone.length === 0 || state.checked_pone.indexOf(pone) == -1) {
      Vue.set(pone, 'num', 1)
      state.checked_pone.push(pone)
    } else {
      pone.num++
    }
    console.log('vuxx')
  },
  // 减删除购物车中的商品数量
  [DEL_CHECKED_PONE](state, {
    pone
  }) {
    if (pone.num > 1) {
      pone.num--
    } else {
      state.checked_pone.splice(state.checked_pone.indexOf(pone), 1)
    }

  },
  // 直接删除购物车中的商品
  [REMOVE_CHECKED_PONE](state, {
    pone
  }) {
    state.checked_pone.splice(state.checked_pone.indexOf(pone), 1)
  },

  // 添加详情页对象信息
  [ADD_DETAIL_OBJ](state,{obj}){
    
    state.detailObj=obj
  },
  // 移除详情页对象信息
  [REMOVE_DETAIL_OBJ](state){
    state.detailObj={}
  }

}
