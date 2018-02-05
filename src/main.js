import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

import { routes } from './routes.js';

Vue.use( VueRouter );

const router = new VueRouter({
	routes,
	mode: 'history',
	//
	// scrollBehavior is SUPPOSED to scroll down
	// to a given hash or page position. I couldn't get it 
	// to work on Chrome
	//
	scrollBehavior(to, from, savedPosition) {
		// in case user just used the back button
		if(savedPosition) {
			return savedPosition;
		}
		if(to.hash) {
			return { selector: to.hash };
		}
		return { x: 0, y: 300 };
	}
});


new Vue({
	el: '#app',
	router: router,
 	render: h => h(App)
})
