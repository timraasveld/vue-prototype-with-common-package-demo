import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$someGlobal = 'some global';

new Vue({
  render: h => h(App),
}).$mount('#app')
