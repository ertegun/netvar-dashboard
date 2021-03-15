import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminAppList from '../views/AdminAppList.vue'
import editCard from '../views/editCard.vue'
import newCard from '../views/newCard.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AdminAppList',
    name: 'AdminAppList',
    component: AdminAppList
  },
  {
    path: '/editCard',
    name: 'edit-params',
    component: editCard
  },
  {
    path: '/newCard',
    name: 'newCard',
    component: newCard
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
