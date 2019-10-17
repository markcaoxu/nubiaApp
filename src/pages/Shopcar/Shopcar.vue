<template>
<div class="shopcar">
  <!-- 购物车中有物品 加载结算 没有加载另一页面 -->
  <EmtyShopcar v-if="isEmty" :hotList="hotList"/>
  <HaveShopcar v-if="!isEmty" :checked_pone="checked_pone" :have_rec="have_rec"/>
</div>  
</template>

<script>
// 热销商品 数据
import shopcar_data from '../../../shopcar-data.json'
// 引入购物车为空时的 组件EmtyShopcar
import EmtyShopcar from '../../components/EmtyShopcar/EmtyShopcar.vue'
// 引入购物车 为有货 时的组件 HaveShopcar
import HaveShopcar from '../../components/HaveShopcar/HaveShopcar.vue'

export default {
  components:{
    EmtyShopcar,
    HaveShopcar
  },
  data(){
    return{
      checked_pone:[], // 选购的商品
      hotList:[], // 空购物车中的 热销推荐   需要vuex
      have_rec:[], // 非空购物车 组件中的推荐商品
      isEmty:true  //购物车是否为空
    }
  },
  mounted(){
    // 获取选中的商品
    this.checked_pone=shopcar_data.checked_pone
    // 获取热销商品
    this.hotList=shopcar_data.hotSale
    // 获取推荐商品
    this.have_rec=shopcar_data.have_rec
  },
  watch:{
    // 判断购物车是否为空
    checked_pone:function(){
      if(this.checked_pone[0]!==undefined&&this.checked_pone.length>0){
        this.isEmty=false
      }else{
        this.isEmty=true
      }
      
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
@import './fonticon/font/iconfont.css'
.shopcar
  background-color #e5e5e5

</style>