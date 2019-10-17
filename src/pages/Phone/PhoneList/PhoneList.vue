<template>
  <!-- 商品 -->
  <div class="container" ref="phonesWrapper">
    <!-- <ul v-for="(phoneList,index) in phoneLists" :key="index"> -->
    <ul class="phoneItem">
      <li class="phonelist" v-for="(phoneList,index) in phoneLists" :key="index">
        <a href="javascript:;" v-lazy="(phoneList,index)">
          <div class="left">
            <img :src="phoneList.phoneImage" alt="" />
          </div>
          <div class="right">
            <div class="top">{{phoneList.phoneCharactor}}</div>
            <span>￥{{phoneList.phonePrice}}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
/**
 * 功能：
 * 懒加载
 */
import phoneLists from "../datas/data.json"
import {Lazyload} from 'mint-ui'
import BScroll from 'better-scroll'

export default {
  name:'PhoneList',
  data() {
    return {
      phoneLists: [], // 手机列表
      startY:0,
      scrollbar:false
    }
  },
  mounted() {
    // console.log(phoneLists)
    // console.log(phoneLists.phoneItems)
    this.phoneLists = phoneLists.phoneItems;
    console.log(this.phoneLists);

    // 滑动
    this._initScroll()
  },
  methods:{
    _initScroll () {
      this.phonesScroll = new BScroll(this.$refs.phonesWrapper,{
        click:true,
        probeType:3
      })
       
      // 滑动
      // 下拉
      this.phonesScroll.on('pullingDown',()=>{
        this.phones=[]
        // 获取数据
        this.setData()
      }),
      // 上拉
      this.phonesScroll.on('pullinUp',()=>{
        // 判断是否继续上拉刷新
        console.log(this.curPage)
        if(this.curPage<this.totalPage){
          this.setData()
        }
      })
    },
    pullingDownUp () {
      this.phonesScroll.finishPullDown()
      this.phonesScroll.finishPullUp()
      // 重新计算元素高度
      this.phonesScroll.refresh()
    },
    setData(){
      this.$nextTick(()=>{
        this.pullingDownUp()
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.container
  width 100%
  height 100%
  border-bottom 2px solid #eee
  position absolute
  overflow hidden
  .phoneItem
    .phonelist
      a
        .left
          display inline-block
          width 112px
          height 112px
          border-right 2px solid #eee
          background-image url('../images/loadingImg.gif')
          background no-repeat
          background-position center
          img
            width 100%
            height 100%
            vertical-align middle
        .right
          display inline-block
          width auto
          height 112px
          vertical-align middle
          margin-left 10px
          .top
            padding-top 20px
            margin-bottom 20px
            font-size 16px
            color #000
</style>