<template>
  <div class="shopcar-emty">
    <!-- 购物车顶部 -->
    <div class="shopHeader">
      <a href="javascript:;">
        <img class="headerLogo" src="../../../static/shopcar/m_logo.png" alt />
      </a>
    </div>
    <!-- 购物车为空时 -->
    <div class="shopContent">
      <div class="isempty">
        <div class="empty-bgimg"></div>
      </div>
      <h3>购物车还是空的</h3>
      <p class="empty-text">现在就去选购吧</p>
      <button class="emty-btn">去逛逛</button>
    </div>
    <!-- 热销推荐 -->
    <div class="hotSale">
      <p class="hot-text">热销推荐</p>
      <ul class="hotList">
        <li class="hotItem" v-for="(pone,index) in hotList" :key="index">
          <img class="hot-img" src="../../../static/shopcar/hotSale/1.png" />
          <p class="hot-title">{{pone.title}}</p>
          <p class="hot-pir">￥{{pone.pir}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    hotList:Array
  }
}
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
    line-height 60px
    position absolute
    top 0
    left 0
    a
      width 176px
      height 100%
      display inline-block
      text-align center
      .headerLogo
        width 140px
        vertical-align middle
  .shopContent
    padding-top 60px
    text-align center
    .isempty
      width 100%
      height 150px
      .empty-bgimg
        background url('../../../static/shopcar/emptycart.png') no-repeat center
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