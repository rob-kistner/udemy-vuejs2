<template>
	<div class="col-sm-6 col-md-4 col-lg-3">
		<div class="card">
			<div class="card-text quote">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>

	export default {

	}

</script>

<style>
	.card-text {
		font-family: 'Arizonia', cursive;
		font-size: 24px;
		line-height: 1;
		color: #6e6e6e;
	}
	.quote {
		cursor: pointer;
		padding: 0.8rem 1.5rem;
	}
	.quote:hover {
		background-color: #ffe2e2;
	}
</style>
