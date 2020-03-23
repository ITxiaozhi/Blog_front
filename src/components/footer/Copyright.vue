<template>
  <div class="copyright">
    <a @click="jump('/')">IT-小志</a>|
    <a href="http://www.beian.miit.gov.cn/" target="_blank">京ICP备20007546</a>
  </div>
</template>

<script>
  export default {
    name: "Copyright",
    methods: {
      jump(route) {
        this.$router.push(route);
      },
    }
  }
</script>

<style scoped>
  .copyright {
    text-align: center;
  }

  a {
    color: #aaa;
  }
</style>
