<template>
	<div>
		<course-header
			num="13"
			name="Filters &amp; Mixins - Creating a Local Filter"
			sep="|" />
		<content-area>
			<h4 class="text-primary">Filters</h4>

			<p>local: <strong>{{text | to-uppercase}}</strong></p>
			<p>global: <strong>{{text | to-lowercase}}</strong></p>
			<p>double-chained: <strong>{{text | to-uppercase | space-letters}}</strong></p>

			<hr>

			<h4 class="text-primary">Alternative to filters: using computed() instead</h4>
			<p>Allows for a more complex filtering</p>

			<input type="text" v-model="filterText">
			<ul class="list-unstyled">
				<li v-for="fruit in filteredFruit">{{fruit}}</li>
			</ul>
		</content-area>
	</div>
</template>

<script>
	import CourseHeader from './partials/CourseHeader.vue';
	import ContentArea from './partials/ContentArea.vue';

	export default {
		components: { CourseHeader, ContentArea },
		data() {
			return {
				text: 'Hello There!',
				fruits: [ 'apple', 'banana', 'kiwi', 'strawberry', 'blackberry' ],
				filterText: ''
			}
		},
		filters: {
				// camelCase filter names can be represented 
				// with dashes in the template as usual
			toUppercase: value => value.toUpperCase(),
				// mega one-liner:
				// split string into array
				// deny any spaces in the array
				// join together with spaces and return it
			spaceLetters: (value) => value.split("").filter(s=>s!=(' ')).join(" ")
		},
		computed: {
				// javascript .filter's out values that
				// don't match the filterText data fed 
				// by the input field
			filteredFruit() {
				return this.fruits.filter( (item) => {
					return item.match(this.filterText);
				});
			}
		}
	}
</script>

<style>
</style>
