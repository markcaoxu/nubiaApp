// 存储 actions 间接操作状态数据的集合
// 引入常量名
import {ADD_CHECKED_PONE,DEL_CHECKED_PONE,REMOVE_CHECKED_PONE, UPDATE_USER, REMOVE_USER,ADD_DETAIL_OBJ} from './mutationsType'
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

  // 添加详情页对象
  upDataDetail({commit},obj){
    commit(ADD_DETAIL_OBJ,{obj})
  }
}
