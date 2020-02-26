<template>
  <div class="category-container">
    <SpeedBar></SpeedBar>
    <CategoryWarp></CategoryWarp>
  </div>
</template>

<script>
  const CategoryWarp = () => import("./CategoryWarp");
  const SpeedBar = () => import("../container/SpeedBar");
  export default {
    name: "CategoryContainer",
    components: {
      "SpeedBar": SpeedBar,
      "CategoryWarp": CategoryWarp
    }
  }
</script>

<style scoped>
  .category-container {
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
