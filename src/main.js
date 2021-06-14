import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: 'AIzaSyAoalNEhEoL22YLIU0_YXY6dc0MDt9KToY',
  authDomain: 'vue-you-56272.firebaseapp.com',
  projectId: 'vue-you-56272',
  storageBucket: 'vue-you-56272.appspot.com',
  messagingSenderId: '241419647088',
  appId: '1:241419647088:web:7cc6ed07d9f270b9ba1cb5'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
