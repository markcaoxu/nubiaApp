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
      <input
        class="register_phone"
        type="tel"
        placeholder="请输入您的手机号码"
        v-model="phone"
        @blur="haveChange(1)"
      />
      <p class="phone_msg" :class="{showText:!phoneNull}">请输入您的手机号</p>
      <!-- 密码 -->
      <input
        class="register_password"
        type="password"
        placeholder="请输入密码"
        v-model="password"
        @blur="haveChange(2)"
      />
      <p class="password_msg" :class="{showText:!pwdNull}">密码不能为空</p>
      <!-- 图形验证码 -->
      <div class="captcha_wipper">
        <input
          class="register_captcha"
          type="text"
          placeholder="请输入图形验证码"
          v-model="captchaInput"
          @blur="haveChange(3)"
        />
        <img :src="this.captcha" alt />
      </div>
      <p class="captcha_msg" :class="{showText:!capNull}">请输入验证码</p>
    </div>
    <!-- 注册声明 -->
    <div class="register_text">
      <p>
        注册即表示您对这个功能抱有一丝侥幸并签署
        <a href="javascript:;">不平等协议</a>和
        <a href="javascript:;">卖身协议</a>
      </p>
    </div>
    <!-- 注册按钮 -->
    <div class="register_btn" @click="registerSuccess">注册</div>
  </div>
</template>

<script>
// 图形验证码接口
import { reqRegisterCaptcha } from "../../api/index.js";
// 引入MessageBxo插件
import { MessageBox, Toast } from "mint-ui";
// change file
export default {
  data() {
    return {
      phone: "",
      password: "",
      captchaInput: "",
      captcha: "",
      phoneNull: false,
      pwdNull: false,
      capNull: false
    };
  },
  mounted() {
    reqRegisterCaptcha().then(response => {
      this.captcha = response.register.captcha;
    });
  },
  methods: {
    haveChange(index) {
      if (index === 1) {
        if (this.phone === "") {
          this.phoneNull = true;
        } else {
          this.phoneNull = false;
        }
      }

      if (index === 2) {
        if (this.password === "") {
          this.pwdNull = true;
        } else {
          this.pwdNull = false;
        }
      }
      if (index === 3) {
        if (this.captchaInput === "") {
          this.capNull = true;
        } else {
          this.capNull = false;
        }
      }
    },
    registerSuccess() {
      if (
        this.phone === "" ||
        this.password === "" ||
        this.captchaInput === ""
      ) {
        this.phoneNull = true;
        this.pwdNull = true;
        this.capNull = true;
        // 提示
        Toast({
          message: "信息未填写齐全，请补全",
          position: "bottom"
        });
      } else {
        // 提示框是否确认
        MessageBox.confirm(
          "If you confirm that the captcha code is correct,it`s correct!"
        ).then(
          action => {
            // 清空
            this.phone = "";
            this.password = "";
            this.captchaInput = "";
            // 提示
            Toast({
              message: "正在跳转登录界面",
              position: "bottom"
            });
            // 延时跳转
            setTimeout(() => {
              this.$router.replace("/login");
            }, 1000);
          },
          action => {}
        );
      }
    }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.register
  width 100%
  height 100%
  background-color #F5F5F5
  display flex
  flex-direction column
  align-items center
  .register_header
    width 90%
    height 40px
    line-height 40px
    border-bottom 3px solid #E9E9E9
    p
      font-size 16px
      font-weight 700
  .register_content
    width 90%
    .captcha_wipper
      margin-top 10px
    input
      width 100%
      height 40px
      border 1px solid #B9B9B9
      border-radius 10px
      padding-left 9px
    .register_phone
      margin-top 19px
    .register_password
      margin-top 10px
    .register_captcha
      margin-top 0px
      width 60%
    ::-webkit-input-placeholder
      color #9C9C9C
      font-size 14px
    img
      width 100px
      height 40px
      vertical-align middle
      float right
    p
      display block
      width 90%
      height 14px
      font-size 12px
      padding-left 10px
      padding-top 4px
      color #D04E00
      &.showText
        color rgba(0, 0, 0, 0)
  .register_text
    width 80%
    font-size 12px
    color #999999
    padding-top 20px
    a
      color #E8380D
      text-decoration underline
  .register_btn
    width 90%
    height 40px
    background-color #E8380D
    line-height 40px
    text-align center
    border-radius 18px
    color #ffffff
    margin-top 20px
</style>