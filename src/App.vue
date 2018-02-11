<template>
    <div class="container">
        <app-header></app-header>
        <section  id="content-main" class="row justify-content-center">
            <div>
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        components: {
            appHeader: Header
        }
    }

</script>

<style scoped>
    #content-main {
        padding: 2rem 0;
    }
</style>
