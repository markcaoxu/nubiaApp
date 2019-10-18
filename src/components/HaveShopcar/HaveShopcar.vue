<template>
  <div class="haveShopcar"  @click="isMenuShuo=false">
    <div class="haveShopcar-header">
      <!-- 需要图标字体 < -->
      <span class="back icon iconfont icon-huitui" @click="$router.back()"></span>
      <p class="shopcar-title">购物车</p>
      <!-- 需要图标字体 双杠 -->
      <span
        class="menu icon iconfont"
        :class="isMenuShuo?'icon-iccloes':'icon-caidan'"
        @click.stop="isMenuShuo=!isMenuShuo"
      ></span>
    </div>
    <ul class="menu-List" :class="{menunoshow:!isMenuShuo}">
      <li class="menu-Item" @click="$router.push('/msite')">
        <span class="iconfont icon-shouye"></span>
        <p>首页</p>
      </li>
      <li class="menu-Item" @click="$router.push('/profile')">
        <span class="iconfont icon-iconfront-"></span>
        <p>个人中心</p>
      </li>
      <li class="menu-Item" >
        <span class="iconfont icon-icon_gouwuche"></span>
        <p>购物车</p>
      </li>
    </ul>
    <!--  -->
    <ul class="haveShopcarList">
      <li class="haveShopcarItem" v-for="(checkedItem,index) in checked_pone" :key="index">
        <div class="have-left">
          <img class="have-left-img" :src="checkedItem.img_url" alt />
        </div>
        <div class="have-right">
          <div class="have-right-top">
            <p class="have-name">{{checkedItem.title}}</p>

            <img
              class="delete-have"
              src="https://static.nubia.cn/mobile/images/close_btn.png"
              alt
              @click="RmShopNum(checkedItem)"
            />
          </div>
          <p class="have-pir">售价￥{{checkedItem.pir}}元</p>
          <div class="have-right-btm">
            <div class="have-right-btm-btn">
              <span @click="dlShopNum(checkedItem)">-</span>
              <input type="text" v-model="checkedItem.num" />
              <span @click="addShopNum(checkedItem)">+</span>
            </div>
            <span class="subtotal">小计：￥{{checkedItem.num*checkedItem.pir}}元</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="allpir">
      <span class="allpir-title">合计金额</span>
      <span class="allpir-pir">￥{{checked_All_pir}}元</span>
    </div>
    <div class="recommend">
      <p class="recommend-text">为您推荐</p>
    </div>
    <ul class="recommend-List">
      <li class="recommend-Item" v-for="(rec,index) in have_rec" :key="index" @click="addHaveShopcar(rec)">
        <img class="recommend-img" :src="rec.img_url" />
        <p class="recommend-text">{{rec.title}}</p>
        <p class="recommend-pir">￥{{rec.pir}}元</p>
        <span class="recommend-icon iconfont icon-icon_gouwuche" @click.stop="addShopNum(rec)"></span>
      </li>
    </ul>
    <div class="settlement">
      <button class="settlement-btn" >去结算</button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isMenuShuo: false // menu 是否显示
    };
  },
  props: {
    have_rec: Array, // 推荐商品
    checked_pone: Array //选中的商品
  },
  computed: {
    // 计算总价格
    checked_All_pir() {
      let all_pir = 0;
      this.$store.state.checked_pone.forEach(item => {
        all_pir = all_pir + item.num * item.pir;
      });
      return all_pir;
    },
    // 判断 去结算还是登录
    // goSettlement(){

    // }
  },
  methods: {
    // 加
    addShopNum(pone) {
      this.$store.dispatch("addCheckedShop", pone);
    },
    // 减
    dlShopNum(pone) {
      this.$store.dispatch("dlCheckedShop", pone);
    },
    // 删除
    RmShopNum(pone) {
      this.$store.dispatch("removeCheckedShop", pone);
    },
    addHaveShopcar(pone){
      this.$store.dispatch('upDataDetail',pone)
        this.$router.push('/shopDetail')
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.haveShopcar
  color #333333
  background-color #ffffff
  width 100%
  position relative
  .haveShopcar-header
    width 100%
    height 60px
    line-height 60px
    display flex
    justify-content space-between
    box-sizing border-box
    text-align center
    border-bottom 1px solid #e5e5e5
    .icon
      width 50px
      font-size 20px
      font-weight 500
      &.menu
        font-size 35px
        padding-right 10px
    .shopcar-title
      font-size 19px
      color #464646
      font-weight 300
  .menu-List
    display flex
    justify-content space-around
    width 100%
    height 50px
    position absolute
    background-color #fff
    border-bottom 2px solid #cccccc
    // overflow hidden
    &.menunoshow
      display none
    .menu-Item
      text-align center
      padding-top 8px
      >span
        font-size 20px
      >p
        font-size 12px
        margin-top 5px
  .haveShopcarList
    .haveShopcarItem
      height 112px
      width 100%
      display flex
      justify-content space-around
      border-bottom 1px solid #e5e5e5
      .have-left
        width 82px
        height 100%
        .have-left-img
          width 100%
      .have-right
        width 270px
        padding-right 8px
        .have-right-top
          display flex
          justify-content space-between
          margin-top 8px
          font-size 16px
          .delete-have
            width 28px
            height 28px
        .have-pir
          width 100%
          // 
          font-size 12px
          color #87888c
          margin-bottom 8px
      .have-right-btm
        width 100%
        border-top 1px solid #e5e5e5
        padding-top 8px
        display flex
        justify-content space-between
        align-items center
        .have-right-btm-btn
          border 1px solid #e0d7e3
          height 30px
          >span
            display inline-block
            width 30px
            height 28px
            line-height 28px
            background-color #ffffff
            vertical-align middle
            text-align center
          input
            width 45px
            height 30px
            text-align center
            border-left 1px solid #e5e5e5
            border-right 1px solid #e5e5e5
        .subtotal
          font-size 14px
  .allpir
    width 100%
    height 47px
    display flex
    line-height 47px
    background-color #fff
    border-bottom 1px solid #cccccc
    .allpir-title
      width 225px
      text-align right
    .allpir-pir
      width 150px
      text-align right
      padding-right 20px
      box-sizing border-box
      color red
      font-weight 700
      font-size 14px
  .recommend
    width 100%
    height 50px
    line-height 50px
    background-color #fff
    border-bottom 1px solid #cccccc
    .recommend-text
      padding-left 20px
  .recommend-List
    width 100%
    display flex
    flex-wrap wrap
    .recommend-Item
      width 50%
      height 236px
      box-sizing border-box
      border-bottom 1px solid #cccccc
      text-align center
      padding 4px
      position relative
      &:nth-child(2n+1)
        border-right 1px solid #cccccc
      .recommend-img
        width 142px
        height 142px
      .recommend-text
        text-align left
        padding 4px
        font-size 12px
      .recommend-pir
        text-align left
        padding 4px
        margin-top 10px
        color red
        font-weight 700
      .recommend-icon
        position absolute
        right 10px
        bottom 20px
        font-size 30px
        // https://oss.static.nubia.cn/active/5cc509862275d5.png
  .settlement
    position fixed
    bottom 0
    width 100%
    height 75px
    background-image linear-gradient(#f8f8f8, #eaeaec)
    text-align center
    line-height 75px
    .settlement-btn
      height 44px
      width 330px
      border-radius 20px
      background rgb(255, 77, 77)
      font-size 20px
      font-weight 700
      color #ffffff
</style>