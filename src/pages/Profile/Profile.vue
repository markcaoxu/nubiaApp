<template>
  <!-- profile 个人中心组件 -->
  <div class="user_center">
    <!-- 头部 -->
    <div class="user_header">
      <div class="loginBtn" @click="$router.replace('/login')">
        <!-- 头像 -->
        <img class="user_img" src="./images/userheader/false.jpg" alt />
        <!-- 用户名-会员等级 -->
        <div class="user_name">
          <p>登录/注册</p>
          <div class="user_vip">
            <img src="./images/userheader/star.png" alt />
            <span>普通会员</span>
          </div>
        </div>
      </div>

      <img class="user_message" src="./images/userheader/message.png" alt />
    </div>
    <!-- 券 -->
    <div class="user_ticket">
      <ul class="ticket_list">
        <li class="ticket_item" @click="$router.push('/ticket01')">
          <span>0</span>
          <p>优惠券</p>
        </li>
        <li class="ticket_item">
          <span>￥0</span>
          <p>回收代金券</p>
        </li>
        <li class="ticket_item">
          <span>0</span>
          <p>收藏</p>
        </li>
        <li class="ticket_item">
          <span>0</span>
          <p>积分</p>
        </li>
      </ul>
    </div>
    <!-- 订单 -->
    <div class="user_order">
      <div class="order_header">
        <span>我的订单</span>
        <a href="javascript:;">查看全部 ></a>
      </div>
      <ul class="order_list">
        <li class="order_item">
          <img src="./images/order/qianbao.png" alt />
          <p>代付款</p>
        </li>
        <li class="order_item">
          <img src="./images/order/kuaidi.png" alt />
          <p>待收货</p>
        </li>
        <li class="order_item">
          <img src="./images/order/wancheng.png" alt />
          <p>已完成</p>
        </li>
        <li class="order_item">
          <img src="./images/order/huishou.png" alt />
          <p>回收订单</p>
        </li>
      </ul>
    </div>
    <!-- 我的工具 -->
    <div class="user_tool">
      <div class="tool_header">
        <span>我的工具</span>
      </div>
      <ul class="tool_list">
        <li class="tool_item">
          <img src="./images/tool/huiyuanzhongxin.png" alt />
          <p>会员中心</p>
        </li>
        <li class="tool_item">
          <img src="./images/tool/dizhi.png" alt />
          <p>收货地址</p>
        </li>
        <li class="tool_item">
          <img src="./images/tool/dianhua.png" alt />
          <p>我的预约</p>
        </li>
        <li class="tool_item">
          <img src="./images/tool/nbma.png" alt />
          <p>NB码</p>
        </li>
        <li class="tool_item">
          <img src="./images/tool/xunzhang.png" alt />
          <p>专属勋章</p>
        </li>
      </ul>
    </div>
    <!-- 售后服务 -->
    <div class="user_serve">
      <div class="serve_header">
        <span>售后服务</span>
        <a href="javascript:;">查看全部 ></a>
      </div>
      <ul class="serve_list">
        <li class="serve_item">
          <img src="./images/serve/shouhou.png" alt />
          <p>售后网点</p>
        </li>
        <li class="serve_item">
          <img src="./images/serve/yijiuhuanxin.png" alt />
          <p>以旧换新</p>
        </li>
        <li class="serve_item">
          <img src="./images/serve/sousuo.png" alt />
          <p>真伪查询</p>
        </li>
        <li class="serve_item">
          <img src="./images/serve/jiage.png" alt />
          <p>非保价格查询</p>
        </li>
        <li class="serve_item">
          <img src="./images/serve/wuliu.png" alt />
          <p>寄修服务</p>
        </li>
        <li class="serve_item">
          <img src="./images/serve/baoxian.png" alt />
          <p>意外保障服务</p>
        </li>
        <li class="serve_item">
          <img src="./images/serve/shouhoudingdan.png" alt />
          <p>售后订单</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
// 个人中心
.user_center
  width 100%
  margin 0 auto
  background-color #F8F8F8
  overflow hidden
  // 头部
  .user_header
    width 100%
    height 120px
    // background-image url('./images/bg.png')
    background-color #0F0F0F
    
    overflow hidden
    .loginBtn
      // 头像
      width 60%
      display flex
      position relative
      .user_img
        width 60px
        height 60px
        border-radius 50%
        margin 35px 6px 25px 22px
      // 用户名
      .user_name
        height 60px
        color #cccccc
        font-size 16px
        margin-top 47px
        p
          padding-left 5px
          color white
        // 用户等级
        .user_vip
          width 100px
          height 20px
          border-radius 12px
          font-size 12px
          text-align center
          line-height 20px
          background-color #222222
          position relative
          border #cccccc 1px solid
          margin-top 3px
          img
            position absolute
            left 6px
    // 消息
    .user_message
      width 25px
      height 25px
      position absolute
      right 15px
      top 15px
  // 券
  .user_ticket
    width 100%
    height 80px
    background-color #fff
    overflow hidden
    .ticket_item
      float left
      width 25%
      text-align center
      margin-top 20px
      span
        font-size 18px
        font-weight 700
        color #000000
      p
        font-size 12px
        color #A8B8C1
        margin-top 3px
  // 我的订单
  .user_order
    width 100%
    height 110px
    margin-top 10px
    background-color #fff
    overflow hidden
    .order_header
      width 100%
      height 30px
      padding-top 12px
      padding-left 10px
      position relative
      span
        font-size 18px
        font-weight 600
      a
        position absolute
        right 15px
        top 15px
    .order_list
      width 100%
      .order_item
        float left
        width 24%
        text-align center
        overflow hidden
        img
          width 40px
          height 40px
        p
          font-size 12px
          color #7F7F7F
  // 我的工具
  .user_tool
    width 100%
    background-color #fff
    margin-top 10px
    padding-bottom 10px
    overflow hidden
    .tool_header
      width 100%
      height 30px
      padding-top 12px
      padding-left 10px
      span
        font-size 18px
        font-weight 600
    .tool_list
      width 100%
      overflow hidden
      .tool_item
        width 25%
        float left
        margin-top 15px
        text-align center
        img
          width 40px
          height 40px
          margin-bottom 4px
        p
          font-size 12px
          color #7F7F7F
  // 售后服务
  .user_serve
    width 100%
    background-color #fff
    margin-top 10px
    padding-bottom 90px
    overflow hidden
    .serve_header
      width 100%
      height 30px
      padding-top 12px
      padding-left 10px
      position relative
      span
        font-size 18px
        font-weight 600
      a
        position absolute
        right 15px
        top 15px
    .serve_list
      width 100%
      overflow hidden
      .serve_item
        width 25%
        float left
        margin-top 15px
        text-align center
        img
          width 40px
          height 40px
          margin-bottom 4px
        p
          font-size 12px
          color #7F7F7F
</style>
