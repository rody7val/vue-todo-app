import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Home from '@/components/Home'
import List from '@/components/List'
import Person from '@/components/Person'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/p/:key',
      name: 'person',
      component: Person
    }
  ]
})
