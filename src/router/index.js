import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import("@/components/index/Index")
const DetailPage = () => import("@/components/detail/DetailPage")
const CategoryPage = () => import("@/components/category/CategoryPage")
// import test from '../components/Test.vue'

// 重写路由跳转方法
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
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
    {
      path: '/category/:name',
      name: 'CategoryPage',
      component: CategoryPage
    },
  ]
})
