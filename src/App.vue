<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-sm-10 col-md-8">
				<h2 class="my-5">Http with vue-resource</h2>
				<div class="form-group">
					<label for="">Username</label>
					<input type="text" class="form-control" v-model="user.username">
				</div>
				<div class="form-group">
					<label for="">Mail Address</label>
					<input type="text" class="form-control" v-model="user.email">
				</div>
				<button class="btn btn-primary" @click="submit">Submit</button>
				<hr>
				<button class="btn btn-primary" @click="fetchData">Get Data</button>
				<ul class="list-group">
					<li 
						class="list-group-item" 
						v-for="u in users">
						<h5>{{u.username}}</h5>
						<p class="mb-0">{{u.email}}</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					username: '',
					email: ''
				},
				users: [],
				resource: {}
			}
		},
		methods: {
			/* -----------------------------------------
				setting the url base in main.js under
				Vue.http.options.root and passing the 
				data.json database with help of the 
				created hook below

				see the documentation for vue-resource on 
				this and to see the default actions at:

				https://github.com/pagekit/vue-resource/blob/develop/docs/resource.md

			------------------------------------------*/
			submit() {

					// replacing this longer method
					// with a vue-resource built-in
					// resource setup version

				// this.$http.post('data.json', this.user)
				// 	.then(response => {
				// 		console.log(response);
				// 	}, error => {
				// 		console.log(error);
				// 	});

					// shorter syntax version using the
					// resource setup
				this.resource.save({}, this.user);
			},
			fetchData() {
				this.$http.get('data.json')
					.then(response => {
						return response.json();
					})
					.then(data => {
						const resultArray = [];
						for(let key in data) {
							resultArray.push(data[key]);
						}
						this.users = resultArray;
					});
			}
		},
		created() {
			// database suffix to root url, to be used in
			// the above methods as this.resource
			this.resource = this.$resource('data.json')
		}
	}
</script>

<style>

	.btn {
		display: block;
		margin: 2rem 0;
	}
	hr {
		margin: 1.5rem 0;
		border: 1px dashed #ccc;
	}

</style>
