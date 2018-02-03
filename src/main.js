import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

/*
	This sets up vue-resource for use globally
------------------------------------------*/
Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-http-582b9.firebaseio.com/data.json";

/* -----------------------------------------
	Intercepts request and can manipulate it
	from there

	in this case, it transforms a POST request 
	into a PUT request which overwrites everything
	(yikes) and writes the two fields directly to 
	the root without an index
------------------------------------------*/
Vue.http.interceptors.push((request, next) => {
	console.log(request);
	if(request.method == 'POST') {
		request.method = 'PUT';
	}
	next();
});


new Vue({
	el: '#app',
	render: h => h(App)
})
