<template lang="pug">
    nav.navbar.navbar-expand-lg.navbar-light.bg-light

        router-link.navbar-brand(tag="a" to="/")
            h4 Stock Trader

        #navbarSupportedContent.collapse.navbar-collapse
            ul.navbar-nav.mr-auto
                router-link.nav-item(activeClass="active", tag="li", to="/stocks")
                    a.nav-link Stocks
                router-link.nav-item(activeClass="active", tag="li", to="/portfolio")
                    a.nav-link Portfolio
            ul.navbar-nav.ml-auto
                li.nav-item.dropdown
                    a.nav-link(href="#") End Day
                li.nav-item.dropdown
                    a#navbarDropdown.nav-link(href="#", data-toggle="dropdown") Save &amp; Load
                    .dropdown-menu
                        a(href="#") Load Data
                        a(href="#") Save Data
            p.navbar-text.my-2.ml-4 Funds: #[strong ${{ funds }}]
</template>

<script>

    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }

</script>

<style>

</style>
