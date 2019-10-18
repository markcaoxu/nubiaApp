<template>
  <div class="classify_all">
    <div class="classify_header" @click="$router.push('/search')">
      <div class="header_search">红魔3S</div>
      <img src="./images/search.png" />
    </div>
    <div class="classify_content">
      <div class="left_list">
        <ul ref="leftUl">
          <li class="list-content" v-for="(kind,index) in kinds" :key="index" >
            <a
              href="javascript:;"
              :class="{current:currentIndex===index}"
              @click="clickList(index)"
              
            >{{kind.name}}</a>
          </li>
        </ul>
      </div>
      <div class="right_list">
        <div class="rightitem">
          <ul ref="rightUl">
            <li class="itemheader" v-for="(kind,index) in kinds" :key="index">
              <h1>———— {{kind.name}} ————</h1>
              <ul class="itemul">
                <li class="itemli" v-for="(item,index) in kind.kind" :key="index" @click="goDetail(item)">
                  <img :src="item.img_url" alt />
                  <p>{{item.kind_name}}</p>
                </li>
              </ul>
              <a href="javascript:;" class="seemore">查看更多{{kind.name}}></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
// 引入数据
import {reqClassify} from "../../api/index.js";
// 引入better-scroll
import BScroll from "better-scroll";
export default {
  data() {
    return {
      kinds: [], // 遍历的数据
      scrollY: 0, //滑动的距离值
      tops: [] // 滑动的数组
    };
  },
  // 计算属性
  computed: {
    // 计算的是索引
    currentIndex() {
      const { scrollY, tops } = this;
      const index = tops.findIndex(
        (top, index) => scrollY >= top && scrollY < tops[index + 1]
      );

      if (this.index !== index && this.leftScroll) {
        // 把当前的索引保存起来
        this.index = index;
        // 立刻让左侧的列表滑动到我指定索引的位置
        const li = this.$refs.leftUl.children[index];
        this.leftScroll.scrollToElement(li, 300);
      }
      return index;
    }
  },
  async mounted() {
    let result = await reqClassify
    // console.log(result.classify)
    this.kinds = result.classify.kinds

    // 初始化Bscroll
    this._initBscroll()

    this.$nextTick(() => {
      // 初始化tops数据
      // console.log("nextTick")
      this._initTops();
    })
  },
  methods: {
    // 初始化滑动对象
    _initBscroll() {
      this.rightScroll = new BScroll(".right_list", {
        click: true,
        probeType: 3
      });
      // 右侧列表的滑动事件
      this.rightScroll.on("scroll", ({ x, y }) => {
        this.scrollY = Math.abs(y);
      });
      this.rightScroll.on("scrollEnd", ({ x, y }) => {
        this.scrollY = Math.abs(y);
      });
    },
    _initTops() {
      // 获取列表的高度
      const tops = [];
      let top = 0;
      tops.push(top);
      // 获取ul中所有的li
      const list = this.$refs.rightUl.children;
      Array.prototype.slice.call(list).forEach(li => {
        top += li.clientHeight;
        tops.push(top);
      });
      // 更新数据
      this.tops = tops;
    },
    // 点击左侧的列表选项，右侧的列表滑动
    clickList(index) {
      // 获取上下滑动的值

      const scrollY = this.tops[index];
      this.scrollY = scrollY;
      this.rightScroll.scrollTo(0, -scrollY, 300);
    },
    // 跳转到详情页
    goDetail(pone){
      this.$store.dispatch('upDataDetail',pone)
      this.$router.push('/shopDetail')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.classify_all
  width 100%
  .classify_header
    width 100%
    height 35px
    padding 10px 0
    display flex
    border-bottom 1px solid #F0F0F0
    justify-content space-around
    position fixed
    z-index 9
    background-color white
    .header_search
      width 50%
      color #737373
      font-size 14px
      border-radius 20px
      background url('./images/search.png') no-repeat
      background-size 20px
      background-color #F8F8F8
      background-position 9px 6px
      padding 12px 34px
    img
      width 24px
      height 24px
      padding-top 5px
  .classify_content
    width 100%
    height 805
    overflow hidden
    .left_list
      width 25%
      padding-top 90px
      float left
      padding-left 15px
      position fixed
      li
        height 47px
        width 100%
        a
          width 100%
          height 20px
          color black
          &.current
            display inline-block
            color red
            border-right 2px solid red
            width 100%
      .list-content
        display block
        height 47px
        width 100%
    .right_list
      float right
      width 72%
      height 600px
      overflow hidden
      .rightitem
        width 100%
        padding-top 80px
        // height 475px
        .itemheader
          padding 25px 0
          text-align center
          .itemul
            float right
            display flex
            display inline-block
            overflow hidden
            height 100%
            .itemli
              width 43%
              float left
              margin 5px 8px
              text-align center
              img
                width 100%
                height 100%
              p
                font-size 10px
          .seemore
            width 100%
            height 20px
            font-size 10px
            margin-top 25px
            display inline-block
</style>

