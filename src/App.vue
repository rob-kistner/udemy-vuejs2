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
		methods: {
			submit() {
			/* ----------------------------------------
			| NOTE:
			| $http becomes available when we
			| Vue.use the vue-resource package
			| ----------------------------------------
			| the post params are...
			|
			| 1: @string
			|	url to the firebase database including the top 
			|	node, note the .json is necessary at the end
			|	of that top node name
			|
			| 2: @object
			|	post data to send to the database, in this case,
			|	the user object
			| ----------------------------------------
			| A promise is then set up to get the response
			| from the server and log it to console
			---------------------------------------- */
				this.$http.post('https://vuejs-http-582b9.firebaseio.com/data.json', this.user)
					.then(response => {
						console.log(response);
					}, error => {
						console.log(error);
					});
			},
			fetchData() {
			/* -----------------------------------------
			| The get method returns a promise. You need to 
			| return the response.json() object (which is a promise)
			| to another chained promise to which you pass the data
			| for use
			------------------------------------------*/
				this.$http.get('https://vuejs-http-582b9.firebaseio.com/data.json')
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
