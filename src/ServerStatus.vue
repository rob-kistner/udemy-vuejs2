<template>
	<div class="container">
		<p>Server Status: {{status}}</p>
		<hr>
		<button @click="changeStatus">Change the Status</button>
	</div>
</template>


<script>

export default {
	data: function() {
		return {
			status: 'Critical'
		}
	},
	methods: {
		changeStatus() {
			this.status = 'Normal';
		}
	}
}

</script>
