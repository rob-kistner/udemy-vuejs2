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
		<router-view />
	</div>
</template>

<script>
	export default {
		methods: {
			navigateToHome() {
				this.$router.push('/');
			}
		}
	}
</script>
