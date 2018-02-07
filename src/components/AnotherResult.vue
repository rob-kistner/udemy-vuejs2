<template>
    <div>
        <p>Counter is: {{ dCounter }}</p>
        <p>Number of clicks {{ sCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters({
                dCounter: 'doubleCounter',
                sCounter: 'stringCounter'
            })  
        }
    }
</script>