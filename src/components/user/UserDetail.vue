<template>
    <div>
        <h3>Some User Details</h3>
        <p>User ID: {{ $route.params.id }}</p>
        <!--
            |
            | The query key/val below shows how to 
            | pass query parameters along to the route 
            | with multiple values
            |
        -->
        <router-link
            tag="button" 
            class="btn btn-primary" 
            :to="link">
        Edit this user
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit', 
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en',
                        q: 100
                    },
                        //
                        // Adds the hash to the uri
                        // but this still won't jump 
                        // down to it, need to add a scroll
                        // behavior as well. For this, we add
                        // scrollBehavior to the router object
                        // see (main.js const router)
                        //
                    hash: '#mydata'
                }
            }
        }
    }
</script>
