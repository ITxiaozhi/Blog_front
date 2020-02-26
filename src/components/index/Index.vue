<template>
  <div class="indexpage">
    <SimpleHeader></SimpleHeader>
    <Container></Container>
    <Footer></Footer>
  </div>
</template>

<script>
  const SimpleHeader = () => import("../header/SimpleHeader");
  const Footer = () => import("../footer/Footer");
  const Container = () => import("../container/Container");

  export default {
    name: "Index",
    components: {
      "Container": Container,
      "SimpleHeader": SimpleHeader,
      "Footer": Footer
    }
  }
</script>

<style scoped>
  .indexpage {
    display: flex;
    box-sizing: border-box;
    min-height: 100%;
    flex-direction: column;
    /*position: relative;*/
  }
</style>
