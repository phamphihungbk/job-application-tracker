import Vue, { DirectiveOptions } from 'vue'

import 'normalize.css'
import ElementUI from 'element-ui'

import '@base/assets/styles/index.scss'

import App from '@base/App.vue'
import router from '@base/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
