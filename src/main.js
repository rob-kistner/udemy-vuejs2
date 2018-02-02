import Vue from 'vue'
import App from './App.vue'

	// global mixin
Vue.mixin({
	created() {
		console.log("-- Global mixin created() hook");
	}
});


new Vue({
  el: '#app',
  render: h => h(App)
});
