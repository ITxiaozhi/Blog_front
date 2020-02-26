<template>
  <div class="articles" v-if="has_article">
    <div class="article" v-for="article in article_list" :label="article.name" :key="article.id">
      <div class="header">
        <h3 @click="jump(article.id)">
          {{article.title}}
          <!--          <router-link :to="{name:'detail',params:{id:text}}">{{article.title}}</router-link>-->
        </h3>
      </div>
      <div class="info">
        <span class="note">{{article.summary}}</span>
      </div>
      <p class="auth-span"></p>
    </div>
  </div>
  <div v-else>还没有文章</div>
</template>

<script>
  import cons from '@/components/constant';

  export default {
    name: "ArticleWarp",
    data() {
      return {
        test: 123,
        article_list: [],
        has_article: true,
      }
    },
    methods: {
      loadArticleList() {
        this.axios.get(cons.apis + '/article/list/?ordering=-update_date', {
          headers: {
            'Authorization': '123'
          },
          responseType: 'json',
        })
          .then(dat => {
            this.article_list = dat.data;
          }).catch(err => {
          console.log(err.response);
        });
      },
      jump(id) {
        this.$router.push('/detail/' + id);
      }
    },
    mounted() {
      this.loadArticleList();
    },
  }

</script>

<style scoped>
  .articles {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;

  }

  .article {
    background-color: #fff;
    padding: 20px 15px 30px 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    /*flex: 1;*/
  }

  .header {
    display: flex;
    height: 26px;
    margin-bottom: 16px;
  }

  .header h3 {
    font-size: 30px;
    color: #333;
    cursor: pointer;
  }

  .info {
    display: flex;
    /*height: 113px;*/
    margin-bottom: 10px;
    background-color: crimson;
  }

  .info span {
    width: 100%;
    word-wrap: break-word;
  }

  .auth-span {
    display: flex;
    height: 17px;
    background-color: blue;
  }

  img {
    width: 200px;
    height: 113px;
  }
</style>
