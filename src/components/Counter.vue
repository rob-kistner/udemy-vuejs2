<template>
    <div>
        <h5>Counter: Locally Driven</h5>

        <!-- Note the addition of payload being passed 
        along to the action as the an argument to
        increment. Payload is automatically passed 
        into the action by VueX -->

        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from "vuex";

    export default {
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ])
        }
    }
</script>