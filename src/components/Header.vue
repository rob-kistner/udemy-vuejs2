<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <router-link tag="a" class="navbar-brand" to="/">
            <h4>
                Stock Trader
            </h4>
        </router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link class="nav-item" activeClass="active" tag="li" to="/stocks">
                    <a class="nav-link">Stocks</a>
                </router-link>
                <router-link class="nav-item" activeClass="active" tag="li" to="/portfolio">
                    <a class="nav-link">Portfolio</a>
                </router-link>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#">End Day</a>
                </li>
                <li class="nav-item dropdown">
                    <a class        = "nav-link" 
                       href         = "#" 
                       id          = "navbarDropdown" 
                       data-toggle = "dropdown">
                    Save &amp; Load
                    </a>
                    <div class="dropdown-menu">
                        <a class="" href="#">Load Data</a>
                        <a class="" href="#">Save Data</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

    export default {

    }

</script>

<style>

</style>
