<template>
  <div class="hotrank">
    <h2>
      热门排行
    </h2>
    <div class="title">
      <ul>
        <li>头条1</li>
        <li>头条2</li>
        <li>头条3</li>
        <li>头条4</li>
        <li>头条5</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HotRank"
  }
</script>

<style scoped>
  .hotrank {
    background-color: white;
    height: 10px;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 10px 0px;
  }

  h2 {
    line-height: 45px;
    font-weight: 400;
    color: #1abc9c;
    font-size: 16px;
    height: 45px;
    border-bottom: 1px solid #90bba8;
    margin: 5px 20px;
  }

  li {
    list-style: none;
  }

  .title {
    line-height: 45px;
    font-weight: 400;
    color: #1abc9c;
    font-size: 16px;
    margin: 5px 20px;
  }
</style>
