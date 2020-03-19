<template>
  <div class="articles" v-if="has_article">
    <div class="article" v-for="(article, index) in article_list" :label="article.name" :key="article.id">
      <div class="header">
        <h3 @click="jump(article.id)">
          {{article.title}}
        </h3>
      </div>
      <div class="info">
        <span class="note">{{article.summary}}</span>
      </div>
      <div class="auth-info">
        <i class="iconfont iconshijian1"></i>
        <span>{{article.create_date|dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
        <span>|</span>
        <i class="iconfont iconliulan2"></i>
        <span>{{article.views}}人阅读</span>
        <span>|</span>
        <i class="iconfont iconxiai1" @click="love(article.id, index)"></i>
        <span>{{article.loves}}人喜爱</span>
      </div>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-count="pages"
      :current-page="page"
      style="text-align:center;margin-top:10px"
      @current-change="fnGetPage"
    >
    </el-pagination>
  </div>
  <div v-else>还没有文章</div>
</template>

<script>
  import cons from '@/components/constant';

  export default {
    name: "ArticleWarp",
    data() {
      return {
        article_list: [],
        has_article: false,
        page:1,
        pages:8,
        pagesize:10,
      }
    },
    methods: {
      loadArticleList(num) {
        this.axios.get(cons.apis + '/article/list/', {
          headers: {
            'Authorization': '123'
          },
          params:{
            page:num,
            pagesize:this.pagesize,
            ordering:'-create_date'
          },
          responseType: 'json',
        })
          .then(dat => {
            if (dat.data) {
              this.article_list = dat.data.lists;
              this.has_article = true;
              this.page = dat.data.page;
              this.pages = dat.data.pages;
            }
          }).catch(err => {
          console.log(err.response);
        });
      },
      fnGetPage(dat){
        this.page = dat;
        this.loadArticleList(this.page);
      },
      jump(id) {
        this.$router.push('/detail/' + id);
      },
      love(id, index) {
        this.axios.put(cons.apis + '/article/love/' + id, {
          headers: {
            'Authorization': '123'
          },
          responseType: 'json',
        })
          .then(dat => {
            this.article_list[index].loves = dat.data.loves;
          }).catch(err => {
          console.log(err.response);
        });
      },
    },
    mounted() {
      this.loadArticleList(1);
    },
  }

</script>

<style scoped>
  .articles {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    margin-bottom: 10px;
  }

  .article {
    background-color: #fff;
    padding: 20px 15px 15px 20px;
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
    color: #1abc9c;
    cursor: pointer;
    font-weight: normal;
  }

  .info {
    display: flex;
    margin-bottom: 10px;
  }

  .info .note {
    width: 100%;
    word-wrap: break-word;
    color: #777;
    line-height: 24px;
    margin-bottom: 0;
    font-style: normal;
  }

  .auth-info {
    width: 100%;
    height: auto;
    padding: 0 0;
    color: #777;
  }

  .auth-info span {
    margin-right: 5px;
  }

  .iconxiai1 {
    cursor: pointer;
  }
</style>
