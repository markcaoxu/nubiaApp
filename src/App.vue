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
  },
  mounted () {
    this.$store.dispatch('autoLogin')
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#app
  width 100%
  height 100%
</style>
