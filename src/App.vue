<template>
  <div id="app">
    <!-- 路由匹配到的组件将显示在这里  <router-view></router-view> -->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#app
  height 100%
  width 100%
</style>
