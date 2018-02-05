<template>
	<div>
		<h1>The User Page</h1>
		<hr>
		<p>Loaded ID: {{id}}</p>
		<button class="btn btn-primary" @click="navigateToHome">Home</button>

		<hr>

		<p><strong>NOTE FROM 16-231:</strong> a watch was setup for this component since two users were added as links at this stage. Normally, if the component itself isn't changing, vue-router won't signal that a parameter is actually changing and the data won't update on the page. So placing a watch on the $route solves this issue:</p>
		<code>
			<pre class="bg-light p-3 h6">
		watch: {
			'$route'(to,from) {
				this.id = to.params.id;
			}
		}
			</pre>
		</code>
		<p>Kind of a wierd format but that'll force the data change as requested.</p>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: this.$route.params.id
			}
		},
		// watch: {
		// 	'$route'(to, from) {
		// 		this.id = to.params.id;
		// 	}
		// },
		methods: {
			navigateToHome() {
				this.$router.push('/');
			}
		}
	}
</script>
