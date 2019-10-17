<template>
<div class="shopcar">
  <!-- 购物车中有物品 加载结算 没有加载另一页面 -->
  <EmtyShopcar v-show="isEmty" :hotList="hotList" />
  <HaveShopcar v-show="!isEmty" :checked_pone="checked_pone" :have_rec="have_rec" />
</div>  
</template>

<script>
// 热销商品 数据
import shopcar_data from '../../../shopcar-data.json'
// 引入购物车为空时的 组件EmtyShopcar
import EmtyShopcar from '../../components/EmtyShopcar/EmtyShopcar.vue'
// 引入购物车 为有货 时的组件 HaveShopcar
import HaveShopcar from '../../components/HaveShopcar/HaveShopcar.vue'
import {mapState} from 'vuex'
export default {
  components:{
    EmtyShopcar,
    HaveShopcar
  },
  data(){
    return{
      hotList:[], // 空购物车中的 热销推荐   需要vuex
      have_rec:[], // 非空购物车 组件中的推荐商品
      isEmty:true  //购物车是否为空
    }
  },
  computed:{
    ...mapState({
      checked_pone:function(state){
       return state.checked_pone
        }
    })
  },
  methods:{
    // 添加商品
    addPoneByShopcar(pone){
      this.$store.dispatch('addCheckedShop',pone)
    },
    // 判断购物车是否为空
    shopcarIsEmty(){
      if(this.checked_pone[0]!==undefined&&this.checked_pone.length>0){
        this.isEmty=false
        // 如果有货 tabbar 不显示
          this.$route.meta.isShowFooter=false
      }else{
        this.$route.meta.isShowFooter=true
        this.isEmty=true
      }
    }
  },
  mounted(){
    // 获取热销商品
    this.hotList=shopcar_data.hotSale
    // 获取推荐商品
    this.have_rec=shopcar_data.have_rec
    
  },
  watch:{
  
      //判断购物车是否为空
    checked_pone:function(){
      this.shopcarIsEmty()
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import './fonticon/font/iconfont.css'
.shopcar
  background-color #e5e5e5

</style>