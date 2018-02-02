<template>
	<div>
		<header class="container-fluid">
			<div class="container">
				<p class="title">Udemy: {{courseName}}</p>
				<p class="section">Section {{sectionNum}}: {{sectionName}}</p>
			</div>
		</header>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				courseName: "Understanding VueJS 2"
			}
		},
		props: [
			'sectionNum',
			'sectionName'
		]
	};
</script>

<style scoped>
	.container-fluid {
		background-color: #bbb;
		margin-bottom: 2rem;
	}
	.container {
		padding: 1rem 1rem 1.5rem;
		color: #fff;
	}
	.container p {
		text-align: center;
		margin-bottom: 0;
		font-weight: 300;
	}
	.title {
		font-size: 1.25rem;
		}
	.section {
		font-size: 1.75rem;
		line-height: 1;
		margin-top: 0.5rem;
	}
</style>
