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
				users: []
			}
		},
		mounted() {
			this.fetchData();
		},
		/* -----------------------------------------
		| Note how we just send empty strings below 
		| instead of the url to the firebase data.
		| This is due to the global setting in main.js
		| of Vue.http.options.root
		------------------------------------------*/
		methods: {
			submit() {
				this.$http.post('', this.user)
					.then(response => {
						console.log(response);
					}, error => {
						console.log(error);
					});
			},
			fetchData() {
				this.$http.get('')
					.then(response => {
						return response.json();
					})
					.then(data => {
						// parse into component array
						const resultArray = [];
						for(let key in data) {
							resultArray.push(data[key]);
						}
						this.users = resultArray;
					});
			}
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
