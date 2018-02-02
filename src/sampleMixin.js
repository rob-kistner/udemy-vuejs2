export const sampleMixin = {
	data() {
		return {
			mixSample: "Mixin Example Text"
		}
	},
	computed: {
		mixReverse() {
			return this.mixSample.split("").reverse().join("");
		},
		mixShowLength() {
			return `${this.mixSample} (${this.mixSample.length})`;
		}
	}
}