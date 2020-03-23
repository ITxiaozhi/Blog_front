<template>
  <div class="speed">
    <i class="iconfont icontongzhi1"></i>
    <div class="info">本站是最牛逼的网站</div>
  </div>
</template>

<script>
  export default {
    name: "SpeedBar"
  }
</script>

<style scoped>
  .speed {
    color: #666;
    /*position: absolute;*/
    background-color: #fbfbfb;
    padding: 8px 20px 18px;
    line-height: 25px;
    overflow: hidden;
    height: 14px;
    margin-top: 0;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
  }
  .speed .icontongzhi1{
    color: #56af45;
  }
  .speed .info{
    margin-left: 5px;
  }
</style>
