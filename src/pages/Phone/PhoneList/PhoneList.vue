<template>
  <!-- 商品 -->
  <div class="container" ref="phonesWrapper">
    <!-- <ul v-for="(phoneList,index) in phoneLists" :key="index"> -->
    <ul class="phoneItem">
      <li class="phonelist" v-for="(phoneList,index) in phoneLists" :key="index" ref="phoneli" @click="goDetail(phoneList)">
        <a href="javascript:;" v-lazy="(phoneList,index)">
          <div class="left">
            <img :src="phoneList.img_url" alt="" />
          </div>
          <div class="right">
            <div class="top">{{phoneList.title_config}}</div>
            <span>￥{{phoneList.pir}}</span>
          </div>
        </a>
      </li>
      <div class="tips" v-if="phoneLists.length>0">
				<p v-if="isLoad">正在加载...</p>
				<p v-if="!isLoad">没有更多啦~</p>
				<i v-if="isLoad"> <img src="../images/loadingImg.gif" alt="" style="max-width:100%"></i>
		  </div>
    </ul>
  </div>
  
</template>
<script>
/**
 * 功能：
 * 懒加载
 */
// import phoneLists from "../datas/data.json"
import {reqHotPhone} from '../../../api/index.js'
import {Lazyload} from 'mint-ui'
import BScroll from 'better-scroll'

export default {
  props:[" phonePrice "],
  name:'PhoneList',
  data() {
    return {
      phoneLists: [], // 手机列表
      startY:0,
      phonePrice:[],
      scrollbar:false,
      isLoad:true,

    }
  },
  async mounted() {
    console.log(this.phonePrice)
    const result = await reqHotPhone()
    // console.log(result.message.hotPhone)
    // console.log(phoneLists.phoneItems)
    this.phoneLists = result.message.hotPhone
    // console.log(this.phoneLists);
    
    // 滑动
    this._initScroll()
  },
  watch:{
    phonePrice(){
      if(this.phonePrice){
        console.log(this.phonePrice)
      }
    }
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
    },
    goDetail(pone){
      this.$store.dispatch('upDataDetail',pone)
      this.$router.push('/shopDetail')
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
          color red
          .top
            padding-top 20px
            margin-bottom 20px
            font-size 16px
            color #000
  .tips
    margin-top 10px
    height 20px
    line-height 20px
    background-color #eeeeee
    display flex
    justify-content center
    align-items center
    color #9c9c9c
    text-align center
    p
      display block
      margin-block-start 10px
      margin-block-end 10px
      margin-inline-start 0
      margin-inline-end 0
</style>