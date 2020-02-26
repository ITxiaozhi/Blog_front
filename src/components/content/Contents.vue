<template>
  <div class="content">
    <AdWarp></AdWarp>
    <ArticleWarp></ArticleWarp>
  </div>
</template>

<script>
  const AdWarp = () => import("./AdWarp");
  const ArticleWarp = () => import("./ArticleWarp");

  export default {
    name: "Contents",
    components: {
      "ArticleWarp": ArticleWarp,
      "AdWarp": AdWarp,
    }
  }
</script>

<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    width: 856px;
    padding: 0;
  }
</style>
