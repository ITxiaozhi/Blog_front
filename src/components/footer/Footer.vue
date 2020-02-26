<template>
  <div class="footer">
    <footer-inner></footer-inner>
  </div>
</template>

<script>
  const FooterInner = () => import("./FooterInner");
  export default {
    name: "Footer",
    components: {"footer-inner": FooterInner}
  }
</script>

<style scoped>
  .footer {
    /*设置版心*/
    margin: auto;
    background: #333;
    border-top: 6px solid #d56464;
    width: 100%;
  }
</style>
