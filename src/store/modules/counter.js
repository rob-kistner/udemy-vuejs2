/* -----------------------------------------
    VUEX MODULE
    state, getters, mutations
    
    moved out of the store.js itself and 
    modularized, this then gets imported 
    back into store.js 
------------------------------------------*/
const state = {
    counter: 0
};

const getters = {
    clicks: state => state.clicks,
    counter: state => state.counter,
    doubleCounter: state => state.counter * 2,
    stringCounter: state => state.clicks + " clicks",
};

const mutations = {
        increment: (state, payload) => {
        state.counter += payload;
        state.clicks++;
    },
    decrement: (state, payload) => {
        if (state.counter > 0) {
            state.counter -= payload;
            state.clicks++;
        } else {
            state.counter = 0;
        }
    }
};

const actions = {
    increment: ({ commit }, payload) => {
        commit("increment", payload);
    },
    decrement: ({ commit }, payload) => {
        commit("decrement", payload);
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit("increment", payload.by);
        }, payload.dur);
    },
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit("decrement", payload.by);
        }, payload.dur);
    }
}

/* -----------------------------------------
    Note: since key shortcut, 
    Vue will expand these to (example): 
        state: state, 
        mutations: mutations,
    etc.
------------------------------------------*/
export default {
    state,
    mutations,
    getters,
    actions
}