import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import About from '@/components/About'
import Home from '@/components/Home'
import List from '@/components/List'
import Person from '@/components/Person'

Vue.use(Router)

const router = new Router({
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
      component: List,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/p/:key',
      name: 'person',
      component: Person
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      alert('Tené quetá logueao loc...')
      console.log('Tené quetá logueao loc...')
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
