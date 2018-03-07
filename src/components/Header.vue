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
                li.nav-item
                    a.nav-link(href="#", @click="endDay") End Day
                li.nav-item.dropdown(@click="toggleDropdown")
                    a#navbarDropdown.nav-link(href="#", data-toggle="dropdown") Save &amp; Load
                    .dropdown-menu(:class="{show: isDropdownOpen}")
                        a.dropdown-item(href="#", @click="loadData") Load Data
                        a.dropdown-item(href="#", @click="saveData") Save Data
            p.navbar-text.my-2.ml-4 Funds: #[strong {{ funds | currency }}]
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        data() {
            return {
                isDropdownOpen: false
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                fetchData: 'loadData'
            }),
            toggleDropdown() {
                this.isDropdownOpen = !this.isDropdownOpen;
            },
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                }
                this.$http.put('data.json', data);
            },
            loadData() {
                this.fetchData();
            }
        }
    }

</script>

<style>

</style>
