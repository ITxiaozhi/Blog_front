<template>
  <div class="foot-inner">
    <copyright></copyright>
  </div>
</template>

<script>
  const Copyright = () => import("./Copyright");
  export default {
    name: "FooterInner",
    components: {"copyright": Copyright}
  }
</script>

<style scoped>
  .foot-inner {
    max-width: 1226px;
    padding: 16px 20px 14px;
    margin: 0 auto;
    color: #aaa;
    text-shadow: 0 -1px 0 #333;
  }
</style>
