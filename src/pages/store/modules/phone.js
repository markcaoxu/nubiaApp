
// 引入mutation-types
import {  RECEIVE_PHONE,RESET_PHONE } from '../mutation-types.js'
// 引入api
import { reqPhones } from '../../api'
const state={
  // 手机信息
  phones:[]
}
const mutations = {
  // 
  [RECEIVE_PHONE](state, { phones }) {
    state.phones = phones
  },
  [RESET_PHONE](state) {
    state.phones = ''
  }
}
  
  
const actions={
  // 获取手机信息
  async getPhones({ commit }) {
    const result = await reqPhones()
    if (result.code === 0) {
      const infoPhone = result.data
      commit(RECEIVE_PHONE, { infoPhone })
    }
  },
  resetPhone({ commit }) {
    // 重置手机信息
    commit(RESET_PHONE)
  }
}
const getters = {
}

export default{
  state,
  mutations,
  actions,
  getters
} 