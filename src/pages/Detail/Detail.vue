<template>
  <div class="detail">
    <!-- 头部swiper-container -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(imgitem,index) in detailObj.xq_swiper_img_url"
          :key="index"
        >
          <a href="javascript:;">
            <img :src="imgitem" alt />
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- back -->
      <img class="timg tleft" src="./images/back.png" alt @click="$router.back()" />
      <!-- pulldown -->
      <img class="timg tright" src="./images/pulldown.png" alt />
    </div>
    <!-- 中部detial_content -->
    <div class="detial_content">
      <div class="detail_title message">{{detailObj.title + detailObj.title_config}}</div>
      <div class="detail_desc message">{{detailObj.details}}</div>
      <div class="detail_price message">￥{{detailObj.pir}}元</div>
    </div>
    <!-- 底部detail_bottom -->
    <div class="detail_bottom">
      <!-- 促销信息 -->
      <div class="detail_sellInfo">
        <div class="sell_title">促销</div>
        <div class="sell_info">
          <p class="info01" v-for="(cxItem,index) in detailObj.promotion" :key="index">
            <i>{{cxItem.pro_key}}</i>
            <span>{{cxItem.pro_val}}</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 脚部detail_footer -->
    <div class="detail_footer">
      <div class="footer_left">
        <a href="http://cs.nubia.com/live800/chatClient/chatbox.jsp?companyID=9018&enterurl=https%3A%2F%2Fm.nubia.com%2Fproduct%2F841%2F1170&configID=5&skillId=&info=&vid=97327478">
          <img src="./images/servire.png" alt />
          <span>客服</span>
        </a>
        <a href="javascript:;">
          <img src="./images/collect.png"  :class="{redL:isred}"  @click="isred=!isred"/>
          <span :class="{redL:isred}" >{{isred?'已收藏':'收藏'}}</span>
        </a>
        <a href="javascript:;">
          <img src="./images/shopcar.png" alt @click="$router.push('/shopcar')" />
          <span>购物车</span>
          <!-- v-show="shopLength&&shopLength>0" -->
          <div class="num-length" v-show="shopLength&&shopLength>0">{{shopLength}}</div>
        </a>
      </div>
      <div class="footer_right">
        <span class="right_add" @click.stop="addShopcar">
          <span>加入购物车</span>
        </span>
        <span class="right_add" @click="buy(detailObj)">
          <span>立即购买</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// 引入Swiper插件
import Swiper from "swiper";
import "swiper/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// 引入vuex方法
import { mapState } from "vuex";
export default {
  name: "Detail",
  data() {
    return {
      isred:false
    };
  },
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

    // 加载时 如果没有详情数据 那么跳转到首页
     if(!(this.detailObj instanceof Object) || !this.detailObj.title){
          this.$router.replace("/msite");
       }
  },
  computed: {
    // ...mapState(['detailObj,checked_pone'])
     // 获取vuex 中的 对象数据 跟购物车数据
    ...mapState({
      detailObj: state =>{
        return state.detailObj
        },
      checked_pone: state => {
        return state.checked_pone;
      }
    }),
    // 获取车 数量
    shopLength() {
      return this.checked_pone.length;
    }
  },
  methods: {
    // 添加到购物车
    addShopcar() {
      let pone = this.detailObj;
      this.$store.dispatch("addCheckedShop", pone);
    },
    // 去购买
    buy(pone){
      // 加入购物车
    this.$store.dispatch("addCheckedShop", pone)
      // 并跳转 到结算
      this.$router.push('/shopcar')
    }
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
      z-index 999
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
        position relative
        img
          width 20px
          height 20px
          &.redL
            color red
        span
          font-size 12px
          padding-top 2px
          &.redL
            color red
            font-weight 700
        .num-length
          position absolute
          right 8px
          top 0
          background-color red
          border-radius 50%
          width 15px
          height 15px
          color #ffffff
          text-align center
          line-height 15px
          font-weight 500
    .footer_right
      width 50%
      display flex
      float right
      .right_add
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
