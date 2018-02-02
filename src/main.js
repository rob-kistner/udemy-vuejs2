import Vue from 'vue'
import App from './App.vue'

Vue.filter('show-length', value => `${value} (${value.length})`);

new Vue({
  el: '#app',
  render: h => h(App)
})
