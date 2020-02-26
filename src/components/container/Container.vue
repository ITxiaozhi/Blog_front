<template>
  <div class="container">
    <speed-bar></speed-bar>
    <ContentWarp></ContentWarp>
  </div>
</template>

<script>
  const SpeedBar = () => import("./SpeedBar");
  const ContentWarp = () => import("./ContentWarp");

  export default {
    name: "Container",
    components: {"ContentWarp": ContentWarp, "speed-bar": SpeedBar}
  }
</script>

<style scoped>
  .container {
    /*设置版心*/
    width: 1200px;
    margin: auto;
    margin-bottom: 10px;
    max-width: 1226px;
    text-align: left;

    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>
