import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

/*
	This sets up vue-resource for use globally
------------------------------------------*/
Vue.use(VueResource);

/*
	NOTE: $http, the $ is not needed at this level
	this is the one url we'll use as a base for all database operations	
------------------------------------------*/
Vue.http.options.root = "https://vuejs-http-582b9.firebaseio.com/data.json";

new Vue({
	el: '#app',
	render: h => h(App)
})
