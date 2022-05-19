import Vue from "vue";

import Vuex from 'vuex';

import pageStore from './page';

import tokenStore from './token'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        pageStore,
        tokenStore
    }
})