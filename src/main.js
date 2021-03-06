import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import fb from 'firebase/app'
import 'firebase/app'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyAy8kjQDJPycilIvOL5cW2UWSS9JdL055A',
      authDomain: 'vue-project-e566a.firebaseapp.com',
      databaseURL: 'https://vue-project-e566a.firebaseio.com',
      projectId: 'vue-project-e566a',
      storageBucket: 'vue-project-e566a.appspot.com',
      messagingSenderId: '493828172485'
    })
    
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
