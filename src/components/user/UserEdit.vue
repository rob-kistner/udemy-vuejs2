<template>
	<div>
		<h3>Editing User #{{ $route.params.id }}</h3>
		<p>Locale: {{ $route.query.locale }}</p>
		<p>Analytics: {{ $route.query.q }}</p>
		<hr>
		<button class="btn btn-primary" @click="confirmed = true">Confirm</button>
		<div style="height: 700px"></div>
		<p id="mydata">Data information</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			confirmed: false
		}
	},
	//
	// if the user cofirms (i.e: with the button)
	// they can navigate away, otherwise they get 
	// denied and stay on the component
	//
	beforeRouteLeave(to, from, next){
		if( this.confirmed ) {
			next();
		} else {
			if(confirm('are you sure?')) {
				next();
			} else {
				next(false);
			}
		}
	}
}
</script>
