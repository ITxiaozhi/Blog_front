<template>
  <div class="logo">
    <h1>
      <span class="logo-name">
        <a @click="jump">志</a>
      </span>
      <span class="logo-value">
        <a @click="jump">IT-小志的博客</a>
      </span>
    </h1>
  </div>
</template>

<script>
  export default {
    name: "LogoHeader",
    methods:{
      jump() {
        this.$router.push('/');
      }
    }
  };
</script>

<style scoped>
  .logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    /*height: 107px;*/
  }

  .logo h1 {
    padding: 40px 0 40px 0
  }
  .logo-name{
    letter-spacing: -2px;
    /*position: relative;*/
    color: #fff;
    font-size: 54px;
    text-shadow: 0 0 1px rgba(94, 255, 216, .8);
    margin: 0;
    padding: 0;
    z-index: 0;
    -webkit-transition: all .1s ease-out;
    -moz-transition: all .1s ease-out;
    -o-transition: all .1s ease-out;
    /*-ms-transition: all .1s ease-out;*/
    transition: all .1s ease-out;
  }
  .logo-value{
    /*position: relative;*/
    color: #fff;
    font-weight: 400;
    font-size: 24px;
    text-shadow: 0 0 1px rgba(94, 255, 216, .8);
    margin-left: 5px;
    letter-spacing: 1px;
    padding: 0;
    z-index: 2;
    -webkit-transition: all .5s ease-out;
    -moz-transition: all .5s ease-out;
    -o-transition: all .5s ease-out;
    /*-ms-transition: all .5s ease-out;*/
    transition: all .5s ease-out;
  }
  /*h1:hover*/
  /*{*/
  /*  width:30px;*/
  /*}*/
</style>
