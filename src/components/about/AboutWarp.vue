<template>
  <div class="about-warp">
    <AboutInfo></AboutInfo>
    <SideBar></SideBar>
  </div>
</template>

<script>
  const AboutInfo = () => import("./AboutInfo");
  const SideBar = () => import("../sidebar/SideBar");
  export default {
    name: "AboutWarp",
    components: {"SideBar": SideBar, "AboutInfo": AboutInfo}
  }
</script>

<style scoped>
  .about-warp {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 10px 0;
    flex: 1;
  }
</style>
