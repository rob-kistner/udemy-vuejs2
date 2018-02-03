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
			submit() {
				// this.resource.save({}, this.user);
				this.resource.saveAlt(this.user);
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
			const customActions = {
				saveAlt: {method: 'POST', url: 'alternative.json'}
			}
			this.resource = this.$resource('data.json', {}, customActions)
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
