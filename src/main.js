import Vue from 'vue'
import App from './App'
import router from './router'

import firebase from 'firebase'
import VueFirestore from 'vue-firestore'
require('firebase/firestore')

Vue.use(VueFirestore)
const db = firebase.initializeApp({
  apiKey: 'AIzaSyBHWTQ4TEph5O533Y_0HS2rlrepV6bSmm4',
  authDomain: 'todo-app-c43a7.firebaseapp.com',
  databaseURL: 'https://todo-app-c43a7.firebaseio.com',
  projectId: 'todo-app-c43a7',
  storageBucket: 'todo-app-c43a7.appspot.com',
  messagingSenderId: '878779951806',
  appId: '1:878779951806:web:66f2c8b8f5598a90'
}).firestore()
Vue.use(db)

Vue.config.productionTip = false

Vue.prototype.$firebase = firebase
Vue.prototype.$db = db

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
