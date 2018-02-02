<template>
	<div>
		<course-header 
			section-num="12" 
			section-name="Assignment: Registering Directives Locally" />
		<div class="container">
			<div class="row justify-content-header">
				<div class="col-sm-8 col-md-6">
					<h1>Custom Directive</h1>
					<button v-customOn:click="clicked" class="btn btn-primary">CustomON Click</button>
					<div
						class="myblock" 
						v-customOn:mouseenter="mouseEntered"
						v-customOn:mouseleave="mouseLeft">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import CourseHeader from './components/CourseHeader.vue';

	export default {
		components: {
			'course-header': CourseHeader
		},
		directives: {
			customOn: {
				// not using vnode so not spec'ing it
				// as the 3rd argument
				bind(el, binding) {

						// binding.value() calls the clicked()
						// method since its named ("clicked") is
						// the one that's passed to binding
					// el.onclick = () => {
					// 	binding.value();
					// }

						// registering any event to make it more
						// generalized
					const type = binding.arg;
					const fn = binding.value;
					el.addEventListener(type, fn);
				}
			}
		},
		methods: {
			clicked() {
				alert('I was clicked');
			},
			mouseEntered() {
				console.log("I was entered");
			},
			mouseLeft() {
				console.log("I was abandoned");
			}
		}
	}
</script>

<style>
	.myblock {
		width: 100px;
		height: 100px;
		margin-top: 1.5rem;
		background-color: lightgreen;
	}
</style>
