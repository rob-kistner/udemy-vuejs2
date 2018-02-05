<template>
	<ul class="nav nav-pills my-3">
		<!-- <li class="nav-item"> -->
		<router-link class="nav-link" tag="li" active-class="active" exact to="/"><a>Home</a></router-link>
		<router-link class="nav-link" tag="li" active-class="active" exact to="/user/1"><a>User 1</a></router-link>
		<router-link class="nav-link" tag="li" active-class="active" exact to="/user/2"><a>User 2</a></router-link>
		<router-link class="nav-link" tag="li" active-class="active" exact to="/config-notes"><a>Configuration Notes</a></router-link>
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
