<template>
  <div class="category-warp">
    <CategoryList></CategoryList>
    <SideBar></SideBar>
  </div>
</template>

<script>
  const CategoryList = () => import("./CategoryList");
  const SideBar = () => import("../sidebar/SideBar");
  export default {
    name: "CategoryWarp",
    components: {
      "CategoryList": CategoryList,
      "SideBar": SideBar
    }
  }
</script>

<style scoped>
  .category-warp {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
</style>
