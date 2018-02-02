
export const fruitMixin = {
	data() {
		return {
			fruits: [ 'apple', 'banana', 'kiwi', 'strawberry', 'blackberry' ],
			filterText: ''
		}
	},
	computed: {
		filteredFruit() {
			return this.fruits.filter( (item) => {
				return item.match(this.filterText);
			});
		}
	},
	created() {
		console.log("-- mixin 'fruitMixin' created...");
	}	
}