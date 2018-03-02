<template lang="pug">
    .col-sm-6.col-md-4.my-4
        .card.card-success
            .card-header.bg-info.text-white
                h4 {{ stock.name }}
            .card-body
                .card-text
                    small Price: {{ stock.price | currency }} Quantity: {{ stock.quantity }}
                    input.form-control(type="number", placeholder="Quantity", v-model.number="quantity", :class="{danger: insufficientQuantity}")
                    button.btn.btn-info.mt-3(@click="sellStock", :disabled="insufficientQuantity || quantity<=0 || !Number.isInteger(quantity)")
                        | {{ insufficientQuantity ? "Not enough stocks" : "Sell" }}
</template>

<script>
    import {mapActions} from 'vuex';

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
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                console.log(this.quantity + ', '+ this.stock.quantity);
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }

</script>

<style scoped>
    .danger {
        border: 2px solid #f00;
    }
</style>
