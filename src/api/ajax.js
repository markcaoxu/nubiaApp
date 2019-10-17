/**
 * ajax.js文件是为了包装axios请求，添加响应器和拦截器
 * 
 */
// 引入axios
import axios from 'axios'

// 引入qs---负责转json的数据,把json的数据转urlEncoding的形式---- {name:'jack',age:10}---->name=jack&age=10
// import qs from 'qs'

// 引入store
import store from '../store'

// 引入router
import router from '../router'

// 引入Toast
import {
  Toast
} from 'mint-ui'

// 请求拦截器
axios.interceptors.request.use(
  // 这里有一个回调函数(配置对象)
  config => {
    const {
      method,
      data
    } = config
    // 判断method是不是POST,data是不是一个对象
    if (method.toUpperCase() === 'POST' && data instanceof Object) {
      // 条件成立，将data通过qs的stringify方法，转成URL形式的数据
      // 例如： qs.stringify({ a: ['b', 'c', 'd'] });  // 'a[0]=b&a[1]=c&a[2]=d'
      config.data = qs.stringify(data)
    }

    // 判断当前接口是否需要携带token
    if (config.headers.needToken) {
      // 取出token---取vuex   store中
      const token = store.state.user.token
      // 判断
      if (!token) {
        // 没有token，报错，报提示
        const error = new Error('没有token，请重新登录')
        // try catch final
        // throw是抛出异常
        // 给错误码，用于识别出现什么样的错误
        error.status = 401
        throw error
      } else {
        // 有token,加入到请求头中
        config.headers['Authorization'] = token
      }
    }

    // 返回这个配置对象
    return config
  }
)
// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 响应成功的回调，返回响应的数据
    return response.data
  },
  error => {
    // 响应失败的回调，返回错误
    // 请求的错误----没有token
    if (!error.response) {
      // 判断
      if (error.status === 401) {
        // =401说明没有token
        // 判断当前路由路径是不是login，不是，调到login
        if (router.currentRoute.path !== '/login') {
          // 提示错误
          Toast(error.message)
          // 调到login路由
          router.replace('/login')
        }
      }
    } else {
      // 响应的时候token过期了,或者没有资源的时候就会报错
      const status = error.response.status
      if (status === 401) {
        // 提示过期了  error.response.data.message
        Toast(error.response.data.message)
        // 重置用户信息
        store.dispatch('resetUser')
        // 重新登录---跳转到login
        router.replace('/login')

      } else if (status === 404) {
        // 没有资源
        Toast('没有资源')
      } else {
        // 请求失败了
        Toast('请求错误' + error.message)
      }

    }
    // 返回一个新的promise对象，中断错误
    return new Promise(() => {})
  }
)


// 将包装好的axios暴露出去
export default axios