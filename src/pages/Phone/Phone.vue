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
        <li class="text" >
          <a href="javascript:;">
            <span>综合</span>
          </a>
        </li>
        <li class="text" @click="priceSort()">
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
    <PhoneList>
      
    </PhoneList>

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
      phoneLists:[],  // 手机列表
      phonePrice:[]
    }
  },
  mounted(){
    // console.log(phoneLists)
    // console.log(phoneLists.phoneItems)
    this.phoneLists = phoneLists.phoneItems
    // console.log(this.phoneLists)
    this.phonePrice=[]
    this.phoneLists.forEach((item,index)=>{
      // console.log(item)
      Object.values(item)
      this.phoneList = Object.values(item)
      // console.log(this.phoneList)
      // console.log(this.phoneList[2])
      
      this.phonePrice.push(this.phoneList[2])
      // 获取手机的价格
      // console.log(item.phonePrice)
      // console.log('=====================')
      // this.phonePrice = item.phonePrice
      console.log(this.phonePrice)
    });
    
    // console.log(Object.values(this.phoneLists))

    
  },
  methods:{
    priceSort(){
      console.log('*************************')
      // 获取手机的价格
      // this.phonePrice.sort()
      console.log(this.phonePrice)
      for(var i=0; i<this.phonePrice.length-1;i++){
				for(var j=0;j<this.phonePrice.length-1-i;j++){
					if(this.phonePrice[j]>this.phonePrice[j+1]){
						var temp=this.phonePrice[j];
						this.phonePrice[j] = this.phonePrice[j+1];
						this.phonePrice[j+1]=temp;
					}
				}
			}
			console.log(this.phonePrice)
    }
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
      display inline-block
      font-size 24px
      margin 20px auto
      margin-left 20px
    .title
      display inline-block
      font-size 24px
      margin 20px auto
      color #000
      margin-left 20px
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
            height 20px
            text-align center
            line-height 20px
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