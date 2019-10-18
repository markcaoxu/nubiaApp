<template>
<div id='app'>
	<li>
		<img src="" alt="">
		<span>{{Province.name}}</span>
	</li>
</div>
</template>
<script>

export default {
	props:["Provinces"],
	data(){
		return {
			
		}
	},
	mounted() {
		// console.log(this.Provinces)
	}
}
</script>
<style lang='stylus'>
</style>