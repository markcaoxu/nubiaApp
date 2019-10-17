<template>
  <div class="productsContainer">
    <!-- 手机商品页面 Phone-->
    <!-- 头部 -->
    <div class="header" @click="$router.back('/msite')">
      <span class="icon" >&lt;</span>
      <span class="title">手机</span>
    </div>
    <!-- 商品菜单 -->
    <div class="productsTitle">
      <ul class="titleList">
        <li class="text">
          <a href="javascript:;">
            <span>综合</span>
          </a>
        </li>
        <li class="text">
          <a href="javascript:;">
            <span>价格</span>
          </a>
        </li>
        <li class="text">
          <a href="javascript:;">
            <span>筛选</span>
          </a>
        </li>
        <li class="image">
          <a href="javascript:;">
            <img src="./images/listChange2.png" alt />
          </a>
        </li>
      </ul>
    </div>
    <!-- 商品 -->
    <PhoneList> </PhoneList>
    <!-- <div class="list">
      <ul v-for="(phoneList,index) in phoneLists" :key="index">
        <li>
          <a href="javascript:;">
            <div class="left">
              <img :src="phoneList.phoneImage" alt />
            </div>
            <div class="right">
              <div class="top">{{phoneList.phoneCharactor}}</div>
              <span>￥{{phoneList.phonePrice}}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>  -->
  </div>

</template>
<script>
/**
 * 功能：
 * 懒加载
 */
import phoneLists from './datas/data.json'
import PhoneList from './PhoneList/PhoneList.vue'
import BScroll from 'better-scroll'
export default {
  components:{
    PhoneList
  },
  data(){
    return{
      phoneLists:[]  // 手机列表
    }
  },
  mounted(){
    // console.log(phoneLists)
    // console.log(phoneLists.phoneItems)
    this.phoneLists = phoneLists.phoneItems
    console.log(this.phoneLists)
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.productsContainer
  width 100%
  height 733px
  position relative
  .header
    width 100%
    height 60px
    border-bottom 2px solid #eeeeee
    color #000
    overflow hidden
    .icon
      font-size 24px
      margin 0 20px
    .title
      width 80%
      height 100%
      display inline-block
      font-size 24px
      line-height 60px
      color #000
  .productsTitle
    width 100%
    height 48px
    overflow hidden
    .titleList
      width 100%
      height 100%
      display inline-block
      display flex
      font-size 15px
      color #000
      .text
        width 100%
        height 100%
        display inline-block
        color #000
        a
          width 100%
          height 100%
          display inline-block
          span
            display inline-block
            width 100%
            height 100%
            text-align center
            line-height 48px
            color #000
            font-size 20px
      .image
        width 30px
        height 30px
        display inline-block
        margin-top 10px
        margin-right 10px
        a
          width 100%
          height 100%
          display inline-block
          img
            display inline-block
            width 30px
            height 30px
</style>