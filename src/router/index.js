import Vue from 'vue'
import Router from 'vue-router'
const Index = ()=>import("@/components/index/Index")
const DetailPage = ()=>import("@/components/detail/DetailPage")
// import test from '../components/Test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail/:id',
      name: 'DetailPage',
      component: DetailPage
    },
  ]
})
