<template>
  <div class="classify_all">
    <div class="classify_header">
      <div class="header_search">红魔3S</div>
      <img src="../../../static/classify/message.png" />
    </div>
    <div class="classify_content">
      <div class="left_list">
        <ul ref="leftUl">
          <li
            class="list-content"
            v-for="(kind,index) in kinds"
            :key="index"
            @click="clickList(index)"
            :class="{current:currentIndex===index}"
          >
            <a href="javascript:;">{{kind.name}}</a>
          </li>
        </ul>
      </div>
      <div class="right_list">
        <ul ref="rightUl">
          <li v-for="(kind,index) in kinds" :key="index">
            <h1 class="title">——— {{kind.name}} ———</h1>
            <ul class="list_ul">
              <li v-for="(kind,index) in kind.kind" :key="index">
                <img :src="kind.image" alt />
                <p>{{kind.name}}</p>
              </li>
              <!-- <li>
                <img src="../../../static/classify/hongmo/1.png" alt />
                <p>红魔3S 玄铁黑</p>
              </li>
              <li>
                <img src="../../../static/classify/hongmo/1.png" alt />
                <p>红魔3S 红蓝竞技</p>
              </li>
              <li>
                <img src="../../../static/classify/hongmo/1.png" alt />
                <p>红魔3S 玄铁黑</p>
              </li>
              <li>
                <img src="../../../static/classify/hongmo/1.png" alt />
                <p>红魔3S 银色风暴</p>
              </li>
              <li>
                <img src="../../../static/classify/hongmo/1.png" alt />
                <p>红魔3S 银色风暴</p>
              </li>-->
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="classify_footer">
      <img src="../../../static/classify/cate.png" alt />
      <img src="../../../static/classify/cate.png" alt />
      <img src="../../../static/classify/cate.png" alt />
      <img src="../../../static/classify/cate.png" alt />
      <img src="../../../static/classify/cate.png" alt />
    </div>-->
  </div>
</template>

<script>
// 引入数据
import list from "./datas/data.json";
// 引入better-scroll
import BScroll from "better-scroll";
export default {
  data() {
    return {
      kinds: [], // 遍历的数据
      scrollY: 0, // 滑动的距离值
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
  mounted() {
    this.kinds = list.keys;
    // 初始化BScroll
    this._initBscroll();
    // 初始化tops数据
    this._initTops();
  },
  methods: {
    // 初始化滑动对象
    _initBscroll() {
      this.leftScroll = new BScroll(".left_list", {
        click: true
      });
      this.rightScroll = new BScroll(".right_list", {
        click: true,
        probeType: 1
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
    z-index 999
    background-color white
    .header_search
      width 50%
      color #737373
      font-size 14px
      border-radius 20px
      background url('./imgs/search.png') no-repeat
      background-size 20px
      background-color #F8F8F8
      background-position 9px 6px
      padding 11px 34px
    img
      width 24px
      height 24px
      padding-top 5px
  .classify_content
    width 100%
    overflow hidden
    .left_list
      width 25%
      padding-top 80px
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
          display block
          color red
          border-right 2px solid red
          width 100%
      .list-content
        display block
        height 47px
        width 100%
    .right_list
      float right
      width 65%
      padding-top 93px
      .title
        text-align center
        font-size 18px
      .list_ul
        width 100%
        padding-top 20px
        height 450px
        li
          float left
          width 45%
          text-align center
          margin 4px 3px
          img
            width 100%
            height 100%
        p
          display inline-block
          font-size 10px
</style>

