import Vue from 'vue';
import Vuex from 'vuex';
import {LOAD_DATASET, SET_DATASET, SET_LOADING, SET_STARTING_SEED, SET_URL} from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dataset: [],
        url: '',
        loading: false,
        startingSeed: ''
    },
    mutations: {
        [SET_DATASET](state, dataset)
        {
            state.dataset = dataset;
        },
        [SET_URL](state, url)
        {
            state.url = url;
        },
        [SET_LOADING](state, loading)
        {
            state.loading = loading;
        },
        [SET_STARTING_SEED](state, seed)
        {
            state.startingSeed = seed;
        }
    },
    actions: {
        async [LOAD_DATASET]({commit}, url)
        {
            commit(SET_LOADING, true);
            commit(SET_URL, url);
            try
            {
                commit(SET_DATASET, (await fetch(url).then(response => response.text()))
                                                     .split("\n")
                                                     .filter(s => s.length > 0));
            }
            catch(e)
            {
                //TODO handle errors
            }
            commit(SET_LOADING, false);
        }
    },
    modules: {}
});
