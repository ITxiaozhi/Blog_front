<template>
  <div class="about-container">
    <SpeedBar></SpeedBar>
    <AboutWarp></AboutWarp>
  </div>
</template>

<script>
  const AboutWarp = () => import("./AboutWarp");
  const SpeedBar = () => import("../container/SpeedBar");
  export default {
    name: "AboutContainer",
    components: {"SpeedBar": SpeedBar, "AboutWarp": AboutWarp}
  }
</script>

<style scoped>
  .about-container {
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
