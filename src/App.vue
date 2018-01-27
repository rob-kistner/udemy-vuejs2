<!--
	|
	| NOTE: SLOT RENDERING
	| The content not attributed to a slot named becomes 
	| the default content and will be rendered in order 
	| within that slots location. As shown below, this could
	| therefore render out of order.
	|
	| NOTE: DEFAULT CONTENT
	| Below, there's no slot placeholder for the subtitle
	| as defined in the child. The child's default content 
	| as written in it's template will appear instead.
	| Replace with something like "<h4 slot="subtitle>Content</h4>"
	| and it will appear instead of the default content.
	|
-->

<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<app-quote>
					<p>What about this paragraph???</p>
					<h2 slot="title">{{quoteTitle}}</h2>
					<h4 slot="subtitle">This is a subtitle</h4>
					<p>This is a wonderful quote!!!</p>
				</app-quote>
			</div>
		</div>
	</div>
</template>

<!--
	|
	| NOTE:
	| Data from the parent can, of course, populate the 
	| quote slot content
	|
-->

<script>
	import Quote from './components/Quote.vue';

	export default {
		data() {
			return {
				quoteTitle: 'Here\'s the quote title...',
			}
		},
		components: {
			appQuote: Quote
		}
	}

</script>

<style scoped>

</style>
