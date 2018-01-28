<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-12 text-center mt-4">
                <div class="alert alert-info">
                    Info: Click on a quote to delete it.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';

    export default {
        components: {
            appHeader: Header,
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        },
        data: function() {
            return {
                quotes: [
                    "Just a quote to see something",
                    "A bird in the hand is worth two in the bush",
                    "Don't count your chickens before they hatch",
                    ],
                maxQuotes: 10
            }
        },
        methods: {
            newQuote(quote) {
                if(this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete quotes first');
                }
                this.quotes.push(quote);
            },
            deleteQuote(index) {
                // remove 1 element at index
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
