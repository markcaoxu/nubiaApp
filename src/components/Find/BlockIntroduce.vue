<template>
<div id='app'>
	<section class="section">
      <img class="img" @click="goTo('/find/deatil')" src="https://oss.static.nubia.cn/NewsCenter/2019-09-03/455387ea0a0adbc9ca5911c1809fe031.jpg"
        alt="红色玫瑰">
      <div class="text">
        <h3>『玩转nubia UI』个性熄屏，自己掌控！</h3>
        <span>努比亚Z20</span>
      </div>
      <footer class="footer">
        <span class="time">2019.10.7</span>
        <img class="img-eye"
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1977942012,4260772391&fm=15&gp=0.jpg" alt="眼">
        <span class="seen">254245</span>
      </footer>
    </section>
</div>
</template>
<script>

export default {
	methods:{
		goTo(path){
			//判断要跳转的页面与当前页面路由是否相同
			if(this.$router.path!==path){
				this.$router.replace(path)
			}	
		}
	}
}
</script>
<style lang='stylus'>
.section
  width 100%
.img
  width 100%
.text
  height 30px
  margin 10px
  h3
    line-height 30px
    font-weight 500
    font-size 18px
  span
    color #777
    font-size 14px
    margin-top 10px
.footer
  width 100%
  height 50px
  color #777
  font-size 12px
  margin-bottom 5px
  line-height 50px
  display flex
  align-items center
  .time
    margin-left 5%
  .img-eye
    width 15px
    height 15px
    margin-left 55%
  .seen
    margin-left 5%
</style>