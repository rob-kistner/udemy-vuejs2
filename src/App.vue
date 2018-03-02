<template lang="pug">
    .container
        app-header
        section#content-main
            div
                router-view
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }

</script>

<style scoped>
    #content-main {
        padding: 2rem 0;
    }
</style>
