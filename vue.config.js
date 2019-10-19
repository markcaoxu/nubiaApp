// 在脚手架3中适配脚手架2的src
const path = require('path')

function resolve (dir) {
  // path同理
  return path.join(__dirname, '..', dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        // resolve是个函数，也需要复制过来
        // 路径别名    需要删上面的..
        '@': resolve('src')
      }
    }
  },
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:5000',
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}