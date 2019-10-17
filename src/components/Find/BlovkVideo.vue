<template>
<div>
	<section class='section'>
		<!-- 遮挡图片 -->
		<img class="cover" :class="{hide:isPlay}" src=https://oss.static.nubia.cn/videogallery/155644320798.jpg alt="红魔Mars电竞手机 ID视频">
		<!-- 播放按钮 -->
		<img src='../../../static/find/play.png' class='begin-button' :class="{hide:isPlay}" @click="play" />
		<!-- 播放器 -->
		<video ref='start' controls='controls' class='video-player' proload='none' src="https://oss.static.nubia.cn/active/5cc56c708b12a26.mp4"></video>
		<!-- 文本注释 -->
		<p class='text'>
			<!-- 看过 -->
			<img class='seen' src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2485806749,855028622&fm=26&gp=0.jpg" alt="">
			<span class='count'>20635</span>
			<!-- 喜欢 -->
			<img class='seen' src="http://img3.imgtn.bdimg.com/it/u=4088804215,4130897496&fm=26&gp=0.jpg" alt="">
			<span class='count'>20635</span>
		</p>
	</section>
</div>
</template>
<script>
export default {
	data(){
		return{
			//定义一个布尔数据
			isPlay:false
		}	
	},
	methods:{
		//点击事件，切换播放/暂停的布尔值
		play(){
			//判断播放状态
			if(!this.isPlay){
				//播放
				this.$refs.start.play()
			}else{
				//暂停
				this.$refs.start.pause()
			}
			//每次点击都要取反
			return this.isPlay=!this.isPlay
		}
	}

}
</script>
<style lang='stylus'>
.section
	width 100%
	height 305px
	position relative
	// background-color pink 
	// transition all 1
	.cover
		width 100%
		position relative
		z-index 1
		transition all 1
		&.hide
			display none 
	.begin-button
		width 94px
		height 94px
		color gray 
		position absolute
		left 50%
		top 50%
		transform translate(-47px,-77px)
		z-index 2
		border-style none 
		transition all 1
		// background-color red
		&.hide
			opacity 0
	.video-player
		width 100%
		height 230px
		position absolute
		left 0
		top 0
	.text
		height 20px
		margin 25px 10px
		position absolute
		right 0
		top 235px
		.seen
			width 18px
			height 18px
		.count
			font-size 13px
			color #555
			margin 0 10px

</style>