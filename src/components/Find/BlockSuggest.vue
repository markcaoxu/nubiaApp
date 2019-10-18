<template>
  <div id='app'>
    <section class='footerr'>
      <p class='suggest'>相关推荐</p>
      <ul class='list'>
        <li class='show'>
          <img class='imgg' src="" alt="">
          <h3 class='h3'>『玩转nubia UI』个性熄屏，自己掌控！</h3>
          <div class="dtv">
            <span>努比亚</span>
            <span>2019-05-04</span>
          </div>
        </li>
      </ul>
      <p class="btn">查看更多文章 》</p>
    </section>
  </div>
</template>
<script>
export default {
}
</script>
<style lang='stylus'>
.footerr
  width 100%
	height 100%
  .suggest
    height 50px
    font-size 25px
  .list
    margin 0 auto
    background-color pink
    .show
      height 100px
      background-color gray
      .imgg
        width 150px
        height 100%
        background-color purple
      .h3
        display inline-block
        line-height 30px
        font-size 25px
      .dtv
        height 50px
</style>