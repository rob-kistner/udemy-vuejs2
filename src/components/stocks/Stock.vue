<template>
    <div class="col-sm-6 col-md-4 my-4">
        <div class="card card-success">
            <div class="card-header bg-success text-white">
                <h4>{{ stock.name }}</h4>
                <small>Price: {{ stock.price }}</small>
            </div>
            <div class="card-body">
                <div class="card-text">
                    <input class="form-control"
                        type="number" 
                        placeholder="Quantity"
                        v-model="quantity"
                    />
                    <button
                        class="btn btn-success mt-3"
                        @click="buyStock"
                        :disabled="quantity <= 0 || !Number.isInteger(quantity)"
                        >Buy</button>
                    <small v-if="purchasePrice > 0" class="d-block mt-3">
                        Purchase price <strong class="text-success">$ {{ purchasePrice }}</strong>
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: [
            'stock'
        ],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            purchasePrice() {
                return this.quantity * this.stock.price;
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                console.log(order);
                this.quantity = 0;
            }
        }
    }

</script>

<style>

</style>
