import Vue from 'vue';
import Vuex from 'Vuex';

import stocks from './modules/stocks';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks
    }
});