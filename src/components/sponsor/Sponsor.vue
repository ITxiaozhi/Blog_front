<template>
  <div class="sponsor">
    <div class="title">
      <h2>如果觉得本博客的教程对你有帮助，不妨小额赞助博主一下，你的赞助是对博主的最大支持。</h2>
    </div>
    <div class="payimage">
      <div class="pay">
        <img src="@/assets/chatpay.jpg"/>
        <div>微信</div>
      </div>
      <div class="pay">
        <img src="@/assets/alipay.jpg"/>
        <div>支付宝</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sponsor'
  }
</script>

<style scoped>
  .sponsor {
    width: 100%;
    min-height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }
  .sponsor .title{
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  .sponsor .payimage{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .sponsor .payimage .pay{
    margin: 10px 50px;
  }
  .sponsor .payimage .pay img{
    width: 250px;
    height: 250px;
  }
  .sponsor .payimage .pay div{
    text-align: center;
    font-size: 16px;
    color: #67C23A;
  }
</style>
