<template>
  <div class="list-container">
    <SpeedBar></SpeedBar>
    <ListWarp></ListWarp>
  </div>
</template>

<script>
  const ListWarp = () => import("./ListWarp");
  const SpeedBar = () => import("../container/SpeedBar");
  export default {
    name: "ListContainer",
    components: {
      "SpeedBar": SpeedBar,
      "ListWarp": ListWarp
    }
  }
</script>

<style scoped>
  .list-container {
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
