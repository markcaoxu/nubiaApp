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
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex:0
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

</style>