// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import Firebase from 'firebase'

Vue.use(Vuefire)
Vue.config.productionTip = false

let config = {
  apiKey: 'AIzaSyBZOcaqTftnvtwrMxjZLlkTH9FVJ4I8Dqo',
  authDomain: 'kanban-msrabbani.firebaseapp.com',
  databaseURL: 'https://kanban-msrabbani.firebaseio.com'
}
Firebase.initializeApp(config)
Vue.prototype.$db = Firebase.database()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
