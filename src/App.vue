<template>
	<div>
		<course-header 
			:section-num="sectionNum" 
			:section-name="sectionName" />
		<div class="container">
			<div class="row justify-content-header">
				<div class="col-sm-8 col-md-6">
					<h1>Built-in Directives</h1>
					<p v-text="'Some Text'"></p>
					<p v-html="'<strong>Some Text</strong>'"></p>
				</div>
			</div>
			<hr>
			<!--
				|
				| See main.js for implementation of v-highlight below
				|
			-->
			<div class="row justify-content-header">
				<div class="col-sm-8 col-md-6">
					<h1>Custom Directives</h1>
					<p v-highlight:background.delayed="'red'">Color this</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import CourseHeader from './components/CourseHeader.vue';

	export default {
		data() {
			return {
				sectionNum: 12,
				sectionName: 'Understanding Directives'
			}
		},
		components: {
			'course-header': CourseHeader,
		}
	}
</script>

<style>

hr { border-color: #f00; }

</style>
