<template>
  <div class="timeline-warp">
    <Timeline></Timeline>
    <SideBar></SideBar>
  </div>
</template>

<script>
  const Timeline = () => import("./Timeline");
  const SideBar = () => import("../sidebar/SideBar");
  export default {
    name: 'TimelineWarp',
    components: {
      "Timeline": Timeline,
      "SideBar": SideBar
    }
  }
</script>

<style scoped>
  .timeline-warp {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 10px 0;
  }
</style>
