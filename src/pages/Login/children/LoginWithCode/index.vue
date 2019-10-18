<template>
  <div class="loginWithCode">
    <p class="message">暂不支持该功能</p>
    <div class="returnBtn" @click="$router.back()">返回</div>
  </div>
</template>

<script>
export default {
  methods: {
    back(){
      this.$router.replace("/login");
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.loginWithCode
  width 100%
  height 100%
  display flex
  justify-content center
  flex-direction column
  align-items center
  .message
    margin-bottom 50px
  .returnBtn
    width 100px
    height 50px
    text-align center
    background-color #999999
    line-height 50px
    border-radius 8px
</style>