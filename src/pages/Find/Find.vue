<template>
  <div id="app">
    <Header />
		<router-view></router-view>
  </div>
</template>

<script>
import Header from '../../components/Find/Header'
export default {
	components:{
		Header
	},
	methods:{
    goto(path) {
      // 判断跳转的路径和当前的路径是否一致
      if (this.$route.path !== path) {
        this.$router.replace(path);
      }
    }
  }
	
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#app
	width 100%
	height 100%
</style>