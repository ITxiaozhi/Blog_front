<template>
  <div class="sponsor-page">
    <SimpleHeader></SimpleHeader>
    <SponsorContainer></SponsorContainer>
    <Footer></Footer>
  </div>
</template>

<script>
  const SimpleHeader = () => import("../header/SimpleHeader");
  const SponsorContainer = () => import("./SponsorContainer");
  const Footer = () => import("../footer/Footer");
  export default {
    name: 'SponsorPage',
    components: {
      "SimpleHeader": SimpleHeader,
      "SponsorContainer": SponsorContainer,
      "Footer": Footer
    }
  }
</script>

<style scoped>
  .sponsor-page {
    display: flex;
    box-sizing: border-box;
    min-height: 100%;
    flex-direction: column;
  }
</style>
