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
            :to="{
                name: 'userEdit', 
                params: { id: $route.params.id },
                query: { locale: 'en', q: 100 }
            }">
        Edit this user
        </router-link>
    </div>
</template>