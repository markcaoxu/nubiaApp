<template>
<div>
	<header class='header'>
        <span class='lt' @click="goTo('/msite')">&lt;</span>
        <span class='txt'>发现</span>
      </header>
	<h1 class="title"></h1>
	<div class='notes'>
		<span>nubiya </span>
		<span>2019.5.4</span>
	</div>
	<div>
	<p></p>
	<img src="" alt="">
</div>
</div>
</template>
<script>
export default {
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
</style>