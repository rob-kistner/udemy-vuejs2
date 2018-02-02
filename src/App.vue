<template>
	<div>
		<course-header
			num="13"
			name="Filters &amp; Mixins - About Mixins"
			sep="|" />
		<content-area>

			<h4 class="text-primary">Mixins</h4>

			<hr>
			<h5>direct in app&hellip;</h5>

			<button class="btn btn-primary d-block my-3" @click="fruits.push('berries')">Add Berries</button>
			<input type="text" v-model="filterText">
			<ul class="list-unstyled">
				<li v-for="fruit in filteredFruit">{{fruit}}</li>
			</ul>


			<hr>
			<h5>from imported component&hellip;</h5>

			<list />

		</content-area>
	</div>
</template>

<script>
	import CourseHeader from './partials/CourseHeader.vue';
	import ContentArea from './partials/ContentArea.vue';
	import List from './components/List.vue';
	import { fruitMixin } from './fruitMixin';

	export default {
		components: { CourseHeader, ContentArea, List },
		data() {
			return {
					// replaces the value for the fruits array
					// in the mixin, merging custom info with the
					// default info...COOL!
				fruits: ['kumkwat', 'onion', 'green pepper']
			}
		},
		mixins: [ fruitMixin ],
	}
</script>

<style>
	hr {
		border-color: #666;
		margin: 2.5rem 0;
	}
</style>
