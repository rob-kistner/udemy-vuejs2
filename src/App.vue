<template>
	<div class="container">
		<div class="row">
			<div class="container mt-5">
				<h1>Routing</h1>
				<hr>
				<!--
					| Multiple named router views allow you to 
					| move the layout around with components
					| per parent component if you wanted.
					| 
					| Here, the middle <router-view /> without the 
					| router view name provides the default component
					| area and the Header can be moved around to the
					| header-top or header-bottom, for example
				-->

				<router-view name="header-top" />
				<router-view />
				<router-view name="header-bottom" />
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
