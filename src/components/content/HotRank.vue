<template>
  <div class="hotrank">
    <h2>
      热门排行
    </h2>
    <div class="hot_article">
      <div class="article" v-for="article in article_list" :label="article.name" :key="article.id">
        <span class="title" @click="jump(article.id)">{{article.title}}</span>
        <div>
          <i class="iconfont iconliulan2"></i>
          <span>{{article.views}}人阅读</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cons from '@/components/constant';

  export default {
    name: "HotRank",
    data() {
      return {
        article_list: [],
        has_article: false,
      }
    },
    methods: {
      loadArticleList() {
        this.axios.get(cons.apis + '/article/hot/', {
          headers: {
            'Authorization': '123'
          },
          responseType: 'json',
        })
          .then(dat => {
            this.article_list = dat.data;
            this.has_article = true;
          }).catch(err => {
          console.log(err.response);
        });
      },
      jump(id) {
        this.$router.push('/detail/' + id);
      },
    },
    mounted() {
      this.loadArticleList();
    },
  }
</script>

<style scoped>
  .hotrank {
    background-color: white;
    height: 10px;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 10px 0 10px 0;
  }

  .hotrank h2 {
    line-height: 45px;
    font-weight: 400;
    color: #1abc9c;
    font-size: 16px;
    height: 45px;
    border-bottom: 1px solid #90bba8;
    margin: 5px 20px;
  }


  /*.hotrank .hot_article {*/
  /*  line-height: 45px;*/
  /*  font-weight: 400;*/
  /*  color: #1abc9c;*/
  /*  font-size: 16px;*/
  /*  margin: 5px 20px;*/
  /*}*/
  .hot_article {
    margin: 5px 20px;
  }
  .hot_article .article {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .hot_article .article .title {
    font-size: 16px;
    color: #1abc9c;
    cursor: pointer;
    font-weight: normal;
  }
</style>
