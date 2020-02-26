<template>
  <div class="articles" v-if="has_article">
    <div class="article" v-for="article in article_list" :label="article.name" :key="article.id">
      <div class="header">
        <h3 @click="jump('/detail/' + article.id)">
          {{article.title}}
        </h3>
      </div>
      <div class="info">
        <span class="note">{{article.summary}}</span>
      </div>
      <p class="auth-span"></p>
    </div>
  </div>
  <div v-else>没有该分类的文章</div>
</template>

<script>
  import cons from '@/components/constant';

  export default {
    name: "CategoryList",
    data() {
      return {
        article_list: [],
        has_article: false,
      }
    },
    methods: {
      jump(route) {
        this.$router.push(route);
      },
      loadArticle() {
        this.axios.get(cons.apis + '/article/category/articles/' + this.$route.params.id, {
          headers: {
            'Authorization': '123'
          },
          responseType: 'json',
        })
          .then(dat => {
            this.article_list = dat.data;
            this.has_article = true
          }).catch(err => {
          console.log(err.response);
        });
      }
    },
    mounted() {
      this.loadArticle()
    }
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
</style>
