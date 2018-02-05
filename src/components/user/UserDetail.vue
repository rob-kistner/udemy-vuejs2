<template>
    <div>
        <h3>Some User Details</h3>
        <p>User ID: {{ $route.params.id }}</p>
        <!--
            |
            | Below shows how to refer to a named route,
            | this also allows us to more programmatically 
            | get the passed parameters than assembling 
            | a uri manually
            |
        -->
        <router-link
            tag="button" 
            class="btn btn-primary" 
            :to="{ name: 'userEdit', params: { id: $route.params.id } }">
        Edit this user
        </router-link>
    </div>
</template>