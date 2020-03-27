<template>
  <div class='time'>
    <h2 class='text-center'>博客时间轴</h2>
    <div class='time-line'>
      <div v-for='article in article_list' :label="article.title" :key="article.id" class='time-line-div'>
        <p>{{article.create_date|dateformat('YYYY-MM-DD HH:mm:ss')}}</p>
        <p ref='circular'></p>
        <p @click="jump('/detail/'+article.id)">{{article.title}}</p>
      </div>
      <div class='img-dotted' ref='dotted'></div>
    </div>
    <div style='margin-top:20px;'>
    </div>
  </div>
</template>

<script>
  import cons from '@/components/constant'

  export default {
    name: 'Timeline',
    data () {
      return {
        article_list: [],
      }
    },
    methods: {
      jump (route) {
        this.$router.push(route)
      },
      loadArticle () {
        this.axios.get(cons.apis + '/article/timeline/', {
          headers: {
            'Authorization': '123'
          },
          responseType: 'json',
        })
          .then(dat => {
            if (dat.data) {
              this.article_list = dat.data
            }
          }).catch(err => {
          console.log(err.response)
        })
      },
    },
    mounted () {
      this.loadArticle()
      this.$refs.dotted.style.left = '88px'
    },
  }
</script>

<style scoped>
  .time {
    width: 870px;
    background-color: white;
  }


  .time h2 {
    color: #FF6600;
    margin: 20px 10px 30px 10px;
  }

  .time-line {
    position: relative;
    margin: 0 10px;
  }

  .time-line-div {
    position: relative;
    min-height: 85px;
  }

  .time-line-div > p:nth-child(1) {
    position: absolute;
    left: 0;
    width: 100px;
  }

  .time-line-div > p:nth-child(2) {
    position: absolute;
    left: 100px;
    width: 16px;
    height: 16px;
    top: 10px;
    background: #5CB85C;
    border-radius: 50%;
    z-index: 10
  }

  .time-line-div > p:nth-child(3) {
    position: absolute;
    left: 130px;
    padding: 10px;
    background: #317EF3;
    font-size: .8rem;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }

  .img-dotted {
    position: absolute;
    width: 20px;
    height: 100%;
    top: 0;
    z-index: 1;
    background: url("../../assets/dotted.png");
  }

</style>
