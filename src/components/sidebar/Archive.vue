<template>
  <div class="archive">
    <div class="title"><h2>文章归类</h2></div>
    <div class="tag">
      <a v-for="archive in archives" :key="archive.id" @click="jump('/list/archive/'+archive.create_date)">{{archive.create_date}}</a>
    </div>
  </div>
</template>

<script>
  import cons from '@/components/constant';

  export default {
    name: "Archive",
    data() {
      return {
        archives: [],
      }
    },
    methods: {
      jump(route) {
        this.$router.push(route);
      },
      getArchives() {
        this.axios.get(cons.apis + '/article/archive/', {
          headers: {
            'Authorization': '123'
          },
          responseType: 'json',
        })
          .then(dat => {
            this.archives = dat.data;
          }).catch(err => {
          console.log(err.response);
        });
      },
    },
    mounted() {
      this.getArchives()
    }
  }
</script>

<style scoped>
  .archive {
    margin-bottom: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;

  }

  .title {
    height: 45px;
    border-bottom: 1px solid #90bba8;
    margin: 5px 20px;
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
    width: 80px;
    line-height: 45px;
  }

  .tag {
    display: flex;
    flex-flow: row wrap;
    padding: 10px 20px;
    justify-content: space-between;
  }

  a {
    width: 44%;
    opacity: .7;
    text-align: center;
    filter: alpha(opacity=80);
    color: #fff;
    background-color: #00a67c;
    /*color: #00a67c;*/
    /*background-color: #00a67c;*/
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 2px 6px;
    line-height: 21px;
  }
</style>
