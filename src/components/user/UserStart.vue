<template>
	<div>
		<p>Please select a User&hellip;</p>
		<ul class="list-group">
			<router-link tag="li" class="list-group-item" style="cursor: pointer" to="/user/1">User 1</router-link>
			<router-link tag="li" class="list-group-item" style="cursor: pointer" to="/user/2">User 2</router-link>
			<router-link tag="li" class="list-group-item" style="cursor: pointer" to="/user/3">User 3</router-link>
		</ul>
	</div>
</template>


<style scoped>
	.list-group > .list-group-item {
		transition: all 0.25s;
	}
	.list-group > .list-group-item:hover {
		background-color: var(--primary);
		color: #fff;
		transition: all 0.25s;
	}
</style>