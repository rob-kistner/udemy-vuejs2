<template>
    <div>
        <h5>Another Counter</h5>
        <button class="btn btn-primary" @click="aInc({by: 50, dur:250})">+</button>
        <button class="btn btn-primary" @click="aDec({by: 50, dur:500})">-</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions({
                aInc: 'asyncIncrement',
                aDec: 'asyncDecrement'
            })
        }
    }
</script>