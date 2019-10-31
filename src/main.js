import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuelidate)
export const EventBus = new Vue()

//Vue.http.options.root = ''

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
