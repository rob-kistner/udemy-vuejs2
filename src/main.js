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

	the next() method allows the request to continue 
	which is necessary to keep the app going
------------------------------------------*/
Vue.http.interceptors.push((request, next) => {
	console.log(request);
	if(request.method == 'POST') {
		request.method = 'PUT';
	}
		// this allows the looping function in fetchData() to
		// work again by resetting response.json to the response
		// body
	next(response => {
		response.json = () => { return { messages: response.body } }
	});
});


new Vue({
	el: '#app',
	render: h => h(App)
})
