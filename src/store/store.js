import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* -----------------------------------------
  Here, we're adding a new state "value" for 
  v-model use within VueX
------------------------------------------*/

export const store = new Vuex.Store({
         state: {
           counter: 0,
           clicks: 0,
            // new state called "value"
           value: 0
         },
         getters: {
           clicks: state => state.clicks,
           counter: state => state.counter,
           doubleCounter: state => state.counter * 2,
           stringCounter: state => state.clicks + " clicks",
            // getter for value
           value: state => {
             return state.value;
           }
         },
         mutations: {
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
           },
            // value mutation
           updateValue: (state, payload) => {
             state.value = payload;
           }
         },
         actions: {
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
           },
            // value action
           updateValue({commit}, payload) {
             commit('updateValue', payload);
           }
         }
       });