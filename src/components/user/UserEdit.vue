<template>
	<div>
		<h3>Editing User #{{ $route.params.id }}</h3>
		<!--
			| Extracting query parameters here
		-->
		<p>Locale: {{ $route.query.locale }}</p>
		<p>Analytics: {{ $route.query.q }}</p>
		<div style="height: 700px"></div>
		<p id="mydata">Data information</p>
	</div>
</template>