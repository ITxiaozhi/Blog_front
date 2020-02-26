<template>
  <div class="contain-inner">
    <LogoHeader></LogoHeader>
    <nav-bar-header></nav-bar-header>
  </div>
</template>

<script>
  const NavBarHeader = () => import("./NavBarHeader");
  const LogoHeader = () => import("./LogoHeader");

  export default {
    name: "ContainerInner",
    components: {
      "LogoHeader": LogoHeader,
      "nav-bar-header": NavBarHeader
    }
  };
</script>

<style scoped>
  .contain-inner {
    display: flex;
    flex-direction: column;
    max-width: 1226px;
    text-align: center;
    /*设置版心*/
    width: 1200px;
    margin: auto;
  }
</style>
