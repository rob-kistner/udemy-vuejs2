<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-sm-8 col-md-6">

				<h2 class="mt-3">Filters &amp; Mixins</h2>
				<p>Text working on is: <strong>{{sample}}</strong></p>

				<hr>

				<!-- Exercise 1) -->
				<!-- Build a local Filter which reverses the Text it is applied on -->
				<h4>Exercise 1:</h4>
				{{ sample | reverse }}

				<hr>

				<!-- Exercise 2 -->
				<!-- Build a global Filter which counts the length of a word and it appends it -->
				<!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
				<h4>Exercise 2:</h4>
				{{ sample | show-length }}

				<hr>

				<!-- Exercise 3 -->
				<!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
				<h4>Exercise 3:</h4>
				<p>Reversed: {{ compReverse }}</p>
				<p>Show Length: {{ compShowLength }}</p>

				<hr>

				<!-- Exercise 4 -->
				<!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
				<h4>Exercise 4:</h4>
				<p>Original Mixin sample text: {{ mixSample }}</p>
				<p>Mixin Reversed: {{ mixReverse }}</p>
				<p>Mixin Show Length: {{ mixShowLength }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { sampleMixin } from './sampleMixin';

	export default {
		data() {
			return {
				sample: "The Example Text",
				mixSample: "Changed Mixin Text"
			}
		},
		filters: {
			reverse: value => value.split("").reverse().join("")
		},
		computed: {
			compReverse() {
				return this.sample.split("").reverse().join("");
			},
			compShowLength() {
				return `${this.sample} (${this.sample.length})`;
			}
		},
		mixins: [ sampleMixin ]
	}
</script>

<style scoped>

hr {
	border-color: #aaa;
	border-width: 1px;
	margin: 1.5rem 0;
}

</style>
