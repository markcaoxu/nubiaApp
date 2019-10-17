<template>
  <div>
    <header class='header'>
      <span class='lt' @click="goTo('/msite')" >&lt;</span>
      <span class='txt'>发现</span>
    </header>
    <ul class="ul">
      <li @click="goTo('/find/productEvaluation')" class='li' :class="{on:$route.path==='/find/productEvaluation'}">产品热评</li>
      <li @click="goTo('/find/experienceShop')" class='li' :class="{on:$route.path==='/find/experienceShop'}">体验店</li>
      <li @click="goTo('/find/newsCenter')" class='li' :class="{on:$route.path==='/find/newsCenter'}">新闻中心</li>
			<li @click="goTo('/find/video')" class='li' :class="{on:$route.path==='/find/video'}">视频长廊</li>
    </ul>
  </div>
</template>
<script>
export default {
	methods:{
		goTo(path){
			//判断要跳转的页面与当前页面路由是否相同
			if(this.$router.path!==path){
				this.$router.push(path)
			}	
		}
	}
}
</script>
<style lang='stylus'>
.header
  width 100%
  height 60px
  background-color white
  border-bottom 1px solid gray
  .lt
    width 50px
    height 100%
    font-size 20px
    line-height 60px
    font-family '仿宋'
    margin 0 6px
    color #464646
  .txt
    width 50px
    height 100%
    font-size 20px
    line-height 60px
    font-family 'nubia'
    margin 0 6px
    color #464646
.ul
  width 100%
  height 40px
  margin-bottom 10px
	.li 
		width 24%
		height 100%
		float left 
		line-height 40px
		text-align center
		color rgb(100,100,100)
		&.on
			color red
</style>