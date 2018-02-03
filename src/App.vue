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
				<!-- <input type="text" class="form-control" v-model="node"> -->
				<select class="form-control" v-model="node" @change="fetchData">
					<option value="" selected="selected">choose one...</option>
					<option value="alternative">alternative</option>
					<option value="data">data</option>
				</select>
				<ul class="list-group mt-3">
					<li 
						class="list-group-item" 
						v-for="u in users">
						<h5>{{u.username}}</h5>
						<p class="mb-0">{{u.email}}</p>
					</li>
				</ul>
				<hr>
				<div class="alert alert-warning">
					<h4>TO DO...</h4>
					<p>Not sure I'm fully understanding the custom resource part 
						of this section, may need to look into that further to 
						master it.
					</p>
				</div>
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
				resource: {},
				node: 'data'
			}
		},
		methods: {
			submit() {
				// this.resource.save({}, this.user);
				this.resource.saveAlt(this.user);
			},
			fetchData() {
				// this.$http.get()
				// 	.then(response => {
				// 		return response.json();
				// 	})
				// 	.then(data => {
				// 		const resultArray = [];
				// 		for(let key in data) {
				// 			resultArray.push(data[key]);
				// 		}
				// 		this.users = resultArray;
				// 	});

				// see https://medialize.github.io/URI.js/uri-template.html
				// for reference on uri template strings
				this.resource.getData({node: this.node})
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
			const customActions = {
				saveAlt: {method: 'POST', url: 'alternative.json'},
				getData: {method: 'GET'}
			}
			this.resource = this.$resource('{node}.json', {}, customActions)
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
