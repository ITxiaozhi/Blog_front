<template>
  <div class="list-page">
    <SimpleHeader></SimpleHeader>
    <ListContainer></ListContainer>
    <Footer></Footer>
  </div>
</template>

<script>
  const SimpleHeader = () => import("../header/SimpleHeader");
  const ListContainer = () => import("./ListContainer");
  const Footer = () => import("../footer/Footer");
  export default {
    name: "ListPage",
    components: {
      "SimpleHeader": SimpleHeader,
      "ListContainer": ListContainer,
      "Footer": Footer
    }
  }
</script>

<style scoped>
  .list-page {
    display: flex;
    box-sizing: border-box;
    min-height: 100%;
    flex-direction: column;
  }
</style>
