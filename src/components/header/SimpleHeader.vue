<template>
  <div class="simpleheader">
    <container-inner></container-inner>
  </div>
</template>

<script>
  const ContainerInner = () => import("./ContainerInner.vue");
  export default {
    name: "SimpleHeader",
    components: {
      "container-inner": ContainerInner
    }
  }
</script>

<style scoped>
  .simpleheader {
    display: flex;
    background-color: black;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    position: relative;
    z-index: 9999;
  }
</style>
