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
				courseName: 'VueJS 2 - The Complete Guide',
				sectionNum: 11,
				sectionName: 'Handling User Input with Forms'
			}
		}
	};
</script>

<style scoped>
	.container-fluid {
		background-color: #bbb;
		margin-bottom: 2rem;
	}
	.container {
		padding: 1rem;
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
	}
</style>
