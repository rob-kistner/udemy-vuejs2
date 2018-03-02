<template lang="pug">
    div
        h1 Stocks
        .row
            app-stock(v-for="stock in stocks", :stock="stock", :key="stock.id")
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        components: {
            appStock: Stock
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        }
    }

</script>

<style>

</style>
