<template>
  <div class="side-bar">
    <Social></Social>
<!--    <HotSubject></HotSubject>-->
    <Archive></Archive>
    <TagCloud></TagCloud>
  </div>
</template>

<script>
  const Social = () => import("./Social");
  const HotSubject = () => import("./HotSubject");
  const Archive = () => import("./Archive");
  const TagCloud = () => import("./TagCloud");

  export default {
    name: "SideBar",
    components: {"TagCloud": TagCloud, "Archive": Archive, "HotSubject": HotSubject, "Social": Social}
  }
</script>

<style scoped>
  .side-bar {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    min-width: 310px;
    max-width: 310px;
  }
</style>
