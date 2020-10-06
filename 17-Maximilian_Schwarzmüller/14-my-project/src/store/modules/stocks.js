import {stocks} from './../../data/stocks';
// console.log(stocks);

const state = {
    stocks: []
}

const mutations = {
    setStocks(state, stocks) {
        state.stocks = stocks;
    },
    randomizeStocks(state) {
        console.log(state);
        
    }
}
const actions = {
    buyStock: ({commit}, order) => {
        console.log(order);
        commit();
    },
    initStocks: ({commit}, ) => {
        console.log(stocks);
        commit('setStocks', stocks)
    }
}

const getters = {
    stocks: state =>  state.stocks
}

export default {
    state,
    mutations,
    actions,
    getters

}