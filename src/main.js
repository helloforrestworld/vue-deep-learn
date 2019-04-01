import '@babel/polyfill'
import 'current-script-polyfill'
import Vue from 'vue'
import App from './App.vue'
import Common from 'script/common'

Vue.config.productionTip = false
Vue.prototype.$Common = Common

new Vue({
  render: h => h(App),
}).$mount('#app')
