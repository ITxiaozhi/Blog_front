<template>
  <div class="detail-warp">
    <DetailInfo></DetailInfo>
    <SideBar></SideBar>
  </div>
</template>

<script>
  const DetailInfo = () => import("./DetailInfo");
  const SideBar = () => import("../sidebar/SideBar");
  export default {
    name: "DetailWarp",
    components: {"SideBar": SideBar, "DetailInfo": DetailInfo}
  }
</script>

<style scoped>
  .detail-warp {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 10px 0;
    flex: 1;
  }
</style>
