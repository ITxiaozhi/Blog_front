<template>
  <div class="about-page">
    <SimpleHeader></SimpleHeader>
    <AboutContainer></AboutContainer>
    <Footer></Footer>
  </div>
</template>

<script>
  const SimpleHeader = () => import("../header/SimpleHeader");
  const AboutContainer = () => import("./AboutContainer");
  const Footer = () => import("../footer/Footer");
  export default {
    name: "AboutPage",
    components: {"SimpleHeader": SimpleHeader, "AboutContainer": AboutContainer, "Footer": Footer}
  }
</script>

<style scoped>
  .about-page {
    display: flex;
    box-sizing: border-box;
    min-height: 100%;
    flex-direction: column;
  }
</style>
