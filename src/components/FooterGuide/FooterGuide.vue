<template>
  <footer class="footer_guide">
    <a class="guide_item" href="javascript:;" :class="{on:$route.path==='/msite'}" @click="goto('/msite')">
      <img v-show="$route.path!=='/msite'" src="./images/home.png" alt="">
      <img v-show="$route.path==='/msite'" src="./images/home-active.png" alt="">
      <span>首页</span>
    </a>
    <a class="guide_item" href="javascript:;" :class="{on:$route.path==='/classify'}" @click="goto('/classify')">
      <img v-show="$route.path!=='/classify'" src="./images/cate.png" alt="">
      <img v-show="$route.path==='/classify'" src="./images/cate-active.png" alt="">
      <span>分类</span>
    </a>
    <a class="guide_item" href="javascript:;" :class="{on:$route.path==='/find'}" @click="goto('/find')">
      <img src="./images/discover.png" alt="">
      <span>发现</span>
    </a>
    <a class="guide_item" href="javascript:;" :class="{on:$route.path==='/shopcar'}" @click="goto('/shopcar')">
      <img v-show="$route.path!=='/shopcar'" src="./images/shop.png" alt="">
      <img v-show="$route.path==='/shopcar'" src="./images/shop-active.png" alt="">
      <span>购物车</span>
    </a>
    <a class="guide_item" href="javascript:;" :class="{on:$route.path==='/profile'}" @click="goto('/profile')">
      <img v-show="$route.path!=='/profile'" src="./images/my.png" alt="">
      <img v-show="$route.path==='/profile'" src="./images/my-active.png" alt="">
      <span>我</span>
    </a>
  </footer>
</template>
<script>
export default {
  name:'FooterGuide',
  methods: {
    data () {
      return {
        
      }
    },
    goto(path) {
      // this.$route.path 取当前组件的路由地址，$route是当前组件的路由
      if (this.$route.path !== path) {
        // 这是编程式路由，$router是main.js中注册的路由器
        this.$router.replace(path);
      }
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.footer_guide
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  padding-top 10px
  border-top 2px solid #F3F3F3
  border-bottom  2px solid #F3F3F3
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #FF5E5E
    img   
      width 20px
      height 20px
      margin-bottom 3px
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>
