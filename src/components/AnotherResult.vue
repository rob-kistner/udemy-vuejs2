<template>
    <div>
        <p>Counter is: {{ dCounter }}</p>
        <p>Number of clicks {{ sCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        /* -----------------------------------------
            pull specified getters and reference in 
            the component.

            note how mapGetters hogs the whole computed
            object as a function. There's a solution using 
            ...mapGetters([]), i.e.: using the spread operator
            to pull the getters individually, but it involves 
            adding a babel plugin that seems to crash the 
            npm install. Committing as 17-257-getters-to-props
            before doing this install again
        ------------------------------------------*/
        // computed: mapGetters([
        //     'doubleCounter',
        //     'stringCounter'
        // ])
        /*----------------------------------------
            can also map to different names by
            passing an object like this
        ------------------------------------------*/
        computed: mapGetters({
            dCounter: 'doubleCounter',
            sCounter: 'stringCounter'
        })
    }
</script>