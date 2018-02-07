<template>
    <div>
        <h5>Another Counter (VueX driven)</h5>
        <button class="btn btn-primary" @click="increment">+</button>
        <button class="btn btn-primary" @click="decrement">-</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ])
        }
    }
</script>