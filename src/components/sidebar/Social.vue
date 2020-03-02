<template>
  <div class="social">
    <div class="icon">社交1</div>
    <div class="icon">社交2</div>
    <div class="icon">社交3</div>
    <div class="icon">社交4</div>
  </div>
</template>

<script>
  export default {
    name: "Social"
  }
</script>

<style scoped>
  .social {
    margin: 10px 0;
    background-color: #fff;
    display: flex;
    flex-direction: row;
  }
  .icon{
    margin: 10px;
  }
</style>
