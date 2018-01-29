import Vue from 'vue'
import App from './App.vue'


/*
	HOOKS
	=====
	Different ways you can create Hooks:

	bind(el, binding, vnode) -> once directive is attached
	inserted(el, binding, vnode) -> once directive is inserted into parent node
	update(el, binding, vnode, oldVnode) -> once component is updated (without children)
	compnentUpdated(el, binding, vnode, oldVnode) -> once component is updated (with children)
	unbind(el, binding, vnode) -> once component is removed

	all applied like lifecycle methods

	Creating them in the main js file on Vue 
	registers the directive globally, local 
	directives (next branch) attached to one 
	component, for example, are done diffently...

------------------------------------------*/
Vue.directive('highlight', {
	bind(el, binding, vnode) {

	// below: hardcoded value, you'd just add the attribute
	// like <p v-highlight> in the template
		// el.style.backgroundColor = 'green';

	// below: argument value, expects argument from template
	// like <p v-highlight="'red'"> in the template
		// el.style.backgroundColor = binding.value;

	// below: argument parameter, if an argument is passed, react differently
	// like <p v-highlight:background="'red'">
		// if (binding.arg == "background")
		// el.style.backgroundColor = binding.value;
		// else
		// el.style.color = binding.value;

	// below: adding an addition parameter, then checking
	// if it exists and delaying application of the style
	// before applying it
		var delay = 0;
		if(binding.modifiers['delayed']) {
			delay = 3000;
		}
		setTimeout(() => {
			if (binding.arg == "background")
				el.style.backgroundColor = binding.value;
			else
				el.style.color = binding.value;
		}, delay);
	}
});

new Vue({
  el: '#app',
  render: h => h(App)
})
