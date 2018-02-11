<template>
    <div>
        <h1>Stocks</h1>
        <div class="row">
            <app-stock 
                v-for="stock in stocks" 
                :stock="stock"
                :key="stock.id">
            </app-stock>
        </div>
    </div>
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
