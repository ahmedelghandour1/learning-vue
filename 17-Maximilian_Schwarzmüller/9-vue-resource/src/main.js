import Vue from 'vue'
import App from './App.vue'
import http from 'vue-resource';
Vue.config.productionTip = false

Vue.use(http);

new Vue({
  render: h => h(App),
}).$mount('#app')
