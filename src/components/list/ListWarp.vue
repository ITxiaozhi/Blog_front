<template>
  <div class="list-warp">
    <List></List>
    <SideBar></SideBar>
  </div>
</template>

<script>
  const List = () => import("./List");
  const SideBar = () => import("../sidebar/SideBar");
  export default {
    name: "ListWarp",
    components: {
      "List": List,
      "SideBar": SideBar
    }
  }
</script>

<style scoped>
  .list-warp {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 10px 0;
  }
</style>
