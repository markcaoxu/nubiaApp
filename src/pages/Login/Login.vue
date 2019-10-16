<template>
  <div>
    登录
  </div>
</template>

<script>

export default {
  // 定义表达式
  data() {
    return {
      phone: "", //用来存储账号
      pwd: "", // 用于存储密码
      isPwdShow: false, // 用来切换密码是否明文
    };
  },
  computed: {
    // 正则检测手机号是否正确
    isRightPhone() {
      return /[1]\d{10}/.test(this.phone);
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>