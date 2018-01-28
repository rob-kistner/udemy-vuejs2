<template>
	<div class="new">
		<h3>New Quote</h3>
		<button class="btn" @click="counter++">Increase</button>
		<p>Counter: {{counter}}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			counter: 0
		}
	},
	/*
		destroyed()
		default behavior for switching out dynamic components
		is to destroy the previous component to swap in the 
		new one. <keep-alive> in the container template will 
		prevent this.
	------------------------------------------*/
	destroyed() {
		console.log("NEW destroyed...");
	},
	deactivated() {
		console.log("NEW deactivated...");
	},
	activated() {
		console.log("NEW activated...");
	}
	
}
</script>

<style>

</style>
