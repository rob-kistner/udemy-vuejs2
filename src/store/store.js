import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        clicks: 0
    },
    getters: {
        clicks: state => state.clicks,
        counter: state => state.counter,
        doubleCounter: state => state.counter * 2,
        stringCounter: state => state.clicks + ' clicks'
    },
    mutations: {
        increment: state => {
            state.counter++;
            state.clicks++;
        },
        decrement: state => {
            if(state.counter > 0) {
                state.counter--;
                state.clicks++;
            } else {
                state.counter = 0;
            }
        }
    }
})