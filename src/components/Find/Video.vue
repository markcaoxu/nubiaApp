<template>
<div>
	<BlockVideo />
</div>
</template>
<script>
import BlockVideo from './BlovkVideo'
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
	},
	components:{
		BlockVideo
	}
}
</script>
<style lang='stylus'>

</style>