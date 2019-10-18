<template>
  <!-- phoneHot 热销机型-->
  <div class="phoneHot">
    <span>热销机型</span>
    <div class="hotImg">
      <a href="javascript">
        <img src="./images/content/hot.jpg" alt="error" />
      </a>
    </div>
    <div class="hotItems">
      <ul class="hotItem">
        <li class="hotlist">
          <a href="javascript:;" class="mess">
            <img src="./images/content/detail1.png" alt="error" />
            <p class="phone-name">红魔3 赤焰红</p>
            <p class="phone-character">骁龙855</p>
            <p class="phone-price">￥2699 ￥3499</p>
          </a>
        </li>
        <li class="hotlist">
          <a href="javascript:;" class="mess">
            <img src="./images/content/detail2.png" alt="error" />
            <p class="phone-name">红魔3 赤焰红</p>
            <p class="phone-character">骁龙855</p>
            <p class="phone-price">￥2699 ￥3499</p>
          </a>
        </li>
        <li class="hotlist">
          <a href="javascript:;" class="mess">
            <img src="./images/content/detail3.png" alt="error" />
            <p class="phone-name">红魔3 赤焰红</p>
            <p class="phone-character">骁龙855</p>
            <p class="phone-price">￥2699 ￥3499</p>
          </a>
        </li>
        <li class="hotlist">
          <a href="javascript:;" class="mess">
            <img src="./images/content/detail4.png" alt="error" />
            <p class="phone-name">红魔3 赤焰红</p>
            <p class="phone-character">骁龙855</p>
            <p class="phone-price">￥2699 ￥3499</p>
          </a>
        </li>
        <li class="hotlist">
          <a href="javascript:;" class="mess">
            <img src="./images/content/detail5.png" alt="error" />
            <p class="phone-name">红魔3 赤焰红</p>
            <p class="phone-character">骁龙855</p>
            <p class="phone-price">￥2699 ￥3499</p>
          </a>
        </li>
        <li class="hotlist">
          <a href="javascript:;" class="mess">
            <img src="./images/content/detail6.png" alt="error" />
            <p class="phone-name">红魔3 赤焰红</p>
            <p class="phone-character">骁龙855</p>
            <p class="phone-price">￥2699 ￥3499</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="more">
      <a href="javascript:;" @click="$router.push('/phone')">
        <span>查看更多手机 ></span>
      </a>
    </div>
  </div>
</template>
<script>
// 引入Swiper插件
import Swiper from "swiper";
import "swiper/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import BScroll from "better-scroll";
export default {
  name: "carrousel",
  data() {
    return {
      isShow: true
    };
  },
  mounted() {
    console.log(this);
    // 轮播图
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
.phoneHot
  margin-bottom 10px
  overflow hidden
  background-color #fff
  width 100%
  span
    display inline-block
    width 100%
    height 52px
    line-height 52px
    font-size 20px
    padding 0 24px
  .hotImg
    width 100%
    height 195px
    a
      display inline-block
      width 100%
      height 100%
      img
        width 100%
        height 100%
  .hotItems
    width 100%
    .hotItem
      display inline-block
      width 100%
      height 100%
      &.nth-child(2n+1)
        margin-right 10px
    .hotlist
      float left
      display inline-block
      width 50%
      height 279px
      text-align center
      .mess
        display inline-block
        width 100%
        height 100%
        img
          background-color #F4F3EF
          width 100%
          height 177px
          margin-bottom 15px
        .phone-name
          font-size 16px
          font-weight 700
          color #000
        .phone-character
          font-size 13px
          margin-bottom 2px
          margin-top 10px

        .phone-price
          font-size 12px
          color red
  .more
    width 100%
    height 61.78px
    text-align center
    a
      display inline-block
      width 100%
      height 100%
      span
        display inline-block
        width 100%
        height 100%
        font-size 18px
        color #8E8D8D
</style>
