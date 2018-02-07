<template>
    <div>
        <h5>Another Counter (VueX driven)</h5>
        <p>This one is asynchronous thanks to passing the mutations through actions.</p>
        <p>The object passed in the click attr on these buttons passes an object to the actions allowing for async properties to be set.</p>
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