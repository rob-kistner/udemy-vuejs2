import Vue from 'vue'
import App from './App.vue'

import Home from './Home.vue'

import './assets/scss/styles.scss'


Vue.component('app-servers', Home);

new Vue({
	el: '#app',
	render: h => h(App)
})
