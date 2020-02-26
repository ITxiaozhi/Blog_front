<template>
  <div class="hot-subject">
    <div class="title"><h2>热门主题</h2></div>
    <div class="subject">
        <a>
          <img src="http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg">
        </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HotSubject"
  }
</script>

<style scoped>
  .hot-subject {
    margin-bottom: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }
  .title{
    height: 45px;
    border-bottom: 1px solid #90bba8;
    margin: 5px 20px;
  }
  h2{
    font-size: 16px;
    font-weight: 400;
    width: 80px;
    line-height: 45px;
  }
  .subject{
    margin: 10px 20px;
  }
  img{
    width: 100%;
    height: 186px;
  }
</style>
