<template>
	<div class="container">
		<div class="row">
			<div class="container mt-5">
				<h1>Routing</h1>
				<hr>
				<app-header />
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
	import Header from './components/Header.vue';
	
	export default {
		components: {
			appHeader: Header
		}
	}
</script>

<style>
</style>
