<template>
<div id='app'>
	<section class="section">
		<ul class="factory-item">
			<!-- 工厂名称 -->
			<li class="factory-first">
				<h3 class="factory-name">广东深圳深业上城旗舰店</h3>
				<span class="map">查看地图</span>
			</li>
			<!-- 工厂地址 -->
			<li class="factory-second">
				<img class="view-address" src="" alt="">
				<span	class="factory-address">地址:<br>
				广东省深圳市福田区皇岗路与笋岗路交汇处深业上城南区CEEC-5-01
				</span>
			</li>
			<!-- 联系电话 -->
			<li class="factory-third">
				<img class="view-tel" src="" alt="">
				<p class="tel">电话：0755-86078425</p>
				<span class="mapAdress">发地址到手机</span>
			</li>
			<!-- 服务时间 -->
			<li class="factory-four">
				<img class="view-time" src="" alt="">
				<p class="serveTime">服务时间：<br>周一-周四10:00-20:30，周五-周日以及法定节假日10:00-22:00</p>
			</li>
			<!-- 前往方法 -->
			<li class="factory-five">
				<img class="view-way" src="" alt="">
				<p class="goWay">前往方法：<br>1、乘坐公交11路,12路,46路,58路,79路,104路,209路,213路,323路,365路,398路,M369路,M391路,M392路,M454路,M500路或旅游2线路至莲花一村站下车</p>
			</li>
			<BlockCard />
		</ul>
	</section>
</div>
</template>
<script>
import BlockCard from './BlockCard'
export default {
	components:{
		BlockCard
	}
}
</script>
<style lang='stylus'>
.section
	width 100%
	height 405px
	.factory-item
		width 90%
		margin 20px auto 
		.factory-first
			width 100%
			height 30px
			.factory-name
				font-size 20px
				font-weight 700
				display inline-block
			.map
				display inline-block
				height 26px
				font-size 14px
				line-height 26px
				float right
				background-color #e8340e
				border-radius 13px
				padding 0 5px
				color white
		.factory-second
			font-size 13px
			padding-left 25px
			position relative
			.factory-address
				line-height 17px
			.view-address
				width 20px
				height 20px
				position absolute
				top 0
				left 0
				background-color red
		.factory-third
			padding-left 25px
			font-size 13px
			margin-top 10px
			position relative
			.tel
				font-size 13px
				line-height 17px
				display inline-block
			.mapAdress
				display inline-block
				height 26px
				font-size 14px
				line-height 26px
				float right
				background-color #e8340e
				border-radius 13px
				padding 0 5px
				color white
			.view-tel
				width 20px
				height 20px
				position absolute
				top 0
				left 0
				background-color red
		.factory-four
			padding-left 25px
			font-size 13px
			margin-top 20px
			position relative
			.serveTime
				font-size 13px
				line-height 17px
				display inline-block
			.view-time
				width 20px
				height 20px
				position absolute
				top 0
				left 0
				background-color red
		.factory-five
			padding-left 25px
			height 30px
			font-size 13px
			margin-top 20px
			position relative
			.goWay
				font-size 13px
				line-height 17px
				display inline-block
			.view-way
				width 20px
				height 20px
				position absolute
				top 0
				left 0
				background-color red

</style>