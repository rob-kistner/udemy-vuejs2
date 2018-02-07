import Vue from "vue";
import Vuex from "vuex";

    // module imports, named
import counter from './modules/counter';

import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

/* -----------------------------------------
    Here, we're adding a new state "value" for 
    v-model use within VueX
------------------------------------------*/

export const store = new Vuex.Store({
    state: {
        clicks: 0,
        value: 0
    },
    /* -----------------------------------------
        New addition naming the modules to import
        plus externalized getters, mutations and actions
    ------------------------------------------*/
    getters,
    mutations,
    actions,
    modules: {
        counter
    }
});

