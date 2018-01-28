<template>
	<div class="row justify-content-center mb-4">
		<div class="col-sm-10 col-md-8 form-group">
			<form>
				<label for="newquote text-secondary">Add a quote there, Svengoolie&hellip;</label>
				<textarea id="newquote" class="form-control" rows="3" v-model="quote"></textarea>
			</form>
			<button 
				class="btn btn-primary mt-4 d-block mx-auto" 
				@click.prevent="createNew">
				Add Quote
			</button>
		</div>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				quote: ''
			}
		},
		methods: {
			createNew() {
				this.$emit('quoteAdded', this.quote);
				this.quote = '';
			}
		}
	}

</script>

<style scoped>
label {
	font-style: italic;
}
</style>
