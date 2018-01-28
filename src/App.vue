<template>
	
	<div class="container">
		<div class="row">
			<div class="col-12 pt-5">

				<button class="btn" @click="selectedComponent = 'appQuote'">Quote</button>
				<button class="btn" @click="selectedComponent = 'appAuthor'">Author</button>
				<button class="btn" @click="selectedComponent = 'appNew'">New Quote</button>

				<p class="mt-3">selectedComponent = <strong>{{selectedComponent}}</strong></p>

				<!--
					|
					| NOTE:
					| <keep-alive> prevents the component from
					| being destroyed when dynamic component is
					| switched
					|
				-->
				<keep-alive>
					<component :is="selectedComponent">	
						<p>Default content</p>
					</component>
				</keep-alive>

			</div>
		</div>
	</div>
</template>

<script>
	import Quote from './components/Quote.vue';
	import Author from './components/Author.vue';
	import New from './components/New.vue';

	export default {
		data() {
			return {
				selectedComponent: 'appQuote'
			}
		},
		components: {
			appQuote: Quote,
			appAuthor: Author,
			appNew: New
		}
	}

</script>

<style scoped>

</style>
