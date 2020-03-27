<template>
  <div class="timeline-container">
    <SpeedBar></SpeedBar>
    <TimelineWarp></TimelineWarp>
  </div>
</template>

<script>
  const TimelineWarp = () => import('./TimelineWarp')
  const SpeedBar = () => import('../container/SpeedBar')
  export default {
    name: 'TimelineContainer',
    components: {
      'SpeedBar': SpeedBar,
      'TimelineWarp': TimelineWarp
    }
  }
</script>

<style scoped>
  .timeline-container {
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
