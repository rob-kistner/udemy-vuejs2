<template lang="pug">
    .container
        app-header
        section#content-main
            div
                transition(name="slide", mode="out-in")
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

<style>
    #content-main {
        padding: 2rem 0;
    }
    .slide-enter-active {
        animation: slide-in 150ms ease-out forwards;
    }
    .slide-leave-active {
        animation: slide-out 150ms ease-out forwards;
    }
    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(30px);
            opacity: 0;
        }
    }
</style>
