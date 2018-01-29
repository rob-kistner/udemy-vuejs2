<template>
	<div class="my-4">
		<div id="on"
			@click='switched(true)'
			:class="{active: value}">On</div>
		<div id="off"
			@click='switched(false)'
			:class="{active: !value}">Off</div>
	</div>
</template>

<script>
	export default {
		props: ['value'],
		methods: {
			switched(isOn) {
				this.$emit('input', isOn);
			}
		}
	}
</script>

<style scoped>
	#on, #off {
		width: 40px;
		height: 20px;
		color: #999;
		background-color: lightgray;
		padding: 2px 2px 6px;
		display: inline-block;
		margin: 10px -2px;
		box-sizing: content-box;
		cursor: pointer;
		text-align: center;
	}
	#on {
		border-top-left-radius: 6px;
		border-bottom-left-radius: 6px;
	}
	#off {
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px;
	}
	#on:hover, #off:hover {
		color: #555;
	}
	#on.active {
		background-color: mediumseagreen;
		color: #fff;
		font-weight: bold;
	}
	#off.active {
		background-color: lightcoral;
		color: #fff;
		font-weight: bold;
	}
</style>
