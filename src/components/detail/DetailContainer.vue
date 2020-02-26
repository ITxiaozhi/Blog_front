<template>
  <div class="detail-container">
    <SpeedBar></SpeedBar>
    <DetailWarp></DetailWarp>
  </div>
</template>

<script>
  const DetailWarp = () => import("./DetailWarp");
  const SpeedBar = () => import("../container/SpeedBar");

  export default {
    name: "DetailContainer",
    components: {"SpeedBar": SpeedBar, "DetailWarp": DetailWarp}
  }
</script>

<style scoped>
  .detail-container {
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
