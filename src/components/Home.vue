<template lang='pug'>
    div
        h1 Trade or View Your Portfolio
        h6 You may Save or View your data
        h6 Click on End Day to begin a new day
        hr
        p Your Funds: #[strong {{ funds | currency }}]
</template>

<script>

    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }

</script>

<style>

</style>
