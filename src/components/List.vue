<template>
	<div>
		<input type="text" v-model="filterText">
		<ul class="list-unstyled">
			<li v-for="fruit in filteredFruit">{{ fruit }}</li>
		</ul>
	</div>
</template>

<script>
	import { fruitMixin } from '../fruitMixin';

	export default {
		mixins: [ fruitMixin ],
		created() {
			console.log("-- inside List created() hook");
		}
	}
</script>

<style>
</style>
