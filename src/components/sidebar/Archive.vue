<template>
  <div class="archive">
    <div class="title"><h2>文章归类</h2></div>
    <div class="tag">
      <a>2019-01</a>
      <a>2019-01</a>
      <a>2019-01</a>
      <a>2019-01</a>
      <a>2019-01</a>
      <a>2019-01</a>
      <a>2019-01</a>
      <a>2019-01</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Archive"
  }
</script>

<style scoped>
  .archive {
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
  .tag{
    display: flex;
    flex-flow: row wrap;
    padding: 10px 20px;
    justify-content: space-between;
  }
  a{
    width: 44%;
    opacity: .7;
    text-align: center;
    filter: alpha(opacity=80);
    color: #00a67c;
    /*background-color: #00a67c;*/
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 2px 6px;
    line-height: 21px;
  }
</style>
