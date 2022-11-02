import Vue from 'vue'
import App from '@/App.vue'


// 引入 store
import store from '@/store/index.js'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
