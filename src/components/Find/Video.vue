<template>
<div>
	<section class='section'>
		<img class='cover' src="https://oss.static.nubia.cn/videogallery/155644320798.jpg" alt="红魔3电竞手机ID视频">
		<i class='begin-button' :class="{hide:isPlay}" @click="play"></i>
		<video controls='controls' class='video-player' src="https://oss.static.nubia.cn/active/5cc56c708b12a26.mp4"></video>
		<p class='text'>
			<img class='seen' src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2485806749,855028622&fm=26&gp=0.jpg" alt="">
			<span class='count'>20635</span>
			<img class='seen' src="http://img3.imgtn.bdimg.com/it/u=4088804215,4130897496&fm=26&gp=0.jpg" alt="">
			<span class='count'>20635</span>
		</p>
	</section>
</div>
</template>
<script>
export default {
	data(){
		return {
			isPlay
		}
	},
	methods:{
		play(){
			isPlay = !this.$router.isPlay
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
	.cover
		width 100%
		height 235px
		position absolute
		left 0
		top 0
		z-index 1
	.begin-button
		width 94px
		height 94px
		color gray 
		position absolute
		left 50%
		top 50%
		transform translate(-47px,-77px)
		z-index 2
		background-color red
		&.hide
			opacity 0
	.video-player
		width 100%
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