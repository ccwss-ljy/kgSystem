import Vue from "vue";

import Vuex from 'vuex';

import pageStore from './page';  //获取页数

import tokenStore from './token' //toke的值

import selectStore from './select' //习题类型

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        pageStore,
        tokenStore,
        selectStore
    }
})