<template>
	<div class="quote">
		<div class="title">
			<slot name="title"></slot>
			<span><slot name="subtitle">The Subtitle</slot></span>
		</div>
		<hr>
		<div>
			<slot></slot>
		</div>
	</div>
</template>


<script>
	
	export default {
		
	}

</script>

<!--
	|
	| NOTE:
	| Scoped styles applied from the child will
	| be the ones that actually apply to the component.
	| Redefining styles in the parent won't do anything 
	| to the child component.
	|
-->

<style scoped>

.quote {
	padding: 30px;
	margin: 30px auto;
	text-align: center;
	border: 1px solid #ccc;
	border-radius: 9px;
	box-shadow: 0px 0px 10px rgba(200,50,0,0.5);
}

hr {
	border-width: 3px;
	border-color: gray;
}

.title {
	font-style: italic;
	color: blue;
}
.content {
	color: blueviolet;
}
</style>
