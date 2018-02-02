<template>
	<div>
		<course-header num="14" name="Animation: Transitions" sep="&gt;"></course-header>
		<content-area>
			<h2>Animations</h2>

			<hr>

			<button class="btn btn-primary" @click="show=!show">Show / Hide Alert</button>

			<transition name="fade">
				<!--
					NOTE: v-show will work just as well as v-if
					-->
				<div class="alert alert-info" v-if="show">
					Fade animation element
				</div>
			</transition>

			<!--
				force animation over transition in css, 
				can solve mixing jump issues though it 
				didn't work for me here. hmmmm.
				-->
			<transition name="slide" type="animation">
				<div class="alert alert-info" v-if="show">
					Slide animation element
				</div>
			</transition>

			<!--
				appear animates the element when it gets
				loaded onto the page first time
				-->
			<transition name="fade" appear>
				<div class="alert alert-info" v-if="show">
					Fade Appear animation, transition on this 
					element when the page first loads
				</div>
			</transition>

			<!-- animate.css custom animation/transitions
				remember to include cdn link in the html file
				or try importing it into App.vue (?)

				Include attr for every class you want to set, 
				but don't include anything that's blank, i.e.: 
				really don't need enter-class initial setting below,
				so don't put it in there
			-->
			<transition 
				appear
				enter-active-class="animated bounce"
				leave-class=""
				leave-active-class="animated shake"
				>
				<div class="alert alert-info" v-if="show">
					Animate.CSS Custom Animation. See props on the 
					<strong>transition</strong> wrapper that apply 
					the custom classes.
				</div>
			</transition>


			<hr>


			<select v-model="alertAnimation" class="form-control mb-3">
				<option value="fade">Fade</option>
				<option value="slide">Slide</option>
			</select>

			<!--
				dynamic class assignment from select above 
			-->
			<transition :name="alertAnimation">
				<div class="alert alert-info" v-if="show">
					Dynamically setting the class from the select field above.
				</div>
			</transition>


			<div class="alert alert-warning mt-5">
				<h4>TO DO...</h4>
				<p>Look up &lt;transition type=""&gt; to figure out how to 
					use it, it didn't really work in context of the class as 
					he described it.</p>
			</div>

		</content-area>
	</div>
</template>

<script>
	import CourseHeader from './components/CourseHeader.vue';
	import ContentArea from './components/ContentArea.vue';

	export default {
		components: {
			CourseHeader, ContentArea
		},
		data() {
			return {
				show: true,
				alertAnimation: 'fade'
			}
		}
	}
</script>

<style>
	/*	Only 1 frame at beginning of animation,
		this sets up the intial appearance of the object(s)
	*/
	.fade-enter {
		position: relative;
		opacity: 0;
	}
	
	/*	this is the transition animation to full,
		should ONLY be the transition selector
	*/
	.fade-enter-active {
		transition: all 1.0s;
	}

	/* initial state before transition out */
	.fade-leave {
		/*	Doesn't really need to be set, opacity 1
			is the default
		*/
		/* opacity: 1; */
		position: relative;
	}
	
	/*	Here the final state is necessary, so
		include opacity: 0
	*/
	.fade-leave-active {
		transition: opacity 1.0s;
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
