<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view/>
    <template>
        <el-backtop></el-backtop>
    </template>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
