<template>
  <div id="app">
    <!-- 路由匹配到的组件将显示在这里  <router-view></router-view> -->
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
// FooterGuide
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";

export default {
  name: 'app',
  components: {
    FooterGuide
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#app
  height 100%
  width 100%
</style>
