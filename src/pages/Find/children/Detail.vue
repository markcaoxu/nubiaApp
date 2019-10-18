<template>
  <div>
    <section class='detail'>
      <header class='header'>
        <span class='lt' @click="goTo('/find/productEvaluation')">&lt;</span>
        <span class='txt'>产品热评</span>
      </header>
      <p class="titlee">『玩转nubia UI』个性熄屏，自己掌控！</p>
      <div class='notess'>
        <span>努比亚</span>
        <span>2019-05-04</span>
      </div>
      <div class="contentNews">
        <p>努比亚z20作为今年努比亚品牌的旗舰机型，外观上继承了去年努比亚x上独特的双面屏设计，这次的Z20又给我们带来怎么样的改变呢。那么跟随行行一起往下看！</p>
        <img src="https://static-bbs.nubia.cn/forum/201908/16/160504pmhhhtptfptifnv9.png.thumb.jpg" alt="">
      </div>
			<div class="btn" @click="goTo('/find/productEvaluation')">
				查看更多文章 >
			</div>
    </section> 
  </div>
</template>
<script>
export default {
	methods:{
		goTo (path) {
      //判断要跳转的页面与当前页面路由是否相同
      if (this.$router.path !== path) {
        this.$router.push(path)
      }
    }
	}
}
</script>
<style lang='stylus'>
.detail
	width 100%
	height 100%
	position relative
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
	.titlee
		height 100px
		font-size 25px
		line-height 50px
		font-weight 700
		margin 5px
	.notess
		width 100%
		height 20px
		color #777
		font-size 14px
		margin 5px
	.contentNews
		background-color white
		p
			padding 5px
			font-size 20px
			line-height 30px
			box-sizing border-box
		img
			width 100%
	.btn
		width 100%
		height 50px
		line-height 50px
		font-size 30px
		margin-top 10px
		color gray 
		text-align center
</style>