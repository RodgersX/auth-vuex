import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Axios from 'axios'

Vue.prototype.$http = Axios
const token = localStorage.getItem('token')
if(token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
