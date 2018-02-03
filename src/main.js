import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

/*
	This sets up vue-resource for use globally
------------------------------------------*/
Vue.use(VueResource);

new Vue({
	el: '#app',
	render: h => h(App)
})
