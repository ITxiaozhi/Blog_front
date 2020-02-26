<template>
  <div class="tag-cloud">
    <div class="title">
      <h2>标签云</h2>
    </div>
    <div class="tag">
      <a>1</a>
      <a>2</a>
      <a>3</a>
      <a>4</a>
      <a>5</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TagCloud"
  }
</script>

<style scoped>
  .tag-cloud {
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
    color: #fff;
    background-color: #00a67c;
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 2px 6px;
    line-height: 21px;
  }
</style>
