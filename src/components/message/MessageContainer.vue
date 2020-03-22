<template>
  <div class="message-container">
    <SpeedBar></SpeedBar>
    <Messages></Messages>
  </div>
</template>

<script>
  const Messages = () => import("./Messages");
  const SpeedBar = () => import("../container/SpeedBar");
    export default {
        name: "MessageContainer",
      components: {
        "SpeedBar": SpeedBar,
        "Messages": Messages
      }
    }
</script>

<style scoped>
  .message-container {
    width: 1200px;
    margin: auto;
    margin-bottom: 10px;
    max-width: 1226px;
    text-align: left;

    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>
