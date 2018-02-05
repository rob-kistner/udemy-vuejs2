import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

import { routes } from './routes.js';

Vue.use( VueRouter );

const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if(savedPosition) {
			return savedPosition;
		}
		if(to.hash) {
			return { selector: to.hash };
		}
		return { x: 0, y: 300 };
	}
});


/*----------------------------------------
	guards for routing
------------------------------------------*/
router.beforeEach( (to, from, next) => {
	console.log('global beforeEach');
	next(); // necessary to continue
});


new Vue({
	el: '#app',
	router: router,
 	render: h => h(App)
})
