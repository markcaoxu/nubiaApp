<template>
  <div class="search_all">
    <div class="search_header">
      <p class="more" @click="$router.back('/classify')">&lt;</p>
      <input type="text" class="header_input" placeholder="搜索" />
      <p class="header_btn">搜索</p>
    </div>

    <keep-alive>
      <HotSearch />
    </keep-alive>

    <div class="search_bottom">
      <p class="search_history">搜索历史</p>
      <ul class="history_list" v-show="showSwitch">
        <li class="historyitem" v-for="(searchArr,index) in searchArrs" :key="index">{{searchArr.title}}</li>
      </ul>
      <span class="delete_btn" @click="deleteList">
        <p>清除历史记录</p>
      </span>
    </div>
    
  </div>
</template>
<script>
// 引入数据

import HotSearch from './hotSearch/hotSearch.vue'
export default {
  components:{
    HotSearch
  },
  data(){
    return{
      hots:[], //遍历的数据
      searchText:'',// 用来获取文本框输入的内容
      searchArrs:[], // 接收搜索内容 
      showSwitch:true  

    }
  },
   
  methods:{
    searchitem(index,pone){
      const alink = this.hots[index]
      this.searchArrs.unshift(alink)
      //console.log(pone)
      this.$store.dispatch('upDataDetail',pone)
      this.$router.push('/shopDetail')
    },
    deleteList(index){
      //console.log(index)
      this.searchArrs.splice(index)
    }
  }
  
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.search_header
    width 100%
    height 35px
    padding 10px 0
    display flex
    border-bottom 1px solid #F0F0F0
    justify-content space-around
    position fixed
    z-index 9
    background-color white
    .more
      display inline-block
      font-size 32px
      color #464646
    .header_input
      width 50%
      color #737373
      font-size 14px
      border-radius 20px
      background url('./images/search.png') no-repeat
      background-size 20px
      background-color #F8F8F8
      background-position 9px 6px
      padding 12px 34px
    .header_btn
      display inline-block
      text-align center
      line-height 35px
.search_bottom
  width 90%
  .search_history
    color #737373
    padding 10px 20px
  .history_list
    width 100%
    .historyitem
      width 100%
      padding 10px 0
      margin-left 20px
      border-bottom 1px solid #737373
      color #979797
  .delete_btn
    display block
    height 36px
    margin 20px 90px
    border 1px solid #737373
    text-align center
    line-height 36px
    background-image url('./images/search_delect.png')
    background-repeat no-repeat
    background-size 25px
    background-position 20px 9px
    border-radius 20px
    p
      display inline-block
      font-size 11px

</style>
