<template>
  <div class="content-wrap">
    <Contents></Contents>
    <SideBar></SideBar>
  </div>
</template>

<script>
  const Contents = () => import("../content/Contents");
  const SideBar = () => import("../sidebar/SideBar");

  export default {
    name: "ContentWarp",
    components: {"Contents": Contents, "SideBar": SideBar}
  }
</script>

<style scoped>
  .content-wrap {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
    flex: 1;
  }
</style>
