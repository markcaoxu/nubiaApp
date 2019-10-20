<template>
  <div class="ticket01">
    <div class="ticket_header" @click="$router.push('/profile')">
      <span> < </span>
      <span>我的优惠券</span>
    </div>
    <div class="items">
      <div class="item" :class="{change:activeIndex===1}" @click="chooseThis(1)">未使用(0)</div>
      <div class="item" :class="{change:activeIndex===2}" @click="chooseThis(2)">已使用(0)</div>
      <div class="item" :class="{change:activeIndex===3}" @click="chooseThis(3)">已失效(0)</div>
    </div>
    <div class="icon_img">
      <img src="https://oss.static.nubia.cn/active/5c515b88a6d8236.png" alt=""/>
      <p>你还没有任何优惠券</p>
    </div>
    <div class="ticket01_footer">
      <input class="footer_input" type="number" placeholder="请输入优惠券号码"/>
      <div class="footer_btn">绑定</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex:1
    }
  },
  methods: {
    chooseThis(index) {
      if (typeof index !== "number") {
        throw new TypeError("index err");
      }
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.ticket01
  width 100%
  height 100%
  background-color #F5F5F5
  .ticket_header
    width 100%
    height 50px
    background-color #fff
    margin-bottom 4px
    span 
      font-size 20px
      color #333333
      display inline-block
      height 50px
      line-height 50px
      padding-left 10px
  .items
    width 100%
    height 50px
    display flex
    justify-content space-around
    background-color #fff
    .item
      width 25%
      height 46px
      line-height 40px
      text-align center
      font-size 17px
      font-weight 600
      &.change
        color #FF4D4D
        border-bottom 4px solid #FF4D4D
  .icon_img
    width 100%
    height 70%
    display flex
    flex-direction column
    align-items center
    img 
      width 70px
      height 70px
      padding-top 110px
      padding-bottom 15px
    p
      font-size 18px
  .ticket01_footer
    width 100%
    height 40px
    background-color #ffffff
    position fixed
    left 0
    bottom 0
    display flex
    padding 10px
    color #fff
    .footer_input
      width 62%
      background-color #D8D8D8
      padding-left 5px 
    ::-webkit-input-placeholder
      color #ffffff
      font-size 16px
    .footer_btn
      width 30%
      height 40px
      text-align center
      line-height 40px
      background-color #FF5E5E
</style>