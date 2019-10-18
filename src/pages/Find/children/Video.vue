<template>
<div>
	<!-- 引入视频块组件 -->
	<BlockVideo />
<router-view></router-view>
</div>
</template>
<script>
import BlockVideo from '../../../components/Find/BlovkVideo'
export default {
	components:{
		BlockVideo
	}
}
</script>
<style lang='stylus'>

</style>