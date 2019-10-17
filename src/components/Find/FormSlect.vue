<template>
  <div id='app'>
    <form>
      <div class="select">
        <p @click="upDown" class="promince">北京</p>
        <ul vi-if="isShow" class="promince-list">
          <li>河北省</li>
					<li>吉林省</li>
					<li>广东省</li>
					<li>云南省</li>
					<li>新疆维吾尔自治区</li>
					<li>北京</li>
        </ul>
      </div>
      <div class="select">
        <p @click="leftRight" class="promince">北京市</p>
        <ul vi-if="isClose" class="promince-list">
          <li>北京市</li>
        </ul>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
			isShow: false,
			isClose:false
    }
  },
  methods: {
    upDown () {
			return this.isShow = !this.isShow,
			console.log(this.isShow)
		},
		leftRight(){
			return this.isClose = !this.isClose,
			console.log(this.isClose)
		}
  },

}
</script>
<style lang='stylus'>
.select
	width 80%
	height 40px
	border 1px solid gray 
	text-align center
	font-size 20px
	line-height 40px
	margin 0 auto 
	.promince
		width 100%
		height 100%
		border 1px solid gray 
		text-align center
		font-size 20px
		line-height 40px 
		margin-bottom 5px
	.promince-list
		width 100%
		text-align center
		font-size 20px
		line-height 50px
		border 1px solid gray
		background-color white
		opacity 1
		position absolute
		z-index 1
		li
			width 100%
			height 40px 
			text-align center
			font-size 20px
			line-height 50px
			margin 0 auto 




</style>