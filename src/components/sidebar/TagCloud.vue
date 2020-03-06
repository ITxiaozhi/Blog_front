<template>
  <div class="tag-cloud">
    <div class="title">
      <h2>标签云</h2>
    </div>
    <div class="tag">
      <a v-for="tag in tags" :key="tag.id" @click="jump('/list/tag/'+tag.id)">{{tag.name}}</a>
    </div>
  </div>
</template>

<script>
  import cons from '@/components/constant';
  export default {
    name: "TagCloud",
    data() {
      return {
        tags: [],
      }
    },
    methods: {
      jump(route) {
        this.$router.push(route);
      },
      getTags() {
        this.axios.get(cons.apis + '/article/tag/', {
          headers: {
            'Authorization': '123'
          },
          responseType: 'json',
        })
          .then(dat => {
            this.tags = dat.data;
          }).catch(err => {
          console.log(err.response);
        });
      },
    },
    mounted() {
      this.getTags()
    }
  }
</script>

<style scoped>
  .tag-cloud {
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
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 2px 6px;
    line-height: 21px;
  }
</style>
