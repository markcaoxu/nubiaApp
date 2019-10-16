<template>
<div class="shopcar">
  <EmtyShopcar :hotList="hotList"/>
</div>  
</template>

<script>
// 热销商品数据
import shopcar_data from '../../../shopcar-data.json'
// 引入购物车为空时的 组件EmtyShopcar
import EmtyShopcar from '../../components/EmtyShopcar/EmtyShopcar.vue'
export default {
  components:{
    EmtyShopcar
  },
  data(){
    return{
      hotList:[] //热销推荐
    }
  },
  mounted(){
    this.hotList=shopcar_data.hotSale
    console.log(this.hotList)
    
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>


</style>