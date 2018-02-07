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
           stringCounter: state => state.clicks + " clicks"
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
           }
         },
         /* -----------------------------------------
            context in VueX just gives actions access
            to the commit method

            pulling them out with destructed params like below 
            allows you to use asynchronous tasks for mutations, 
            which normally need to be synchronous by nature

            The 2nd param (payload) comes from the components 
            to customize the actions. Payloads attached 
            to the async actions here are objects with 
            multiple values to control the timeout durations
        ------------------------------------------*/
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
           }
         }
       });