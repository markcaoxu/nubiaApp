<template>
  <div id='app'>
    <form>
      <div class="select">
        <p @click="upDown" class="promince">{{prominceIndex}}</p>
        <ul v-show="isShow" class="promince-list">
          <li @click="changeP('河北省')">河北省</li>
          <li @click="changeP('吉林省')">吉林省</li>
          <li @click="changeP('广东省')">广东省</li>
          <li @click="changeP('云南省')">云南省</li>
          <li @click="changeP('新疆维吾尔自治区')">新疆维吾尔自治区</li>
          <li @click="changeP('北京')">北京</li>
        </ul>
      </div>
      <div class="select">
        <p @click="leftRight" class="promince">{{city}}</p>
        <ul v-show="isClose" class="promince-list">
          <li @click="changeC('保定市')">保定市</li>
          <li @click="changeC('廊坊市')">廊坊市</li>
          <li @click="changeC('石家庄')">石家庄</li>
          <li @click="changeC('承德市')">承德市</li>
          <li @click="changeC('秦皇岛市')">秦皇岛市</li>
          <li @click="changeC('衡水市')">衡水市</li>
        </ul>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false,
      isClose: false,
      prominceIndex: '河北省',
      city: '请选择'
    }
  },
  methods: {
    //第一框的点击事件
    upDown () {
      //第二框切换状态
      this.isShow = !this.isShow
      //判断第二框是否处于打开状态
      if (this.isClose) {
        //第二框是开的，就把它关上
        return this.isClose = !this.isClose
      }
    },
    //第二框的点击事件
    leftRight () {
      return this.isClose = !this.isClose
    },
    changeP (prominceIndex) {
      this.prominceIndex = prominceIndex,
        //第二框切换状态
        this.isShow = !this.isShow
    },
    changeC (city) {
      this.city = city,
        //第二框切换状态
        this.isClose = !this.isClose
    }
  }

}
</script>
<style lang='stylus'>
.select
  width 337px
  height 42px
  border 1px solid gray
  text-align center
  font-size 20px
  line-height 40px
  margin 10px auto
  position relative
  .promince
    width 100%
    height 100%
    border 0.5px solid #dce1e4
    text-align center
    font-size 20px
    line-height 40px
  .promince-list
    width 337px
    text-align center
    font-size 20px
    line-height 40px
    border 2px solid #dce1e4
    background-color white
    margin-top 9px
    position absolute
    z-index 5
    li
      width 100%
      height 42px
      text-align center
      font-size 20px
      line-height 50px
      margin 0 auto
</style>