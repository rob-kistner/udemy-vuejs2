const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    
    'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find( element => {
            return element.id == stockId;
        });
        if(record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },

    'SELL_STOCKS'(state, { stockId, quantity, stockPrice}) {
        const record = state.stocks.find( element => {
            return element.id == stockId;
        });
        if(record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
                // remove it
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    }
    
};

const actions = {
    sellStock( {commit}, order ) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
        //
        // getters param comes from stocks.js getter
        //
    stockPortfolio(state, getters) {
        return state.stocks.map( stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds(state) {
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}

/*
================== NOTES ==================

'ALL_CAPS_IN_QUOTES' mutation naming::
--------------------------------------
The all caps in quotes mutation name here
(and the mutations in stocks.js for that matter)
is just a different way of writing the mutation name 
to make it stand out in the IDE. It's the exact same as
naming it something like...

    buyStock(state, {stockId, quantity, stockPrice})

but supplies an alternative to creative namespaces
which was a confusing mess imo

------------------------------------------
*/
