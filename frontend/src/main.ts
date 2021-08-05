import Vue from 'vue'

import 'normalize.css'

// import '@/assets/styles/index.scss'

import App from '@/App.vue'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
