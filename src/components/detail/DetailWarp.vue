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
  }
</style>
