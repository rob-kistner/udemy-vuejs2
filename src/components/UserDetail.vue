<template>
	<div class="component">
		<h3>User Details</h3>
		<p></p>
		<p>User name: {{userName}}</p>
		<p>Reversed user name: {{reversedName}}</p>
		<p>User age: {{userAge}}</p>
		<button @click="resetName">Reset User Name</button>
		<!-- resetting from prop function coming from parent -->
		<button @click="resetFn">Reset User Name from Parent</button>
	</div>
</template>

<script>
	import {eventBus} from '../main';

	export default {

		props: {
			userName: {
				type: String,
				default: 'RobK'
			},
			resetFn: Function,
			userAge: Number
		},
		computed: {
			reversedName() {
				return this.userName.split("").reverse().join("");
			}
		},
		methods: {
			// sends custom event that the name was reset
			resetName() {
				this.userName = 'Max';
				this.$emit('nameWasReset', this.userName);
			}
		},
		created() {
			eventBus.$on('ageWasEdited', (age) => {
				this.userAge = age;
			});
		}
	}
</script>

<style scoped>
	div {
		background-color: lightcoral;
	}
</style>
