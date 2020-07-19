import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dataset: []
    },
    getters: {
        hasData: state =>
        {
            return state.dataset.length === 0;
        }
    },
    mutations: {
        setDataset: (state, dataset) =>
        {
            state.dataset = dataset;
        }
    },
    actions: {},
    modules: {}
});
