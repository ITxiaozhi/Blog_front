<template>
  <div class="message-page">
    <SimpleHeader></SimpleHeader>
    <MessageContainer></MessageContainer>
    <Footer></Footer>
  </div>
</template>

<script>
  const SimpleHeader = () => import("../header/SimpleHeader");
  const MessageContainer = () => import("./MessageContainer");
  const Footer = () => import("../footer/Footer");
  export default {
    name: "MessagePage",
    components: {
      "SimpleHeader": SimpleHeader,
      "MessageContainer": MessageContainer,
      "Footer": Footer
    }
  }
</script>

<style scoped>
  .message-page {
    display: flex;
    box-sizing: border-box;
    min-height: 100%;
    flex-direction: column;
  }
</style>
