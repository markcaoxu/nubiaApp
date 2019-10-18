<template>
  <!-- 注册页 -->
  <div class="register">
    <!-- 注册页的头部 -->
    <div class="register_header">
      <p>用手机号注册</p>
    </div>
    <!-- 注册主体 -->
    <div class="register_content">
      <!-- 账号 -->
      <input class="register_phone" type="tel" placeholder="请输入您的手机号码" v-model="phone"/>
      <!-- 密码 -->
      <input class="register_password" type="password" placeholder="请输入密码" v-model="password"/>
    </div>
    <!-- 注册声明 -->
    <div class="register_text">
      <img :src="this.captcha" alt />
    </div>
    <!-- 注册按钮 -->
    <div class="register_btn"></div>
  </div>
</template>

<script>
import { reqRegisterCaptcha } from "../../api/index.js";
export default {
  data() {
    return {
      phone: "",
      password: "",
      captcha: ""
    };
  },
  mounted() {
    reqRegisterCaptcha().then((response)=> {
      console.log(response);
      this.captcha = response.register.captcha
    });
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.register
  width 100%
  height 100%
  // .register_header
  // .register_content
  // .register_text
  // .register_btn
</style>