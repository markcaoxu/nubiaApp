<template>
  <div class="shopcar-emty">
    <!-- 购物车顶部 -->
    <div class="shopHeader">
      <span class="logo" href="javascript:;" >
        <img class="headerLogo" @click="$router.push('/msite')" src="./images/m_logo.png" alt />
      </span>
      <div class="icon-all">
        <span class="icon-per" href="javascript:;">
          <span class="iconfont icon-iconfront-" @click="$router.replace('/profile')"></span>
        </span>
        <span class="icon-shpocar" href="javascript:;" >
          <span class="iconfont  icon-icon_gouwuche" ></span>
        </span>
      </div>
    </div>
    <!-- 购物车为空时 -->
    <div class="shopContent">
      <div class="isempty">
        <div class="empty-bgimg"></div>
      </div>
      <h3>购物车还是空的</h3>
      <p class="empty-text" >现在就去选购吧</p>
      <button class="emty-btn" @click="$router.push('/msite')">去逛逛</button>
    </div>
    <!-- 热销推荐 -->
    <div class="hotSale">
      <p class="hot-text">热销推荐</p>
      <ul class="hotList">
        <li class="hotItem" v-for="(pone,index) in hotList" :key="index">
          <!-- " -->
          <span class="hot-addshop iconfont icon-icon_gouwuche" @click="addPoneByShopcar(pone)"></span>
          <img class="hot-img" :src="pone.img_url" />
          <p class="hot-title">{{pone.title}}</p>
          <p class="hot-pir">￥{{pone.pir}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    hotList: Array // 热销商品
  },
   methods:{
    // 添加商品
    addPoneByShopcar(pone){
      this.$store.dispatch('addCheckedShop',pone)
    }
  }
  
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.shopcar-emty
  color #333333
  background-color #e5e5e5
  width 100%
  position relative
  .shopHeader
    background-color #ffffff
    width 100%
    height 60px
    line-height 50px
    position absolute
    top 0
    left 0
    .logo
      width 176px
      height 50px
      display inline-block
      text-align center
      .headerLogo
        width 140px
        vertical-align middle
    .icon-all
      float right
      width 80px
      height 50px
      line-height 50px
      padding-right 12px
      // display flex
      text-align center
      .iconfont
        width 50%
        font-size 32px
        padding 3px
        // &.icon-per
        // &.icon-shpocar
        // width 50%
  .shopContent
    padding-top 60px
    text-align center
    .isempty
      width 100%
      height 150px
      .empty-bgimg
        background url('./images/emptycart.png') no-repeat center
        background-size 60%
        width 100%
        height 100%
    h3
      font-size 18px
      font-weight bold
      margin-bottom 10px
      color #50555b
    .empty-text
      font-size 12px
      margin-bottom 10px
      color #87888c
    .emty-btn
      width 204px
      height 46px
      color #515459
      font-size 17px
      font-weight 700
  .hotSale
    text-align center
    .hot-text
      color #333
      font-size 16px
      font-weight 700
      margin 15px 0
    .hotList
      display flex
      flex-wrap wrap
      justify-content space-evenly
      .hotItem
        width 45%
        height 240px
        background-color #ffffff
        margin-bottom 8px
        border-radius 10px
        padding 3px
        position relative
        .hot-addshop
          position absolute
          top 10px
          right 10px
          width 25px
          height 25px
          font-size 20px
          border-radius 50%
          background-color #f9f9f9
          text-align center
          line-height 25px
          
        .hot-img
          margin-top 10px
          width 80%
        .hot-title
          font-size 12px
          margin 20px
        .hot-pir
          color red
          font-weight 600
</style>