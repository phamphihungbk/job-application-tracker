import Vue from 'vue'

import 'normalize.css'
import ElementUI from 'element-ui'
// import '@/assets/styles/index.scss'
import App from '@/App.vue'
import router from '@/router'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
