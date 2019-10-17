<template>
  <!-- 登录组件 -->
  <div class="login">
    <!-- 顶部标志 -->
    <img class="header_img" src="./images/m_logo.png" alt />
    <!-- 登录主体 -->
    <!-- <div class="login_main">
      <mt-field class="login_user login_input" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field class="login_pwd login_input"  placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <a class="phone_link" href="javascript:;">手机验证登录</a>
      <button class="login_btn">立即登录</button>
    </div>-->
    <div class="login_main">
      <ValidationProvider name="name" rules="required" v-slot="{ errors }">
        <div class="field login_user">
          <input  class="login_input" v-model="username" type="text" />
          <span class="login_alert">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider name="password" rules="required|min:6" v-slot="{ errors }">
        <div class="field login_pwd">
          <input class="login_input" v-model="password" type="password" />
          <span class="login_alert">{{ errors[0] }}</span>
          <em class="pwd_hide"></em>
        </div>
      </ValidationProvider>
      <a class="phone_link" href="javascript:;">手机验证登录</a>
      <button class="login_btn">立即登录</button>
    </div>
    <!-- 其它方式登录 -->
    <div class="other_loginway">
      <p>———— 其他登录方式 ————</p>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!-- 注册及忘记 -->
    <div class="login_footer">
      <a href="javascript:;">立即注册</a>
      <span>|</span>
      <a href="javascript:;">忘记密码</a>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  // 定义表达式
  data() {
    return {
      username: "", //用来存储账号
      password: "", // 用于存储密码
      isPwdShow: false // 用来切换密码是否明文
    };
  },
  computed: {
    // 正则检测手机号是否正确
    isRightPhone() {
      return /[1]\d{10}/.test(this.username);
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.login
  width 100%
  height 100%
  background-color #F5F5F5
  display flex
  flex-direction column
  text-align center
  .header_img
    width 60%
    margin 40px auto 20px
  .login_main
    width 100%
    height 40%
    .login_user
      background url('./images/id.png') no-repeat
    .login_pwd
      background url('./images/pwd.png') no-repeat
      .pwd_hide
        display block
        width 20px
        height 20px
        position absolute
        right 15px
        top 10px
        background url('./images/pwd-eye.png') no-repeat
        background-position 0px -20px
        background-size 20px
        &.pwd_show
          background-position 0 0
    .field
      width 70%
      height 40px
      margin 0 auto
      border 1px solid #E9E9E9
      border-radius 10px
      margin-top 25px
      background-size 21px
      background-color #fff
      background-position 16px 10px
      position relative
      .login_alert
        display block
        position absolute
        left 10px
        bottom -18px
        color #D04E00
        font-size 12px
    .login_input
      height 100%
      width 65%
      border 0 // 去除未选中状态边框
      outline none // 去除选中状态边框
    // .mint-cell
    //   background-color white
    .phone_link
      display block
      margin-right 15%
      margin-top 50px
      float right
      font-size 12px
    .login_btn
      width 70%
      margin 20px auto 30px
  .phone_link
    color #E8380D
  .login_btn
    background-color #E8380D
    border none
    height 40px
    border-radius 10px
    color #ffffff
    font-size 16px
  .other_loginway
    color #BDC1C3
    width 100%
    height 180px
    margin-top 20px
    p
      font-size 14px
    span
      display inline-block
      width 34px
      height 35px
      background-image url('./images/loginway.png')
      background-size 140px
      margin 20px 15px 0
      &:nth-child(3)
        background-position -35px 0
      &:nth-child(4)
        background-position -69px 0
  .login_footer
    font-size 12px
    span
      color #dddddd
      padding 0 20px
    a
      color #303028
</style>