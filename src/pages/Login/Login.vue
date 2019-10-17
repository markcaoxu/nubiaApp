<template>
  <!-- 登录组件 -->
  <div class="login">
    <!-- 顶部标志 -->
    <img class="header_img" src="./images/m_logo.png" alt />
    <!-- 登录主体 -->
    <div class="login_main">
      <!-- 用户框 -->
      <ValidationProvider name="用户名" rules="required|phone2" v-slot="{ errors }">
        <div class="field login_user">
          <input value="18553876187" class="login_input" v-model="username" type="text" placeholder="用户名" />
          <span class="login_alert">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
      <!-- 密码框 -->
      <ValidationProvider name="密码" rules="required|min:6" v-slot="{ errors }">
        <div class="field login_pwd">
          <input value="123456" class="login_input" v-model="password" type="password" placeholder="密码"/>
          <span class="login_alert">{{ errors[0] }}</span>
          <em class="pwd_hide" @click="isPwdShow=!isPwdShow" :class="{pwd_show:isPwdShow}"></em>
        </div>
      </ValidationProvider>
      <a class="phone_link" href="javascript:;" @click="$router.push('/loginWithCode')">手机验证登录</a>
      
      <button class="login_btn" @click.prevent="login">立即登录</button>
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
    <router-view></router-view>
  </div>
  
</template>

<script>
// 引入vee-validate的组件
import { ValidationObserver, ValidationProvider } from "vee-validate";
// 引入登录接口
import { reqPwdLogin } from "../../api/index.js"
// 引入mint-ui
import { Toast, MessageBox } from "mint-ui";
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
  },
  methods:{
    async login(){
      // 获取用户名和密码
      const { username,password } = this
      // console.log(this)
      // 发送请求，携带账号和密码
        console.log('发送请求')
      const result =await reqPwdLogin({username,password})
    
      // console.log(result)
      // if(username==='18553876187'&&password==='123456'){
      //   console.log('success')
      //   // console.log(this)
      //   Toast("登录成功")
      //   setTimeout(()=>{
      //     this.$router.replace('/profile')
      //   },1000)
      // }
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