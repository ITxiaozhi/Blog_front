<template>
  <div class="social">
    <a href="https://github.com/ITxiaozhi" target="_blank" class="icon1"><i class="iconfont icongithub"></i></a>
    <a href="https://blog.csdn.net/qq_35955528" target="_blank" class="icon1"><i class="iconfont iconcsdn1"></i></a>
    <a href="https://www.cnblogs.com/it-xiaozhi/" target="_blank" class="icon1"><i class="iconfont iconbokeyuan"></i></a>
    <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=hanshouzhi204113@163.com" target="_blank" class="icon1"><i class="iconfont iconyouxiang"></i></a>
    <a href="https://github.com/ITxiaozhi" target="_blank" class="icon1"><i class="iconfont iconrss1"></i></a>
  </div>
</template>

<script>
  export default {
    name: "Social"
  }
</script>

<style scoped>
  .social {
    margin-bottom: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    height: 60px;
  }

  .icon1 {
    margin: 20px auto;
    text-decoration: none;
  }

  .social .icon1 i {
    font-size: 30px;
    text-align: center;
  }
</style>
