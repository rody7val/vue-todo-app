import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueFirestore from 'vue-firestore'
import moment from 'moment'
import 'moment/locale/es'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('firebase/firestore')
moment.locale('es')

Vue.config.productionTip = false
Vue.use(VueFirestore)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

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

Vue.prototype.$firebase = firebase
Vue.prototype.$db = db
Vue.prototype.$moment = moment

window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    Vue.prototype.$user = user
    new Vue({
      router,
      components: { App },
      template: '<App/>'
    }).$mount('#app')
  })
}
