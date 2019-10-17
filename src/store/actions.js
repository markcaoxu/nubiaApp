// 存储 actions 间接操作状态数据的集合
// 引入常量名
import {ADD_CHECKED_PONE,DEL_CHECKED_PONE,REMOVE_CHECKED_PONE, UPDATE_USER, REMOVE_USER} from './mutationsType'
export default{
  // 购物车添加商品
  addCheckedShop({commit},pone){
    commit(ADD_CHECKED_PONE,{pone})
  },
  // 减
  dlCheckedShop({commit},pone){
    commit(DEL_CHECKED_PONE,{pone})
  },
  // 删
  removeCheckedShop({commit},pone){
    commit(REMOVE_CHECKED_PONE,{pone})
  },

  // 更新保存用户信息
  saveUser({ commit },user){
    // 将输入的user更新到vuex
    commit(UPDATE_USER,user)
  },
  // 清除用户信息
  removeUser({ commit }){
    // 重置用户信息
    commit(REMOVE_USER)
  }
}
