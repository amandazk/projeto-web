import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Login from '@/views/Login'
import Logout from '@/views/Logout'
import ListBooks from '@/components/Books/List'
import EditBook from'@/components/Books/Edit'
import Experiments from '@/components/Experiments'
//import Cases from '@/components/Work/Cases'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/books',
      name: 'ListBooks',
      component: ListBooks
    },
    {
      path: '/books/edit/:id',
      name: 'EditBook',
      component: EditBook
    },
    {
      path: '/experiments',
      name: 'Experiments',
      component: Experiments
    },
    {
      path: '/cases',
      name: 'Cases',
      component: Cases
    },
    {
      path: '/cases/edit/:id',
      name: 'EditCases',
      component: EditCases
    },
  ]
})
