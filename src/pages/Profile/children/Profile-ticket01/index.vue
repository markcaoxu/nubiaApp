<template>
  <div class="ticket01">
    <div class="ticket01_header">
      <span><</span>
      <span>我的优惠券</span>
    </div>
    <div class="ticket01_content">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <!-- <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 10" :title="'内容 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>