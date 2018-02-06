import Vue from 'vue'
import App from './App.vue'

// exported store object from the store.js file
//
import { store } from './store/store';

new Vue({
  el: '#app',
  // this can also be written as just "store,"
  // Vue will imply
  store: store,
  render: h => h(App)
})
