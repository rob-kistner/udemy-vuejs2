<template>
	<div>
		<course-header 
			section-num="12" 
			section-name="Registering Directives Locally" />
		<div class="container">
			<div class="row justify-content-header">
				<div class="col-sm-8 col-md-6">
					<h1>Built-in Directives</h1>
					<p v-text="'Some Text'"></p>
					<p v-html="'<strong>Some Text</strong>'"></p>
				</div>
			</div>
			<hr>
			<div class="row justify-content-header">
				<div class="col-sm-8 col-md-6">
					<h1>Custom Directives</h1>
					<p v-highlight:background.delayed="'red'">Color this</p>
					<p v-local-hilite:background.delayed.blink="blink">Color this as well</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import CourseHeader from './components/CourseHeader.vue';

	export default {
		data() {
			return {
				blink: {
					mainColor: 'red', 
					secondColor: 'gray', 
					delay: 350
				}
			}
		},
		components: {
			'course-header': CourseHeader
		},
		/*
			local directive registration
		------------------------------------------*/
		directives: {
			'local-hilite': {
				bind(el, binding, vnode) {
					// initializing & setting with a turnary
					let delay = 0;
					if(binding.modifiers['delayed'])
						delay = 3000;
					if(binding.modifiers['blink']) {
						// binding.value.mainColor,
						// binding.value.secondaryColor,
						// and delay
						// pulls object values from the passed object
						//
						let mainColor = binding.value.mainColor;
						let secondColor = binding.value.secondColor;
						let currentColor = mainColor;
						setTimeout(() => {
							setInterval( ()=> {
								if(currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor)
								if (binding.arg == "background")
									el.style.backgroundColor = currentColor;
								else
									el.style.color = currentColor;
							}, binding.value.delay);
						}, delay);
					} else {
						setTimeout(()=> {
						if (binding.arg == "background")
							el.style.backgroundColor = binding.value.mainColor;
						else
							el.style.color = binding.value.mainColor;
						}, delay);
					}
				}
			}
		}
	}
</script>

<style>

	hr { border-color: #f00; }

</style>
