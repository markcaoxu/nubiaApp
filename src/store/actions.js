// 存储 actions 间接操作状态数据的集合
// 引入常量名
import {ADD_CHECKED_PONE,DEL_CHECKED_PONE,REMOVE_CHECKED_PONE} from './mutationsType'
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
  }
}
