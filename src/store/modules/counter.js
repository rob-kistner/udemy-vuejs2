import * as types from '../types';

/* -----------------------------------------
    VUEX MODULE
    state, getters, mutations
    
    moved out of the store.js itself and 
    modularized, this then gets imported 
    back into store.js 
------------------------------------------*/
const state = {
    counter: 0,
    clicks: 0
};

const getters = {
    [types.CLICK_COUNTER]: state => state.clicks,
    [types.STRING_COUNTER]: state => state.clicks + " clicks",
    [types.COUNTER]: state => state.counter,
    [types.DOUBLE_COUNTER]: state => state.counter * 2
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

export default {
    state,
    mutations,
    getters,
    actions
}