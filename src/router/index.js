import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: "/",
    alias: "/users",
    name: "users",
    component: () => import('../components/UsersList.vue')
  },
  {
    path: "/users/:id",
    name: "user-details",
    component: () => import('../components/User.vue')
  },
  {
    path: "/add",
    name: "add",
    component: () => import('../components/AddUser.vue')
  },
  {
    path: "/usertable",
    name: "users-table",
    component: () => import('../components/UsersTableList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
