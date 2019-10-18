<template>
  <div>
    <section>
      <h1 class="title">所有体验店及牛厂</h1>
      <h6 class="notes">“体验店”：是努比亚官方授权的零售体验店；“牛厂”：是努比亚官方授权的新零售体验区</h6>
			<!-- 引入下拉菜单组件 -->
      <FormSlect />
      <img class="view" src="https://static.nubia.cn/images/store/v2/str-high-bg.jpg" alt="">
    </section>
		<!-- 引入工厂介绍组件 -->
    <BlockShop v-for="(Province,index) in Provinces" :key="index"/>
  </div>
</template>
<script>
//引入BlockShop组件
import BlockShop from '../../../components/Find/BlockShop'
//引入下拉菜单组件
import FormSlect from '../../../components/Find/FormSlect'
//引入reqFind方法
import { reqFind } from "../../../api/index";
export default {
  components: {
		BlockShop,
		FormSlect
  },
	data() {
    return {
      Provinces: [], // 空购物车中的 热销推荐   需要vuex
    };
  },
  async mounted() {
    // 获取工厂服务信息 // 获取推荐商品
    let result = await reqFind();
    this.Provinces = result.message.experience.introduce.Province
    // console.log(this.Provinces)
  },
}

</script>
<style lang='stylus'>
.title
  margin 32px auto
  font-size 32px
  font-weight 600
  text-align center
.notes
  font-size 78%
  padding 20px
  text-align center
  line-height 15px
.view
	width 100%
	margin-top 10px
</style>