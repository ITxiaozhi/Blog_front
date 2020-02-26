<template>
  <div class="detail-page">
    <SimpleHeader></SimpleHeader>
    <DetailContainer></DetailContainer>
    <Footer></Footer>
  </div>
</template>

<script>
  const SimpleHeader = () => import("../header/SimpleHeader");
  const DetailContainer = () => import("./DetailContainer");
  const Footer = () => import("../footer/Footer");

  export default {
    name: "DetailPage",
    components: {
      "DetailContainer": DetailContainer,
      "SimpleHeader": SimpleHeader,
      "Footer": Footer
    }

  }
</script>

<style scoped>
  .detail-page {
    display: flex;
    box-sizing: border-box;
    min-height: 100%;
    flex-direction: column;
  }
</style>
