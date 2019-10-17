<template>
  <div id='app'>
    <form>
      <div class="select">
        <p @click="upDown">北京</p>
        <ul class="promince-name" :class="{on:isShow}">
          <li>河北省</li>
					<li>吉林省</li>
					<li>广东省</li>
					<li>云南省</li>
					<li>新疆维吾尔自治区</li>
					<li>北京</li>
        </ul>
      </div>
      <div>
        <p>北京市</p>
        <ul>
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
      isShow: false
    }
  },
  methods: {
    upDown () {
      return this.isShow = !this.isShow
    }
  },

}
</script>
<style lang='stylus'>
.select
	width 100%
	height 10%

</style>