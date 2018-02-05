<template>
	<div class="container">
		<div class="row">
			<div class="container mt-5">
				<h1>Routing</h1>
				<hr>
				<!--
					| Multiple named router views allow you to 
					| move the layout around with components
					| per parent component if you wanted.
					| 
					| Here, the middle <router-view /> without the 
					| router view name provides the default component
					| area and the Header can be moved around to the
					| header-top or header-bottom, for example
				-->

				<router-view name="header-top" />
				<transition name="slide" mode="out-in">
					<router-view />
				</transition>
				<router-view name="header-bottom" />
			</div>
		</div>
	</div>
</template>

<script>
	import Header from './components/Header.vue';
	
	export default {
		components: {
			appHeader: Header
		}
	}
</script>

<style>
	:root {
		--route-dur: 0.25s;
		--route-dist: translateY(-15px);
	}
	.slide-enter-active {
		animation: slide-in var(--route-dur) ease-out forwards;
	}
	.slide-leave {
		opacity: 1;
		transform: translateY(0);
	}
	.slide-leave-active {
		transition: opacity var(--route-dur) ease;
		opacity: 0;
		animation: slide-out var(--route-dur) ease-out forwards;
	}
	@keyframes slide-out {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: var(--route-dist);
		}
	}
	@keyframes slide-in {
		0% {
			transform: var(--route-dist);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
