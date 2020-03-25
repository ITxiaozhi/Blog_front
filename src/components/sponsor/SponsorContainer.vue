<template>
  <div class="sponsor-container">
    <SpeedBar></SpeedBar>
    <Sponsor></Sponsor>
  </div>
</template>

<script>
  const Sponsor = () => import('./Sponsor')
  const SpeedBar = () => import('../container/SpeedBar')
  export default {
    name: 'SponsorContainer',
    components: {
      'SpeedBar': SpeedBar,
      'Sponsor': Sponsor
    }
  }
</script>

<style scoped>
  .sponsor-container {
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
