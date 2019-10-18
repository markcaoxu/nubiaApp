<template>
  <div class="detail">
    <!-- 头部swiper-container -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./images/item01.png" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./images/item01.png" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./images/item01.png" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./images/item01.png" alt />
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- back -->
      <img class="timg tleft" src="./images/back.png" alt="">
      <!-- pulldown -->
      <img class="timg tright" src="./images/pulldown.png" alt="">
    </div>
    <!-- 中部detial_content -->
    <div class="detial_content">
      <div class="detail_title message">红魔3S 银色风暴 8GB+128GB</div>
      <div class="detail_desc message">骁龙855Plus、风冷+液冷双散热</div>
      <div class="detail_price message">￥2999.00元</div>
    </div>
    <!-- 底部detail_bottom -->
    <div class="detail_bottom">
      <!-- 促销信息 -->
      <div class="detail_sellInfo">
        <div class="sell_title">促销</div>
        <div class="sell_info">
          <p class="info01">
            <i>分期</i>
            <span>享受花呗3期、6期、12期分期</span>
          </p>
          <p class="info01">
            <i>积分</i>
            <span>购买即赠积分，积分可抵现</span>
          </p>
          <p class="info01">
            <i>包邮</i>
            <span>全球包邮</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 脚部detail_footer -->
    <div class="detail_footer">
      <div class="footer_left">
        <a href="javascript:;">
          <img src="./images/servire.png" alt="">
          <span>客服</span>
        </a>
        <a href="javascript:;">
          <img src="./images/collect.png" alt="">
          <span>收藏</span>
        </a>
        <a href="javascript:;">
          <img src="./images/shopcar.png" alt="">
          <span>购物车</span>
        </a>
      </div>
      <div class="footer_right">
        <a href="javascript:;">
          <span>加入购物车</span>
        </a>
        <a href="javascript:;">
          <span>立即购买</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// 引入Swiper插件
import Swiper from "swiper";
import "swiper/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Detail",
  mounted() {
    this.$nextTick(() => {
      /* eslint-disable */
      var mySwiper = new Swiper(".swiper-container", {
        loop: true, // 循环模式选项 // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    });
  }
};
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
.detail
  width 100%
  height 100%
  background-color #F5F5F5
  position fixed
  top 0
  z-index 99999
  // 头部swiper-container
  .swiper-container
    background-color #F8F8F8
    position relative
    img
      width 100%
    .timg 
      width 36px
      height 36px
      position absolute
      top 20px
    .tleft
      left 20px
    .tright  
      right 20px
  // 中部detial_content
  .detial_content
    width 100%
    height 115px
    background-color #ffffff
    .message
      width 100%
      padding 10px 20px
    .detail_title
      font-size 18px
      font-weight 600
    .detail_desc
      font-size 15px
      font-weight 600
      color #FF6262
    .detail_price
      font-size 16px
      color #FF6262
  // 底部detail_bottom
  .detail_bottom
    width 100%
    height 120px
    background-color #ffffff
    margin-top 5px
    .detail_sellInfo
      overflow hidden
      .sell_title
        width 20%
        float left
        text-align center
        padding-top 25px
        color #868686
        font-size 14px
      .sell_info
        width 80%
        float right
        padding-top 20px
        .info01
          margin-top 5px
          i
            display inline-block
            width 17%
            height 20px
            border 1px solid #FF6262
            border-radius 10px
            text-align center
            line-height 20px
            color #FF6262
            font-style normal
          span
            display inline-block
            width 75%
            font-size 14px
            padding-left 10px
  // 脚部detail_footer
  .detail_footer
    width 100%
    height 50px
    background-color #ffffff
    .footer_left
      width 50%
      display flex
      float left
      a
        display block
        height 40px
        padding-top 10px
        width 33%
        display flex
        flex-direction column
        align-items center
        img   
          width 20px
          height 20px
        span 
          font-size 12px
          padding-top 2px
    .footer_right
      width 50%
      display flex
      float right
      a
        width 50%
        height 50px
        line-height 50px
        text-align center
        font-size 15px
        color #ffffff
        &:nth-child(1)
          background-color #FF995F
        &:nth-child(2)
          background-color #FF5D5D
          

  
</style>
