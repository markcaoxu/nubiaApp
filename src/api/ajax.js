/**
 * ajax.js文件是为了包装axios请求，添加响应器和拦截器
 * 
 */
// 引入axios
import axios from 'axios'

// 引入qs---负责转json的数据,把json的数据转urlEncoding的形式---- {name:'jack',age:10}---->name=jack&age=10
 import qs from 'qs'

// 引入store
// import store from '../store'

// 引入router
// import router from '../router'

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
    // 返回这个配置对象
    return config
  }
)
// 响应拦截器
axios.interceptors.response.use(
  response => {
    // console.log(response.data);
    
    // 响应成功的回调，返回响应的数据
    return response.data
  },
  error => {
    return new Promise(() => {})
  }
)


// 将包装好的axios暴露出去
export default axios