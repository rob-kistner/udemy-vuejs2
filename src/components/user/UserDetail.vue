<template>
    <div>
        <h3>Some User Details</h3>
        <!--
            | Parameters need to be extracted from the
            | global $route object
        -->
        <p>User ID: {{ $route.params.id }}</p>
        <router-link
            tag="button" 
            class="btn btn-primary" 
            :to="'/user/' + $route.params.id + '/edit'">
        Edit this user
        </router-link>
    </div>
</template>