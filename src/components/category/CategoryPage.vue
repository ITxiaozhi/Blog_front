<template>
  <div class="category-page">
    <SimpleHeader></SimpleHeader>
    <CategoryContainer></CategoryContainer>
    <Footer></Footer>
  </div>
</template>

<script>
  const SimpleHeader = () => import("../header/SimpleHeader");
  const CategoryContainer = () => import("./CategoryContainer");
  const Footer = () => import("../footer/Footer");
  export default {
    name: "CategoryPage",
    components: {
      "SimpleHeader": SimpleHeader,
      "CategoryContainer": CategoryContainer,
      "Footer": Footer
    }
  }
</script>

<style scoped>
  .category-page {
    display: flex;
    box-sizing: border-box;
    min-height: 100%;
    flex-direction: column;
  }
</style>
