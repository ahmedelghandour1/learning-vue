import Vuex from 'vuex';
// import Vue from 'vue/dist/vue';
import Vue from 'vue';


Vue.use(Vuex);

const store = new Vuex.Store({ 
    state: {
        counter: 0
    },
    getters: {
        getCounter: (state, getters) => {
            return state.counter;
        },
        getDoubleCounter: (state, getters) => {
            return state.counter * 2;
        }
    },
    mutations: {
        RESET: state => state.counter = 0,
        INCREMENT: state => state.counter++,
        INCREMENTBY: (state, payload) => state.counter + payload,
        DECREMENT: state => state.counter--,
        DECREMENTBY: (state, payload) => state.counter - payload,

    }
})

export default store;