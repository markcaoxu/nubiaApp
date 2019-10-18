<template>
  <div class="shopcar">
    <!-- 购物车中有物品 加载结算 没有加载另一页面 -->
    <EmtyShopcar v-show="isEmty" :hotList="hotList" />
    <HaveShopcar v-show="!isEmty" :checked_pone="checked_pone" :have_rec="have_rec" />
    <FooterGuide v-show="isEmty" />
  </div>
</template>

<script>
// 热销商品 数据
import shopcar_data from "../../../shopcar-data.json";
// 引入购物车为空时的 组件EmtyShopcar
import EmtyShopcar from "../../components/EmtyShopcar/EmtyShopcar.vue";
// 引入购物车 为有货 时的组件 HaveShopcar
import HaveShopcar from "../../components/HaveShopcar/HaveShopcar.vue";
// 引入底部
import FooterGuide from "../../components/FooterGuide/FooterGuide.vue";
// 引入axios
import { reqShopcarHot } from "../../api/index";
import { mapState } from "vuex";
// import { log } from "util";
export default {
  components: {
    EmtyShopcar,
    HaveShopcar,
    FooterGuide
  },
  data() {
    return {
      hotList: [], // 空购物车中的 热销推荐   需要vuex
      have_rec: [], // 非空购物车 组件中的推荐商品
      isEmty: true //购物车是否为空
      // checked_pone:this.$store.state.checked_pone
    };
  },
  async mounted() {
    // 获取热销商品 // 获取推荐商品
    let result = await reqShopcarHot();
    this.hotList = result.message.hotSale;
    this.have_rec = result.message.have_rec;
    // 
    this.shopcarIsEmty();
  },
  computed: {
    ...mapState(["checked_pone"])
  },
  methods: {
    // 添加商品
    addPoneByShopcar(pone) {
      this.$store.dispatch("addCheckedShop", pone);
      //this.$route.meta.isShowFooter=false
    },
    // 判断购物车是否为空
    shopcarIsEmty() {
      if (this.checked_pone[0] !== {} && this.checked_pone.length > 0) {
        // 有货物
        this.isEmty = false;
      } else {
        // 空
        this.isEmty = true;
      }
    }
  },
  watch: {
    // 判断购物车是否为空
    checked_pone: function() {
      this.shopcarIsEmty();
    }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import './fonticon/font/iconfont.css'
.shopcar
  background-color #e5e5e5
  margin-bottom 64px
</style>