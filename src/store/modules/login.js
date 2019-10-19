/**
 * Login组件相关
 */

// 引入mutation-types
/* eslint-disable */
import {
  SAVE_USER,
  REMOVE_USER,
  RECEIVE_TOKEN,
  RESET_TOKEN
} from '../mutationsType.js'
// 引入api
import {
  reqAutoLogin
} from '../../api/index.js'

// 状态数据
const state = {
  // 用户信息
  user: {},
  // token标识   默认去读取一次
  token: localStorage.getItem('token') || ""
}

// 直接修改状态数据的方法
const mutations = {
  // 保存
  [SAVE_USER](state, user) {
    state.user = user
  },
  // 清除
  [REMOVE_USER](state) {
    state.user = {}
  },
  // 更新token
  [RECEIVE_TOKEN](state, token) {
    window.localStorage.setItem('token', token)
    state.token = token
  },
  // 重置token
  [RESET_TOKEN](state) {
    state.token = ''
  }
}

// 间接修改状态数据的方法
const actions = {
  // 保存用户信息
  saveUser({
    commit
  }, user) {

    // 从user中取出token
    const token = user.token
    // 保存在vuex中
    commit(RECEIVE_TOKEN, token)

    // 保存在localStorage中
    localStorage.setItem('token', token)

    // 调用
    commit(SAVE_USER, user)
  },
  // 清除用户数据
  removeUser({
    commit
  }) {
    // 清除用户信息
    commit(REMOVE_USER)
    // 重置token
    commit(RESET_TOKEN)
    // 删除localStorage中的token
    localStorage.removeItem('token')
  },
  // 自动登录
  async autoLogin({
    commit,
    state
  }) {
    // 首先判断是否有token
    if (state.token) {
      // 有    自动登录
      // 请求自动登录
      const result = await reqAutoLogin()
      const user = result.datas.users[0]
      // 更新user
      commit(SAVE_USER, user)
    }
  },
  // 图形验证码
  receiveCaptcha(){
    // 请求自动登录
    /* eslint-disable */
    const result = reqRegisterCaptcha()
  }

}

// getter方法
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}