import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

// the actual routes are in this external file
import { routes } from './routes.js';

// use the vue-router package
Vue.use( VueRouter );

// instantiate the router
const router = new VueRouter({
	routes,
	mode: 'history' // this is the no-hash-tag style, i.e.: localhost:8080/#/user
});


new Vue({
	el: '#app',
	router: router, // pass router into Vue instance
 	render: h => h(App)
})
