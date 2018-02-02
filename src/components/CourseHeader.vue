<template>
	<div>
		<header class="container-fluid">
			<div class="container">
				<p class="title">Udemy: {{course | uc}}</p>
				<p class="section">Section {{num}} {{sep}} {{name}}</p>
			</div>
		</header>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				course: "Understanding VueJS 2"
			}
		},
		props: {
			num: {},
			name: {},
			sep: {
				type: String,
				default: ":"
			}
		},
		filters: {
			uc(value) {
				return value.toUpperCase();
			}
		}
	};
</script>

<style scoped>
	.container-fluid {
		background-color: #b1b3b5;
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