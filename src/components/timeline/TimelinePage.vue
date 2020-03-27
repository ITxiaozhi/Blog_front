<template>
  <div class="timeline-page">
    <SimpleHeader></SimpleHeader>
    <TimelineContainer></TimelineContainer>
    <Footer></Footer>
  </div>
</template>

<script>
  const SimpleHeader = () => import("../header/SimpleHeader");
  const TimelineContainer = () => import("./TimelineContainer");
  const Footer = () => import("../footer/Footer");
  export default {
    name: 'TimelinePage',
    components: {
      "SimpleHeader": SimpleHeader,
      "TimelineContainer": TimelineContainer,
      "Footer": Footer
    }
  }
</script>

<style scoped>
  .timeline-page {
    display: flex;
    box-sizing: border-box;
    min-height: 100%;
    flex-direction: column;
  }
</style>
