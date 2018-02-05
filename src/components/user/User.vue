<template>
	<div>
		<h1>The User Page</h1>
		<hr>
		<p>User ID: {{ id }}</p>
		<button class="btn btn-primary" @click="navigateToHome">Home</button>
	</div>
</template>

<script>
	export default {
		data() {
			return { }
		},
		props: {
			id: { default: '0' }
		},
		methods: {
			navigateToHome() {
				this.$router.push('/');
			}
		}
	}
</script>
