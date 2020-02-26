<template>
  <div class="side-bar">
    <Social></Social>
    <HotSubject></HotSubject>
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
    background-color: coral;
    /*right: 61.5px;*/
    /*width: 340px;*/
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    /*width: 100%;*/
    width: 330px;
  }
</style>
