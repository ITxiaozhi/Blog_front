<template>
  <div class="nav-header">
    <ul class="nav-bar">
      <li class="menu" @click="jump('/')">首页</li>
      <li class="menu">
        技术杂谈
        <ul class="sub-menu">
          <li class="menu-item" v-for="category in technology_categories" :label="category.name" :key="category.id"
              @click="jump('/list/category/'+ category.name)"><a>{{category.name}}</a></li>
        </ul>
      </li>
      <li class="menu">开发工具
        <ul class="sub-menu">
          <li class="menu-item" v-for="category in development_categories" :label="category.name" :key="category.id"
              @click="jump('/list/category/'+ category.name)"><a>{{category.name}}</a></li>
        </ul>
      </li>
      <li class="menu" @click="jump('/about')">关于自己</li>
      <li class="menu" @click="jump('/message')">给我留言</li>
      <li class="menu" @click="jump('/sponsor')">赞助作者</li>
      <li class="menu" @click="jump('/timeline')">时间轴</li>
    </ul>
    <div>
      <input class="search-input" v-model="input" placeholder="请输入关键字">
    </div>
    <div class="toggle-search active">
      <i class="iconfont iconsousuo" @click="jump('/list/search/'+ input)"></i>
    </div>
  </div>
</template>

<script>
  import cons from '@/components/constant';

  export default {
    name: "NavBarHeader",
    data() {
      return {
        technology_categories: [],
        development_categories: [],
        input: '',
      }
    },
    methods: {
      jump(route) {
        this.$router.push(route);
      },
      getTechnologyCategories() {
        this.axios.get(cons.apis + '/article/categories/1', {
          headers: {
            'Authorization': '123'
          },
          responseType: 'json',
        })
          .then(dat => {
            this.technology_categories = dat.data;
          }).catch(err => {
          console.log(err.response);
        });
      },
      getDevelopmentCategories() {
        this.axios.get(cons.apis + '/article/categories/2', {
          headers: {
            'Authorization': '123'
          },
          responseType: 'json',
        })
          .then(dat => {
            this.development_categories = dat.data;
          }).catch(err => {
          console.log(err.response);
        });
      },
    },
    mounted() {
      this.getTechnologyCategories();
      this.getDevelopmentCategories();
    }
  };

</script>

<style scoped>
  .nav-header {
    display: flex;
    flex-direction: row;
    height: 52px;
    width: 100%;
    flex: 1;
    background-color: #4a4a4a;
    opacity: .9;
    font-size: 16px;
    line-height: 0;
    position: relative;
  }

  .nav-bar {
    display: flex;
    flex-direction: row;
    list-style: none;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin: 0 auto;
    height: 52px;
    position: relative;
  }

  .menu {
    display: flex;
    /*flex-direction: row;*/
    padding: 16px 30px;
    margin-right: 1px;
    /*min-width: 64px;*/
    width: auto;
    line-height: 20px;
    text-align: -webkit-match-parent;
    color: white;
    flex-direction: column;
    position: relative;
  }

  .sub-menu {
    display: flex;
    line-height: 20px;
    left: 0;
    position: absolute;
    top: 100%;
    z-index: 99999;
    width: 100%;
    text-align: -webkit-match-parent;
    /*background-color: blue;*/
  }

  .menu .sub-menu {
    display: none;
  }

  .menu:hover .sub-menu {
    display: block;
  }

  .menu-item {
    background-color: #D56464;
    padding: 10px 0;
  }

  li {
    list-style: none;
    cursor: pointer;
  }

  .search-input {
    display: flex;
    align-self: flex-end;
    height: 28px;
    margin: 10px 0;
    line-height: 26px;
    color: white;
    background-color: transparent;
  }

  .toggle-search {
    display: flex;
    align-self: flex-end;
    width: 52px;
    height: 52px;
    background: none repeat scroll 0 0 #D56464;
    color: #fff;
    cursor: pointer;
    -webkit-transition: all .25s ease-out;
    -moz-transition: all .25s ease-out;
    -o-transition: all .25s ease-out;
    transition: all .25s ease-out;
  }

  .toggle-search.active, .toggle-search:hover {
    opacity: .75;
  }

  .iconsousuo {
    font-size: 30px;
    text-align: center;
    margin-top: 26px;
    margin-left: 12px;
    margin-right: 12px;

  }

</style>
