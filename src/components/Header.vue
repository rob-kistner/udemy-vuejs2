<template>
	<ul class="nav nav-pills my-3">
		<router-link class="nav-link" tag="li" active-class="active" exact to="/"><a>Home</a></router-link>
		<router-link class="nav-link" tag="li" active-class="active" exact to="/user"><a>User</a></router-link>
		<router-link class="nav-link" tag="li" active-class="active" exact to="/notes"><a>Notes</a></router-link>
	</ul>
</template>

<script>
export default {

}
</script>

<style>
	ul.nav {
		padding-bottom: 1rem;
	}
	a:hover {
		text-decoration: none;
	}
	.active a {
		color: white;
	}
</style>
