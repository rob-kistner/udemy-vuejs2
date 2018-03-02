<template lang="pug">
    .col-sm-6.col-md-4.my-4
        .card.card-success
            .card-header.bg-success.text-white
                h4 {{ stock.name }}
                small Price: {{ stock.price | currency }}
            .card-body
                .card-text
                    input.form-control(type="number", placeholder="Quantity", v-model.number="quantity", :class="{danger: insufficientFunds}")
                    button.btn.btn-success.mt-3(@click="buyStock", :disabled="insufficientFunds || quantity<=0 || !Number.isInteger(quantity)")
                        | {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
                    small.d-block.mt-3(v-if="purchasePrice > 0")
                        | Purchase price #[strong.text-success {{ purchasePrice | currency }}]
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
            },
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds;
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        }
    }

</script>

<style scoped>
.danger {
    border: 2px solid #f00 !important;
}
</style>
