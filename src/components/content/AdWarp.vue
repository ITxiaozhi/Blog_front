<template>
  <div class="ad-warp">
<!--    <SlideWarp></SlideWarp>-->
    <HotRank></HotRank>
  </div>
</template>

<script>
  const SlideWarp = () => import("./SlideWarp");
  const HotRank = () => import("./HotRank");

  export default {
    name: "AdWarp",
    components: {"HotRank": HotRank, "SlideWarp": SlideWarp}
  }
</script>

<style scoped>
  .ad-warp {
    display: flex;
    flex-direction: column;
    margin: 0 0 10px 0;
    top: 0;
  }
</style>
