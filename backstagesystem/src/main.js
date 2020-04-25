import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入bootstrap
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "./assets/css/base.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
