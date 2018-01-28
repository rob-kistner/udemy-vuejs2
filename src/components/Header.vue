<template>
	<div class="mb-4">
		<div class="progress">
			<div 
				class="progress-bar" 
				role="progressbar"
				aria-valuenow="60"
				aria-valuemin="0"
				aria-valuemax="100"
				:style="{width: (quoteCount / maxQuotes) * 100 + '%'}">
				{{quoteCount}} / {{maxQuotes}}
			</div>
		</div>
		<p class="quotes-added">Quotes added</p>
	</div>
</template>

<script>
export default {
	props: [
		'quoteCount', 
		'maxQuotes'
	],
	methods: {
	}
}
</script>

<style scoped>
.quotes-added {
	font-style: italic;
	text-align: center;
	margin-top: 0.5rem;
	font-size: 0.8rem;
}
</style>
