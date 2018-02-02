<template>
	<div>
		<!--
		<course-header num="14" name="Animation: Transition Event Hooks for JS" sep="&gt;"></course-header>
		-->
		<content-area>

			<hr>

			<button class="btn btn-primary" @click="show=!show">Show / Hide Alert</button>

			<!-- 
				The key="" setting flags that each alert is different/unique 
				and Vue needs to treat them that way 

				mode="out-in" : transition mode. "out-in" means let the old 
				element animate out first, then animate the new element in.
			-->
			<transition :name="alertAnimation" mode="out-in">
				<div class="alert alert-info" v-if="show" key="info">Info Information goes here...</div>
				<div class="alert alert-warning" v-else key="warning">Warning Information goes here...</div>
			</transition>

			<hr>

			<button class="btn btn-primary" @click="load=!load">Load / Remove Element</button>

			<br class="my-3">

			<!--
				|
				| Binding hooks to method for all possible hooks
				| 
				| note the :css="false" binding, this implicitly tells
				| Vue not to interpret transitions with css
				|
			-->
			<transition 
			 @before-enter="beforeEnter"
			 @enter="enter"
			 @after-enter="afterEnter"
			 @enter-cancelled="enterCancelled"
			 @before-leave="beforeLeave"
			 @leave="leave"
			 @after-leave="afterLeave"
			 @leave-cancelled="leaveCancelled"
			 :css="false"
			>
				<div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
			</transition>

			<hr>

			<button class="btn btn-primary my-3" @click="selectedComponent=='success-alert' ? selectedComponent = 'danger-alert' : selectedComponent = 'success-alert'">Toggle Components</button>
			<transition name="fade" mode="out-in">
				<component :is="selectedComponent"></component>
			</transition>

			<hr>

			<button class="btn btn-primary" @click="addItem">Add Item</button>
			<ul class="list-group">
				<!--
					|
					| For transition groups, keys are ALWAYS required
					| 
					|
				-->
				<transition-group name="slide">
					<li
						class="list-group-item" 
						v-for="(number, idx) in numbers"
						@click="removeItem(idx)"
						style="cursor: pointer"
						:key="number"
						>
						{{number}}
					</li>
				</transition-group>
			</ul>

		</content-area>
	</div>
</template>

<script>
	import CourseHeader from './components/CourseHeader.vue';
	import ContentArea from './components/ContentArea.vue';
	import DangerAlert from './components/DangerAlert.vue';
	import SuccessAlert from './components/SuccessAlert.vue';

	export default {
		components: {
			CourseHeader,
			ContentArea,
			DangerAlert,
			SuccessAlert
		},
		data() {
			return {
				show: false,
				load: true,
				alertAnimation: 'fade',
				elementWidth: 100,
				selectedComponent: 'app-success',
				numbers: [1,2,3,4,5]
			}
		},
		methods: {
			beforeEnter(el) {
				console.log('beforeEnter');
				this.elementWidth = 100;
				el.style.width = this.elementWidth + 'px';
			},
			enter(el, done) {
				console.log('enter');
				let round = 1;
				const interval = setInterval( () => {
					el.style.width = (this.elementWidth + round * 10)+'px';
					round++;
					if(round>20) {
						clearInterval(interval);
						done();
					}
				}, 20);
				done(); // tells Vue when the animation is done, used only for javascript animations
			},
			afterEnter(el) {
				console.log('afterEnter');
			},
			enterCancelled(el) {
				console.log('enterCancelled');
			},
			beforeLeave(el) {
				console.log('beforeLeave');
				this.elementWidth = 300;
				el.style.width = this.elementWidth + 'px';
			},
			leave(el, done) {
				console.log('leave');
				let round = 1;
				const interval = setInterval( () => {
					el.style.width = (this.elementWidth - round * 10)+'px';
					round++;
					if(round>20) {
						clearInterval(interval);
						done();
					}
				}, 20);
			},
			afterLeave(el) {
				console.log('afterLeave');
			},
			leaveCancelled(el) {
				console.log('leaveCancelled');
			},
			addItem() {
				const pos = Math.floor(Math.random() * this.numbers.length);
					// the below implementation of splice uses splice 
					// to add an item to the array in a random place
					// rather than remove it
				this.numbers.splice(pos, 0, this.numbers.length+1);
			},
			removeItem(idx) {
				this.numbers.splice(idx, 1);
			}

		}
	}
</script>

<style>

	/*	Only 1 frame at beginning of animation,
		this sets up the intial appearance of the object(s)
	*/
	.fade-enter {
		opacity: 0;
	}
	
	/*	this is the transition animation to full,
		should ONLY be the transition selector
	*/
	.fade-enter-active {
		transition: opacity 1s;
	}

	/* initial state before transition out */
	.fade-leave {}
	
	/*	Here the final state is necessary, so
		include opacity: 0
	*/
	.fade-leave-active {
		transition: opacity 1s;
		opacity: 0;
	}


	.slide-enter {
		/* this is already set up in the keyframes below */
		/* transform: translateY(20px); */
		opacity: 0;
	}
	.slide-enter-active {
		/* forwards makes sure the element stays in position afterward */
		animation: slide-in 1s ease-out forwards;
		transition: opacity 0.5s;
	}
	.slide-leave {

	}
	.slide-leave-active {
		animation: slide-out 1s ease-out forwards;
		transition: opacity 3s;
		opacity: 0;
		position: absolute;
	}
	/*
		slide-move is attached to any element that needs to 
		change it's place, especially useful in transition-groups

		NOTE: must also add position:absolute to slide-leave-active to
		allow the other items to smoothly move on remove
	*/
	.slide-move {
		transition: transform 1s; /* used in the slide animation */
	}

	@keyframes slide-in {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes slide-out {
		from {
			transform: translateY(0);
			opacity: 1;
		}
		to {
			transform: translateY(20px);
			opacity: 0;
		}
	}

	/* ------------------------------------------------------- */

	body {
		font-size: 16px;
		font-family: 'Helvetica Neue', HelveticaNeue;
		font-weight: 300;
		color: #555;
	}

	hr {
		border-style: dashed;
		border-width: 1px;
		border-color: #ccc;
		margin: 1.5rem 0;
	}

	h1,h2,h3,h4,h5,h6 {
		font-weight: 400;
	}

	button {
		margin: 1.5rem 0;
	}

</style>
