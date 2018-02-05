<template>
	<div>
		<h1>The User Page</h1>
		<hr>
		<button class="btn btn-primary" @click="navigateToHome">Home</button>
		<hr>
		<!--
			| This is where the sub-routes will be loaded,
			| important to remember they are essentially child 
			| components once defined that way in the routes.js
			| definition file so App.vue doesn't really know 
			| about them
		-->
		<transition name="slideedit" mode="out-in">
			<router-view />
		</transition>
	</div>
</template>

<script>
	export default {
		methods: {
			navigateToHome() {
				this.$router.push( { name: 'home' } );
			}
		}
	}
</script>

<style>
	:root {
		--routeX-dur: 0.25s;
		--routeX-dist: translateX(-15px);
		--routeX-dist-leave: translateX(15px);
	}
	.slideedit-enter-active {
		animation: slideedit-in var(--routeX-dur) ease-out forwards;
	}
	.slideedit-leave {
		opacity: 1;
		transform: translateX(0);
	}
	.slideedit-leave-active {
		transition: opacity var(--routeX-dur) ease;
		opacity: 0;
		animation: slideedit-out var(--routeX-dur) ease-out forwards;
	}
	@keyframes slideedit-out {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: var(--routeX-dist-leave);
		}
	}
	@keyframes slideedit-in {
		0% {
			transform: var(--routeX-dist);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
